import {
  Component,
  ElementRef,
  Host,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { Editor, EditorChangeLinkedList } from 'codemirror';
import { DEFAULT_OPTIONS, MarkdownEditor, MarkdownEditorOptions } from 'markdown-editor-core';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Keybindings } from '../services/keybindings.service';
import { StatusbarService } from '../services/statusbar.service';
import { ToolbarService } from '../services/toolbar.service';
import { LanguageTag } from '../types/language-tag';
import { ObservableEmitter } from '../types/observable-emitter';
import { OptionalI18n } from '../types/optional-i18n';
import { Options } from '../types/options';
import { StatusbarItemDef, StatusbarItemNormalized } from '../types/statusbar';
import { Icon, ToolbarItemDef, ToolbarItemNormalized } from '../types/toolbar';
import { fromCmEvent } from '../util/from-cm-event';

const markdownEditorTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 0,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'ngx-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: markdownEditorTooltipDefaults },
    ToolbarService,
    StatusbarService,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownEditorComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * Data string to set as content of the editor.
   */
  @Input() readonly data: string = '';

  /**
   * Options to configure _Ngx Markdown Editor_.
   *
   * Basically `MarkdownEditorOptions` from _Markdown Editor Core_ are forwarded,
   * including some adjustments and extensions.
   */
  @Input() readonly options: Options = {};

  /**
   * Custom set of toolbar items.
   */
  @Input() readonly toolbar: ToolbarItemDef[] = [];

  /**
   * Custom set of statusbar items.
   */
  @Input() readonly statusbar: StatusbarItemDef[] = [];

  /**
   * The current language applied to internationalized items.
   */
  @Input() readonly language: LanguageTag = 'en';

  /**
   * The label text displayed at the top of the component. The label will be hidden, if this is `undefined`.
   */
  @Input() readonly label?: string;

  /**
   * Specifies whether the editor is a required form field. An asterisk will be appended to the label.
   */
  @Input() readonly required = false;

  /**
   * Specifies whether and which Angular Material style is used.
   */
  @Input() readonly materialStyle: boolean | 'standard' | 'fill' | 'legacy' = false;

  /**
   * Specifies whether the editor is disabled.
   */
  @Input() readonly disabled = false;

  /**
   * Specifies whether the toolbar is rendered.
   */
  @Input() readonly showToolbar = true;

  /**
   * Specifies whether the statusbar is rendered.
   */
  @Input() readonly showStatusbar = true;

  /**
   * Specifies whether tooltips are shown for toolbar items.
   */
  @Input() readonly showTooltips = true;

  /**
   * Specifies whether the key combination is included in the tooltip.
   */
  @Input() readonly shortcutsInTooltips = true;

  /**
   * Emits when the editor's content changes.
   */
  @Output() contentChange = new ObservableEmitter<{ instance: Editor; changes: EditorChangeLinkedList[] }>();

  /**
   * Emits when the editor's cursor is moved.
   */
  @Output() cursorActivity = new ObservableEmitter<{ instance: Editor }>();

  /**
   * Emits when the editor receives focus.
   */
  @Output() editorFocus = new ObservableEmitter<{ instance: Editor; event: FocusEvent }>();

  /**
   * Emits when the editor loses focus.
   */
  @Output() editorBlur = new ObservableEmitter<{ instance: Editor; event: FocusEvent }>();

  /**
   * The `mat-select` element of `setHeadingLevel`.
   */
  @ViewChild('setHeadingLevel') setHeadingLevelDropdown: MatSelect;

  /**
   * The `MarkdownEditor` instance of _Markdown Editor Core_.
   */
  @ViewChild('markdown') markdown: MarkdownComponent;

  /**
   * The `MarkdownEditor` instance of _Markdown Editor Core_.
   */
  public mde: MarkdownEditor;

  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public normalizedToolbarItems: ToolbarItemNormalized[] = [];
  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public activeToolbarItems: (boolean | number)[] = [];
  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public toolbarItemTooltips: string[] = [];
  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public normalizedStatusbarItems: StatusbarItemNormalized[] = [];
  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public showPreview = false;
  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public showSideBySidePreview = false;
  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public blockBlur = false;
  /**
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  public focused = false;

  private shortcutResetter = new Subject();

  @HostBinding('class.disabled') get disabledStyle() {
    return this.disabled;
  }
  @HostBinding('class.default') get default() {
    return !this.options.editorThemes && !this.materialStyle;
  }
  @HostBinding('class.material') get material() {
    return this.materialStyle;
  }
  @HostBinding('class') get class() {
    return this.options.editorThemes;
  }
  @HostBinding('class.appearance-standard') get appearanceStandard() {
    return this.materialStyle === true || this.materialStyle === 'standard';
  }
  @HostBinding('class.appearance-fill') get appearanceFill() {
    return this.materialStyle === 'fill';
  }
  @HostBinding('class.appearance-legacy') get appearanceLegacy() {
    return this.materialStyle === 'legacy';
  }
  @HostBinding('class.focused') get focusedStyle() {
    return this.focused;
  }

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly hotkeys: Keybindings,
    private readonly hostElement: ElementRef,
    private readonly markdownService: MarkdownService,
    @Host() private readonly toolbarService: ToolbarService,
    @Host() private readonly statusbarService: StatusbarService
  ) {
    // Render checkbox dummies which can be replaced by an `<input type="checkbox"> later,
    // because the checkboxes rendered by marked.js inside ngx-markdown are removed by Angular sanitizer.
    this.markdownService.renderer.checkbox = (checked) => (checked ? '[x] ' : '[ ] ');
  }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    const wrapper = this.hostElement.nativeElement.querySelector('.ngx-markdown-editor-text-editor') as HTMLElement;
    this.mde = new MarkdownEditor(wrapper, this.mapOptions(this.options));

    this.contentChange.emitObservable(fromCmEvent(this.mde.cm, 'changes'));
    this.cursorActivity.emitObservable(fromCmEvent(this.mde.cm, 'cursorActivity'));
    this.editorFocus.emitObservable(fromCmEvent(this.mde.cm, 'focus'));
    this.editorBlur.emitObservable(fromCmEvent(this.mde.cm, 'blur'));

    this.toolbarService.defineDefaultItems(this);
    this.statusbarService.defineDefaultItems(this.mde);

    // Necessary to apply `this.mde` instance to default toolbar items
    // as `ngOnChanges()` is executed before `ngOnInit()`.
    this.ngOnChanges({ data: new SimpleChange(undefined, this.data, true) });
    this.mde.cm.clearHistory();

    fromCmEvent(this.mde.cm, 'focus').subscribe(() => {
      this.focused = true;
    });
    fromCmEvent(this.mde.cm, 'blur').subscribe(() => {
      if (!this.blockBlur) this.focused = false;
    });
    fromCmEvent(this.mde.cm, 'cursorActivity').subscribe(() => {
      this.determineActiveButtons();
    });
  }

  /**
   * @inheritdoc
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.mde) {
      if (this.showToolbar) {
        this.applyToolbarItems();
      }
      if (this.showStatusbar) {
        this.applyStatusbarItems();
      }
      this.applyDisabled();
      this.mde.setOptions(this.mapOptions(this.options));
      if (changes.data) {
        this.mde.setContent(changes.data.currentValue);
      }
      this.createTooltips();
      this.determineActiveButtons();
      this.setCodeMirrorClasses();
      this.applyMaterialStyle();
    }
  }

  /**
   * @inheritdoc
   */
  ngOnDestroy() {
    this.shortcutResetter.next();
    this.shortcutResetter.complete();
  }

  /**
   * Toggles the full-size preview.
   */
  togglePreview() {
    this.showPreview = !this.showPreview;
    this.showSideBySidePreview = false;
    if (this.showPreview) {
      // Necessary to wait until Angular change detector has finished
      setTimeout(() => this.hostElement.nativeElement.querySelector('.ngx-markdown-editor-wrapper')?.focus(), 100);
    } else {
      // Necessary to wait until Angular change detector has finished
      setTimeout(() => this.mde.focus(), 100);
    }
  }

  /**
   * Toggles the side-by-side preview.
   */
  toggleSideBySidePreview() {
    this.showSideBySidePreview = !this.showSideBySidePreview;
    this.showPreview = false;
    // Timeout necessary until Angular change detector has finished
    setTimeout(() => this.mde.focus(), 100);
  }

  /**
   * Triggered when a toolbar button is clicked.
   *
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  onButtonClick(item: ToolbarItemNormalized) {
    item.action();
    this.mde.focus();
    this.determineActiveButtons();
  }

  /**
   * Resolves the shortcut for the specified item and appends it to the item's tooltip text,
   * if `shortcutsInTooltips` is enabled.
   *
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  createTooltip(item: ToolbarItemNormalized): string {
    let shortcut: string | undefined = this.mde.getShortcuts()[item.name] || item.shortcut;
    if (item.name === 'undo') shortcut = 'Ctrl-Z';
    else if (item.name === 'redo') shortcut = 'Shift-Ctrl-Z';
    if (/Mac/.test(navigator.platform)) shortcut = shortcut?.replace(/Ctrl/gi, 'Cmd');
    const shortcutString = this.shortcutsInTooltips && shortcut ? ' (' + shortcut + ')' : '';
    return item.tooltip + shortcutString;
  }

  /**
   * Replaces the checkbox dummies rendered inside the preview with actual checkboxes (also see constructor).
   *
   * _Not intended to be used outside the component. Only made public for access inside template._
   */
  replaceCheckboxDummies() {
    this.markdown?.element.nativeElement.querySelectorAll('li').forEach((el) =>
      el.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          if (/^\[ \] /.test(node.nodeValue || '')) {
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('disabled', '');
            el.insertBefore(input, node);
            node.nodeValue = node.nodeValue?.replace(/^\[ \]/, '') || null;
          } else if (/^\[x\] /.test(node.nodeValue || '')) {
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('disabled', '');
            input.setAttribute('checked', '');
            el.insertBefore(input, node);
            node.nodeValue = node.nodeValue?.replace(/^\[x\]/, '') || null;
          }
        }
      })
    );
  }

  /**
   * Maps `NgxMdeOptions` to `MarkdownEditorOptions`.
   */
  private mapOptions(options: Options | undefined): MarkdownEditorOptions | undefined {
    if (!options) {
      return undefined;
    }

    const getMarkdownGuideUrl = (url: OptionalI18n<string> | undefined): string | undefined => {
      if (!url) return undefined;

      if (typeof url === 'string') {
        return url;
      } else {
        return url[this.language] || url.default;
      }
    };

    const markupTheme = options.markupThemes || [];
    let editorThemes = options.editorThemes || [];
    if (this.materialStyle) {
      editorThemes = editorThemes ? editorThemes.concat('mde-material') : ['mde-material'];
    } else {
      if (editorThemes) {
        const index = editorThemes.findIndex((t) => t === 'mde-material');
        if (index > -1) editorThemes.splice(index, 1);
      }
    }

    const shortcuts: Options['shortcuts'] = {};

    for (const actionName in DEFAULT_OPTIONS.shortcuts) {
      if (options.shortcuts) {
        shortcuts[actionName] = options.shortcuts[actionName];
      }
    }

    return {
      ...options,
      shortcuts,
      disabled: this.disabled,
      themes: editorThemes.concat(markupTheme),
      markdownGuideUrl: getMarkdownGuideUrl(options.markdownGuideUrl),
    };
  }

  /**
   * Applies the custom toolbar or the default toolbar as fallback.
   */
  private applyToolbarItems() {
    let items: ToolbarItemDef[];
    if (this.toolbar.length) {
      items = this.toolbar;
    } else {
      items = this.toolbarService.DEFAULT_TOOLBAR;
    }
    this.normalizedToolbarItems = [];
    for (const toolbarItem of items) {
      const item = this.getNormalizedItem(toolbarItem);
      if (!item) {
        console.warn(`No default item defined for name "${toolbarItem}"`);
        continue;
      }
      this.addSvgIcon(item);
      this.normalizedToolbarItems.push(item);
    }
    this.applyShortcuts(this.normalizedToolbarItems);
  }

  /**
   * Returns a complete item for all combinations of how a toolbar item can be specified and
   * resolves the current value of internationalized properties. Only returns `undefined` for
   * items specified by name and no such item can be found.
   *
   * In detail, item normalization means (in addition to i18n resolution):
   * - For built-in items specified by name string, resolves the default item.
   * - For built-in items specified partly, completes the object with default values for the missing properties.
   * - For custom items specified partly, completes the object with empty values for the missing properties.
   * - For custom items specified fully, returns as is.
   * - For unknown items specified by name string, returns `undefined`.
   */
  private getNormalizedItem(toolbarItem: ToolbarItemDef): ToolbarItemNormalized | undefined {
    const getTooltip = (tooltip: OptionalI18n<string>): string => {
      if (typeof tooltip === 'string') {
        return tooltip;
      } else {
        return tooltip[this.language] || tooltip.default;
      }
    };

    const getIcon = (icon: OptionalI18n<Icon>): Icon => {
      if ('format' in icon) {
        return icon;
      } else {
        return icon[this.language] || icon.default;
      }
    };

    if (typeof toolbarItem === 'string') {
      return this.toolbarService.getDefaultItem(toolbarItem);
    } else {
      let defaultItem = this.toolbarService.getDefaultItem(toolbarItem.name);
      if (!defaultItem) {
        defaultItem = {
          name: '',
          action: () => {},
          tooltip: '',
          icon: { format: 'material', iconName: '' },
          disableOnPreview: false,
        };
      }
      return {
        name: toolbarItem.name,
        action: toolbarItem.action || defaultItem.action,
        shortcut: toolbarItem.shortcut || defaultItem.shortcut,
        isActive: toolbarItem.isActive || defaultItem.isActive,
        tooltip: (toolbarItem.tooltip && getTooltip(toolbarItem.tooltip)) || defaultItem.tooltip,
        icon: (toolbarItem.icon && getIcon(toolbarItem.icon)) || defaultItem.icon,
        disableOnPreview: toolbarItem.disableOnPreview || defaultItem?.disableOnPreview,
      };
    }
  }

  /**
   * Creates tooltips for all configured toolbar items and stores them in `this.toolbarItemTooltips`.
   */
  private createTooltips() {
    this.toolbarItemTooltips = new Array(this.normalizedToolbarItems.length);
    for (let i = 0; i < this.normalizedToolbarItems.length; i++) {
      const item = this.normalizedToolbarItems[i];
      this.toolbarItemTooltips[i] = this.showTooltips ? this.createTooltip(item) : '';
    }
  }

  /**
   * Applies custom shortcuts.
   *
   * For items, whose actions originate in _Markdown Editor Core_, `options.shortcuts` is
   * modified. For items that are specific to _Ngx Markdown Editor_ keybindings are applied to
   * the `<ngx-markdown-editor>` element.
   */
  private applyShortcuts(items: ToolbarItemNormalized[]) {
    if (this.options.shortcutsEnabled === 'none') {
      return;
    }

    const applySetHeadingLevelShortcut = (shortcut: string) => {
      const s = shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
      return this.hotkeys
        .addKeybinding(this.hostElement.nativeElement, s)
        .pipe(takeUntil(this.shortcutResetter))
        .subscribe(() => {
          this.blockBlur = true;
          this.setHeadingLevelDropdown.open();
          this.setHeadingLevelDropdown.focus();
        });
    };

    const applyShortcut = (shortcut: string, action: () => void) => {
      const s = shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
      return this.hotkeys
        .addKeybinding(this.hostElement.nativeElement, s)
        .pipe(takeUntil(this.shortcutResetter))
        .subscribe(() => {
          action();
          this.determineActiveButtons();
        });
    };

    this.shortcutResetter.next();
    const shortcuts = {};
    const appliedNgxMdeShortcuts: { [name: string]: Subscription | undefined } = {};

    if (this.options.shortcutsEnabled !== 'customOnly') {
      const previewItem = this.toolbarService.getDefaultItem('togglePreview');
      if (previewItem?.shortcut) {
        const subscription = applyShortcut(previewItem.shortcut, previewItem.action);
        appliedNgxMdeShortcuts[previewItem.name] = subscription;
      }

      const sideBySidePreviewItem = this.toolbarService.getDefaultItem('toggleSideBySidePreview');
      if (sideBySidePreviewItem?.shortcut) {
        const subscription = applyShortcut(sideBySidePreviewItem.shortcut, sideBySidePreviewItem.action);
        appliedNgxMdeShortcuts[sideBySidePreviewItem.name] = subscription;
      }
    }

    for (const item of items) {
      if (item.name === 'setHeadingLevel' && item.shortcut) {
        const subscription = applySetHeadingLevelShortcut(item.shortcut);
        appliedNgxMdeShortcuts[item.name] = subscription;
      } else if (item.name in DEFAULT_OPTIONS.shortcuts) {
        shortcuts[item.name] = item.shortcut;
      } else if (item.shortcut) {
        appliedNgxMdeShortcuts[item.name]?.unsubscribe();
        const subscription = applyShortcut(item.shortcut, item.action);
        appliedNgxMdeShortcuts[item.name] = subscription;
      }
    }

    for (const actionName in this.options.shortcuts) {
      if (this.options.shortcuts[actionName]) {
        const shortcut = this.options.shortcuts[actionName];
        if (actionName === 'setHeadingLevel') {
          const item = items.find((i) => i.name === actionName);
          if (item) {
            appliedNgxMdeShortcuts[actionName]?.unsubscribe();
            applySetHeadingLevelShortcut(shortcut);
            item.shortcut = shortcut;
          }
        } else if (actionName in DEFAULT_OPTIONS.shortcuts) {
          shortcuts[actionName] = shortcut;
        } else {
          const item = items.find((i) => i.name === actionName);
          const defaultItem = this.toolbarService.getDefaultItem(actionName);
          if (item) {
            appliedNgxMdeShortcuts[actionName]?.unsubscribe();
            applyShortcut(shortcut, item.action);
            item.shortcut = shortcut;
          } else if (defaultItem) {
            appliedNgxMdeShortcuts[actionName]?.unsubscribe();
            applyShortcut(shortcut, defaultItem.action);
          }
        }
      }
    }

    this.options.shortcuts = shortcuts;
  }

  /**
   * Adds the SVG specified inside `item.icon` to the injected `MatIconRegistry` instance.
   */
  private addSvgIcon(item: ToolbarItemNormalized) {
    switch (item.icon.format) {
      case 'svgString':
        this.iconRegistry.addSvgIconLiteral(
          item.icon.iconName,
          this.domSanitizer.bypassSecurityTrustHtml(item.icon.svgHtmlString)
        );
        break;
      case 'svgFile':
        this.iconRegistry.addSvgIcon(
          item.icon.iconName,
          this.domSanitizer.bypassSecurityTrustResourceUrl(item.icon.runtimePath)
        );
        break;
    }
  }

  /**
   * Applies the custom statusbar or the default statusbar as fallback.
   */
  private applyStatusbarItems() {
    let items: StatusbarItemDef[];
    if (this.statusbar.length) {
      items = this.statusbar;
    } else {
      items = this.statusbarService.DEFAULT_STATUSBAR;
    }
    this.normalizedStatusbarItems = [];
    for (const toolbarItem of items) {
      const item = this.getNormalizedStatusbarItem(toolbarItem);
      if (!item) {
        console.warn(`No default item defined for name "${toolbarItem}"`);
        continue;
      }
      this.normalizedStatusbarItems.push(item);
    }
  }

  /**
   * Returns a complete item for all combinations of how a status item can be specified and
   * resolves the current value of internationalized properties. Only returns `undefined` for
   * items specified by name and no such item can be found.
   *
   * In detail, item normalization means (in addition to i18n resolution):
   * - For built-in items specified by name string, resolves the default item.
   * - For custom items, returns as is.
   * - For unknown items specified by name string, returns `undefined`.
   */
  private getNormalizedStatusbarItem(statusbarItem: StatusbarItemDef): StatusbarItemNormalized | undefined {
    const getValue = (value: OptionalI18n<Observable<string>>): Observable<string> => {
      if (value instanceof Observable) {
        return value;
      } else {
        return value[this.language] || value.default;
      }
    };

    if (typeof statusbarItem === 'string') {
      return this.statusbarService.getDefaultItem(statusbarItem);
    } else {
      return {
        name: statusbarItem.name,
        value: getValue(statusbarItem.value),
      };
    }
  }

  /**
   * Executes the `item.isActive()` function for all toolbar items and saves the state in `activeItems`.
   */
  private determineActiveButtons() {
    this.activeToolbarItems = new Array(this.normalizedToolbarItems.length);
    for (let i = 0; i < this.normalizedToolbarItems.length; i++) {
      const item = this.normalizedToolbarItems[i];
      if (item.isActive) {
        this.activeToolbarItems[i] = item.isActive();
      } else {
        this.activeToolbarItems[i] = false;
      }
    }
  }

  /**
   * Applies the disabled state. If disabled, the full-size preview activated.
   */
  private applyDisabled() {
    if (this.disabled) {
      this.showPreview = true;
      this.showSideBySidePreview = false;
      this.shortcutResetter.next();
    } else {
      this.showPreview = false;
      this.showSideBySidePreview = false;
    }
  }

  /**
   * Applies the material theme to both the editor and the preview. Particularly adds / removes
   * an underline element known from Angular Material `mat-input` form fields.
   */
  private applyMaterialStyle() {
    const codemirror = this.hostElement.nativeElement.querySelector('.CodeMirror');
    if (codemirror) {
      const underline = codemirror.querySelector('.underline');
      if (this.materialStyle) {
        if (!underline) {
          const newUnderline = document.createElement('div');
          newUnderline.setAttribute('class', 'underline');
          const newRipple = document.createElement('div');
          newRipple.setAttribute('class', 'ripple');
          newUnderline.append(newRipple);
          codemirror.append(newUnderline);
        }
      } else {
        underline?.remove();
      }
    }
    const preview = this.hostElement.nativeElement.querySelector('.ngx-markdown-editor-preview');
    if (preview) {
      const underline = preview.querySelector('.underline');
      if (this.materialStyle) {
        if (!underline) {
          const newUnderline = document.createElement('div');
          newUnderline.setAttribute('class', 'underline');
          preview.append(newUnderline);
        }
      } else {
        underline?.remove();
      }
    }
  }

  /**
   * Adds and removes classes to/from the CodeMirror element according to configuration.
   */
  private setCodeMirrorClasses() {
    const codemirror = this.hostElement.nativeElement.querySelector('.CodeMirror');
    if (this.options.lineNumbers) {
      codemirror?.classList.add('CodeMirror-lineNumbers');
    } else {
      codemirror?.classList.remove('CodeMirror-lineNumbers');
    }
  }
}

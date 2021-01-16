import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
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
import { DEFAULT_STATUSBAR, defineDefaultStatusbarItems, getDefaultStatusbarItem } from './default-statusbar-config';
import { DEFAULT_TOOLBAR, defineDefaultToolbarItems, getDefaultItem } from './default-toolbar-config';
import {
  LanguageTag,
  NgxMdeIcon,
  NgxMdeItemDef,
  NgxMdeItemNormalized,
  NgxMdeOptions,
  NgxMdeStatusbarItemDef,
  NgxMdeStatusbarItemNormalized,
  OptionalI18n,
} from './types';
import { fromCmEvent } from './util/from-cm-event';
import { Hotkeys } from './util/hotkeys.service';
import { ObservableEmitter } from './util/observable-emitter';

const markdownEditorTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 0,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'ngx-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: markdownEditorTooltipDefaults }],
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownEditorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() readonly options: NgxMdeOptions = {};
  @Input() readonly toolbarItems?: NgxMdeItemDef[];
  @Input() readonly statusbarItems?: NgxMdeStatusbarItemDef[];
  @Input() readonly shortcutsInTooltips = true;
  @Input() readonly materialStyle: boolean | 'standard' | 'fill' | 'legacy' = false;
  @Input() readonly label?: string;
  @Input() readonly disabled = false;
  @Input() readonly showToolbar = true;
  @Input() readonly showStatusbar = true;
  @Input() readonly required = false;
  @Input() readonly language: LanguageTag = 'en';

  @Output() contentChange = new ObservableEmitter<{ instance: Editor; changes: EditorChangeLinkedList[] }>();
  @Output() cursorActivity = new ObservableEmitter<{ instance: Editor }>();
  @Output() editorFocus = new ObservableEmitter<{ instance: Editor; event: FocusEvent }>();
  @Output() editorBlur = new ObservableEmitter<{ instance: Editor; event: FocusEvent }>();

  @ViewChild('setHeadingLevel') setHeadingLevelDropdown: MatSelect;
  @ViewChild('markdown') markdown: MarkdownComponent;

  public mde: MarkdownEditor;
  public normalizedItems: NgxMdeItemNormalized[];
  public activeItems: (boolean | number)[];
  public normalizedStatusbarItems: NgxMdeStatusbarItemNormalized[];
  public showPreview = false;
  public showSideBySidePreview = false;
  public blockBlur = false;
  public focused = false;

  private shortcutResetter = new Subject();

  @HostBinding('class.disabled') private get disabledStyle() {
    return this.disabled;
  }
  @HostBinding('class.default') private get default() {
    return !this.options.editorTheme && !this.materialStyle;
  }
  @HostBinding('class.material') private get material() {
    return this.materialStyle;
  }
  @HostBinding('class.appearance-standard') private get appearanceStandard() {
    return this.materialStyle === true || this.materialStyle === 'standard';
  }
  @HostBinding('class.appearance-fill') private get appearanceFill() {
    return this.materialStyle === 'fill';
  }
  @HostBinding('class.appearance-legacy') private get appearanceLegacy() {
    return this.materialStyle === 'legacy';
  }
  @HostBinding('class.focused') private get focusedStyle() {
    return this.focused;
  }

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly hotkeys: Hotkeys,
    private readonly hostElement: ElementRef,
    private readonly markdownService: MarkdownService
  ) {
    // Render checkbox dummies which can be replaced by an `<input type="checkbox"> later,
    // because the checkboxes rendered by marked.js inside ngx-markdown are removed by Angular sanitizer.
    this.markdownService.renderer.checkbox = (checked) => (checked ? '[x] ' : '[ ] ');
  }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    const wrapper = document.getElementById('ngx-markdown-editor-text-editor') as HTMLElement;
    this.mde = new MarkdownEditor(wrapper, this.mapOptions(this.options));

    this.contentChange.emitObservable(fromCmEvent(this.mde.cm, 'changes'));
    this.cursorActivity.emitObservable(fromCmEvent(this.mde.cm, 'cursorActivity'));
    this.editorFocus.emitObservable(fromCmEvent(this.mde.cm, 'focus'));
    this.editorBlur.emitObservable(fromCmEvent(this.mde.cm, 'blur'));

    defineDefaultToolbarItems(this);
    defineDefaultStatusbarItems(this.mde);

    // Necessary to apply `this.mde` instance to default toolbar items
    // as `ngOnChanges()` is executed before `ngOnInit()`.
    this.ngOnChanges();

    this.activeItems = Array.from(this.normalizedItems, () => false);
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
  ngOnChanges() {
    if (this.mde) {
      this.applyToolbarItems();
      this.applyStatusbarItems();
      this.applyDisabled();
      this.mde.setOptions(this.mapOptions(this.options));
      console.log(this.options.shortcuts);
      console.log(this.mapOptions(this.options)?.shortcuts);
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
      setTimeout(() => document.getElementById('ngx-markdown-editor-wrapper')?.focus(), 100);
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
   * Not intended to be used outside the component. Only made public for access inside template.
   */
  onButtonClick(item: NgxMdeItemNormalized) {
    item.action();
    this.mde.focus();
    this.determineActiveButtons();
  }

  /**
   * Resolves the shortcut for the specified item and appends it to the item's tooltip text,
   * if `shortcutsInTooltips` is enabled.
   *
   * Not intended to be used outside the component. Only made public for access inside template.
   */
  createTooltip(item: NgxMdeItemNormalized): string {
    let shortcut: string | undefined = item.shortcut || this.mde.getShortcuts()[item.name];
    if (item.name === 'undo') shortcut = 'Ctrl-Z';
    else if (item.name === 'redo') shortcut = 'Shift-Ctrl-Z';
    if (/Mac/.test(navigator.platform)) shortcut = shortcut?.replace(/Ctrl/gi, 'Cmd');
    const shortcutString = this.shortcutsInTooltips && shortcut ? ' (' + shortcut + ')' : '';
    return item.tooltip + shortcutString;
  }

  /**
   * Replaces the checkbox dummies rendered inside the preview with actual checkboxes (also see constructor).
   *
   * Not intended to be used outside the component. Only made public for access inside template.
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
  private mapOptions(options: NgxMdeOptions | undefined): MarkdownEditorOptions | undefined {
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

    const markupTheme = options.markupTheme || '';
    let editorTheme = options.editorTheme;
    if (this.materialStyle) {
      editorTheme = editorTheme ? editorTheme.concat(' mde-material') : 'mde-material';
    } else {
      if (editorTheme) {
        const themes = editorTheme.split(' ');
        const index = themes.findIndex((t) => t === 'mde-material');
        if (index > -1) themes.splice(index, 1);
        editorTheme = themes.join(' ');
      }
    }

    const shortcuts: NgxMdeOptions['shortcuts'] = {};

    for (const actionName in DEFAULT_OPTIONS.shortcuts) {
      if (options.shortcuts) {
        shortcuts[actionName] = options.shortcuts[actionName];
      }
    }

    return {
      ...options,
      shortcuts,
      disabled: this.disabled,
      theme: editorTheme + ' ' + markupTheme,
      markdownGuideUrl: getMarkdownGuideUrl(options.markdownGuideUrl),
    };
  }

  /**
   * Applies the custom toolbar or the default toolbar as fallback.
   */
  private applyToolbarItems() {
    let items: NgxMdeItemDef[];
    if (this.toolbarItems?.length) {
      items = this.toolbarItems;
    } else {
      items = DEFAULT_TOOLBAR;
    }
    this.normalizedItems = [];
    for (const toolbarItem of items) {
      const item = this.getNormalizedItem(toolbarItem);
      if (!item) {
        console.warn(`No default item defined for name "${toolbarItem}"`);
        continue;
      }
      this.addSvgIcon(item);
      this.normalizedItems.push(item);
    }
    this.applyShortcuts(this.normalizedItems);
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
  private getNormalizedItem(toolbarItem: NgxMdeItemDef): NgxMdeItemNormalized | undefined {
    const getTooltip = (tooltip: OptionalI18n<string>): string => {
      if (typeof tooltip === 'string') {
        return tooltip;
      } else {
        return tooltip[this.language] || tooltip.default;
      }
    };

    const getIcon = (icon: OptionalI18n<NgxMdeIcon>): NgxMdeIcon => {
      if ('format' in icon) {
        return icon;
      } else {
        return icon[this.language] || icon.default;
      }
    };

    if (typeof toolbarItem === 'string') {
      return getDefaultItem(toolbarItem);
    } else {
      let defaultItem = getDefaultItem(toolbarItem.name);
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
   * Applies custom shortcuts.
   *
   * For items, whose actions originate in _Markdown Editor Core_, `options.shortcuts` is
   * modified. For items that are specific to _Ngx Markdown Editor_ keybindings are applied to
   * the `<ngx-markdown-editor>` element.
   */
  private applyShortcuts(items: NgxMdeItemNormalized[]) {
    const applySetHeadingLevelShortcut = (shortcut: string) => {
      const s = shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
      return this.hotkeys
        .addShortcut(this.hostElement.nativeElement, s)
        .pipe(takeUntil(this.shortcutResetter))
        .subscribe(() => {
          this.blockBlur = true;
          this.setHeadingLevelDropdown.open();
          this.setHeadingLevelDropdown.focus();
        });
    };

    const applyNgxMdeShortcut = (shortcut: string, action: () => void) => {
      const s = shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
      return this.hotkeys
        .addShortcut(this.hostElement.nativeElement, s)
        .pipe(takeUntil(this.shortcutResetter))
        .subscribe(() => {
          action();
          this.determineActiveButtons();
        });
    };

    this.shortcutResetter.next();
    const shortcuts = this.options.shortcuts || {};
    const appliedNgxMdeShortcuts: { [name: string]: Subscription | undefined } = {};

    for (const item of items) {
      if (item.name === 'setHeadingLevel' && item.shortcut) {
        const subscription = applySetHeadingLevelShortcut(item.shortcut);
        appliedNgxMdeShortcuts[item.name] = subscription;
      } else if (item.name in DEFAULT_OPTIONS.shortcuts) {
        shortcuts[item.name] = item.shortcut;
      } else if (item.shortcut) {
        const subscription = applyNgxMdeShortcut(item.shortcut, item.action);
        appliedNgxMdeShortcuts[item.name] = subscription;
      }
    }

    for (const actionName in this.options.shortcuts) {
      if (!(actionName in DEFAULT_OPTIONS.shortcuts) && shortcuts[actionName]) {
        const shortcut = shortcuts[actionName];
        console.log(shortcut);
        if (actionName === 'setHeadingLevel') {
          appliedNgxMdeShortcuts[actionName]?.unsubscribe();
          applySetHeadingLevelShortcut(shortcut);
        } else {
          const item = items.find((i) => i.name === actionName);
          if (item) {
            appliedNgxMdeShortcuts[actionName]?.unsubscribe();
            applyNgxMdeShortcut(shortcut, item.action);
          }
        }
      }
    }

    this.options.shortcuts = shortcuts;
  }

  /**
   * Adds the SVG specified inside `item.icon` to the injected `MatIconRegistry` instance.
   */
  private addSvgIcon(item: NgxMdeItemNormalized) {
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
    let items: NgxMdeStatusbarItemDef[];
    if (this.statusbarItems?.length) {
      items = this.statusbarItems;
    } else {
      items = DEFAULT_STATUSBAR;
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
  private getNormalizedStatusbarItem(statusbarItem: NgxMdeStatusbarItemDef): NgxMdeStatusbarItemNormalized | undefined {
    const getValue = (value: OptionalI18n<Observable<string>>): Observable<string> => {
      if (value instanceof Observable) {
        return value;
      } else {
        return value[this.language] || value.default;
      }
    };

    if (typeof statusbarItem === 'string') {
      return getDefaultStatusbarItem(statusbarItem);
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
    this.activeItems = new Array(this.normalizedItems.length);
    for (let i = 0; i < this.normalizedItems.length; i++) {
      const item = this.normalizedItems[i];
      if (item.isActive) {
        this.activeItems[i] = item.isActive();
      } else {
        this.activeItems[i] = false;
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
    const codemirror = document.querySelector('ngx-markdown-editor .CodeMirror');
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
    const preview = document.querySelector('ngx-markdown-editor #ngx-markdown-editor-preview');
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
    const codemirror = document.querySelector('ngx-markdown-editor .CodeMirror');
    if (this.options.lineNumbers) {
      codemirror?.classList.add('CodeMirror-lineNumbers');
    } else {
      codemirror?.classList.remove('CodeMirror-lineNumbers');
    }
  }
}

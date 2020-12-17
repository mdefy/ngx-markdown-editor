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
import { MarkdownModuleConfig } from 'ngx-markdown';
import { Observable, Subject } from 'rxjs';
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
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: markdownEditorTooltipDefaults }],
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownEditorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() readonly options: NgxMdeOptions = {};
  @Input() readonly previewConfig: MarkdownModuleConfig;
  @Input() readonly toolbarItems?: NgxMdeItemDef[];
  @Input() readonly statusItems?: NgxMdeStatusbarItemDef[];
  @Input() readonly shortcutsInTooltips = true;
  @Input() readonly materialStyle: boolean | 'standard' | 'fill' | 'legacy' = false;
  @Input() readonly label?: string;
  @Input() readonly disabled = false;
  @Input() readonly showToolbar = true;
  @Input() readonly showStatusbar = true;
  @Input() readonly required = false;
  @Input() readonly language: LanguageTag = 'en';

  @Output() contentChange = new ObservableEmitter<{ instance: Editor; changes: EditorChangeLinkedList[] }>();
  @Output() editorFocus = new ObservableEmitter<{ instance: Editor; event: FocusEvent }>();
  @Output() editorBlur = new ObservableEmitter<{ instance: Editor; event: FocusEvent }>();

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
    return !this.options.theme && !this.materialStyle;
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

  @ViewChild('setHeadingLevel') setHeadingLevelDropdown: MatSelect;

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly hotkeys: Hotkeys,
    private readonly hostElement: ElementRef
  ) {}

  ngOnInit(): void {
    const wrapper = document.getElementById('ngx-markdown-editor-text-editor') as HTMLElement;
    this.mde = new MarkdownEditor(wrapper, this.mapOptions(this.options));

    this.contentChange.emitObservable(fromCmEvent(this.mde.cm, 'changes'));
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

  ngOnChanges() {
    if (this.mde) {
      this.applyToolbarItems();
      this.applyStatusbarItems();
      this.applyDisabled();
      this.mde.setOptions(this.mapOptions(this.options));
      this.determineActiveButtons();
      this.setCodeMirrorClasses();
      this.applyMaterialStyle();
    }
  }

  ngOnDestroy() {
    this.shortcutResetter.next();
    this.shortcutResetter.complete();
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
    this.showSideBySidePreview = false;
    if (this.showPreview) {
      // Timeout necessary until Angular change detector has finished
      setTimeout(() => document.getElementById('ngx-markdown-editor-wrapper')?.focus(), 100);
    } else {
      // Timeout necessary until Angular change detector has finished
      setTimeout(() => this.mde.focus(), 100);
    }
  }

  toggleSideBySidePreview() {
    this.showSideBySidePreview = !this.showSideBySidePreview;
    this.showPreview = false;
    // Timeout necessary until Angular change detector has finished
    setTimeout(() => this.mde.focus(), 100);
  }

  onButtonClick(item: NgxMdeItemNormalized) {
    item.action();
    this.mde.focus();
    this.determineActiveButtons();
  }

  createTooltip(item: NgxMdeItemNormalized): string {
    const shortcut = item.shortcut || this.mde.getShortcuts()[item.name];
    const shortcutString = this.shortcutsInTooltips && shortcut ? ' (' + shortcut + ')' : '';
    return item.tooltip + shortcutString;
  }

  private mapOptions(options: NgxMdeOptions | undefined): MarkdownEditorOptions | undefined {
    const getMarkdownGuideUrl = (url: OptionalI18n<string> | undefined): string | undefined => {
      if (!url) return undefined;

      if (typeof url === 'string') {
        return url;
      } else {
        return url[this.language] || url.default;
      }
    };

    if (!options) {
      return undefined;
    }

    return {
      ...options,
      disabled: this.disabled,
      theme: this.materialStyle ? (options.theme ? options.theme.concat(' mde-material') : 'mde-material') : undefined,
      markdownGuideUrl: getMarkdownGuideUrl(options.markdownGuideUrl),
    };
  }

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

  private applyShortcuts(items: NgxMdeItemNormalized[]) {
    this.shortcutResetter.next();
    let shortcuts: MarkdownEditorOptions['shortcuts'];
    if (this.options?.shortcuts) {
      shortcuts = this.options.shortcuts;
    } else {
      shortcuts = {};
    }

    for (const item of items) {
      if (item.name === 'setHeadingLevel' && item.shortcut) {
        const shortcut = item.shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
        this.hotkeys
          .addShortcut(this.hostElement.nativeElement, shortcut)
          .pipe(takeUntil(this.shortcutResetter))
          .subscribe(() => {
            this.setHeadingLevelDropdown.open();
            this.setHeadingLevelDropdown.focus();
          });
      } else if (item.name in DEFAULT_OPTIONS.shortcuts) {
        shortcuts[item.name] = item.shortcut;
      } else if (item.shortcut) {
        const shortcut = item.shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
        this.hotkeys
          .addShortcut(this.hostElement.nativeElement, shortcut)
          .pipe(takeUntil(this.shortcutResetter))
          .subscribe(() => {
            item.action();
            this.determineActiveButtons();
          });
      }
    }
    this.options.shortcuts = shortcuts;
  }

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

  private applyStatusbarItems() {
    let items: NgxMdeStatusbarItemDef[];
    if (this.statusItems?.length) {
      items = this.statusItems;
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
      let defaultItem = getDefaultStatusbarItem(statusbarItem.name); // necessary???
      if (!defaultItem) {
        defaultItem = { name: '', value: new Observable() };
      }
      return {
        name: statusbarItem.name,
        value: (statusbarItem.value && getValue(statusbarItem.value)) || defaultItem.value,
      };
    }
  }

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

  private applyMaterialStyle() {
    const codemirror = document.querySelector('markdown-editor .CodeMirror');
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
    const preview = document.querySelector('markdown-editor #ngx-markdown-editor-preview');
    if (preview) {
      const underline = preview.querySelector('.underline');
      if (this.materialStyle) {
        if (!underline) {
          console.log('preview', preview);
          const newUnderline = document.createElement('div');
          newUnderline.setAttribute('class', 'underline');
          preview.append(newUnderline);
        }
      } else {
        underline?.remove();
      }
    }
  }

  private setCodeMirrorClasses() {
    const codemirror = document.querySelector('markdown-editor .CodeMirror');
    if (this.options.lineNumbers) {
      codemirror?.classList.add('CodeMirror-lineNumbers');
    } else {
      codemirror?.classList.remove('CodeMirror-lineNumbers');
    }
  }
}

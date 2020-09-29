import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownEditor, MarkdownEditorAction, MarkdownEditorOptions } from 'markdown-editor-core';
import { DEFAULT_TOOLBAR, getDefaultItem } from './default-toolbar-config';
import {
  LanguageTag,
  NgxMdeIcon,
  NgxMdeItemDef,
  NgxMdeItemNormalized,
  NgxMdeOptions,
  OptionalI18n,
} from './types';

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
})
export class MarkdownEditorComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() readonly options?: NgxMdeOptions;
  @Input() readonly toolbarItems?: NgxMdeItemDef[];
  @Input() readonly language: LanguageTag = 'en';

  @Output() contentChange = new EventEmitter<void>();
  @Output() editorFocus = new EventEmitter<void>();
  @Output() editorBlur = new EventEmitter<void>();

  public mde: MarkdownEditor;
  public normalizedItems: NgxMdeItemNormalized[];

  constructor(private readonly iconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const wrapper = document.getElementById('ngx-markdown-editor-wrapper') as HTMLElement;
    this.mde = new MarkdownEditor(wrapper, this.mapOptions(this.options));

    this.mde.cm.on('changes', this.onContentChange);
    this.mde.cm.on('focus', this.onEditorFocus);
    this.mde.cm.on('blur', this.onEditorBlur);
  }

  ngOnDestroy(): void {
    this.mde.cm.off('changes', this.onContentChange);
    this.mde.cm.off('focus', this.onEditorFocus);
    this.mde.cm.off('blur', this.onEditorBlur);
  }

    // Necessary to apply `this.mde` instance to default toolbar items
    // as `ngOnChanges()` is executed before `ngOnInit()`.
    this.ngOnChanges();
  }

  ngOnChanges() {
    if (this.mde) {
      this.applyToolbarItems();
      this.mde.setOptions(this.mapOptions(this.options));
    }
  }

  private mapOptions(options: NgxMdeOptions | undefined): MarkdownEditorOptions | undefined {
    const getMarkdownGuideUrl = (url: OptionalI18n<string>): string => {
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
      return getDefaultItem(this.mde, toolbarItem);
    } else {
      let defaultItem = getDefaultItem(this.mde, toolbarItem.name);
      if (!defaultItem) {
        defaultItem = { name: '', action: () => {}, tooltip: '', icon: { format: 'material', iconName: '' } };
      }
      return {
        name: toolbarItem.name,
        action: toolbarItem.action || defaultItem.action,
        tooltip: (toolbarItem.tooltip && getTooltip(toolbarItem.tooltip)) || defaultItem.tooltip,
        icon: (toolbarItem.icon && getIcon(toolbarItem.icon)) || defaultItem.icon,
      };
    }
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

  private onContentChange = () => this.contentChange.emit();
  private onEditorFocus = () => this.editorFocus.emit();
  private onEditorBlur = () => this.editorBlur.emit();
}

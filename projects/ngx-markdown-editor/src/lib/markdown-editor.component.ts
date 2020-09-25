import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownEditor, MarkdownEditorAction, MarkdownEditorOptions } from 'markdown-editor-core';
import { DEFAULT_TOOLBAR, getDefaultItem } from './default-toolbar-config';
import {
  LanguageTag,
  NgxMdeIconConfig as MarkdownEditorIcon,
  NgxMdeItem,
  NgxMdeItemDefinition,
  NgxMdeItemNormalized,
  NgxMdeOptions,
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
  @Input() readonly toolbarItems?: NgxMdeItemDefinition[];
  @Input() readonly language?: LanguageTag = 'en';

  @Output() contentChange = new EventEmitter<void>();
  @Output() editorFocus = new EventEmitter<void>();
  @Output() editorBlur = new EventEmitter<void>();

  public mde: MarkdownEditor;
  public normalizedItems: NgxMdeItemNormalized[];

  constructor(private readonly iconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const wrapper = document.getElementById('ngx-markdown-editor-wrapper');
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

  ngAfterViewInit() {
    this.ngOnChanges();
  }

  ngOnChanges() {
    let items: (MarkdownEditorAction | NgxMdeItem | '|')[];
    if (this.toolbarItems?.length) {
      items = this.toolbarItems;
    } else {
      items = DEFAULT_TOOLBAR;
    }
    this.normalizedItems = [];
    for (const toolbarItem of items) {
      let item: NgxMdeItemNormalized;
      if (typeof toolbarItem === 'string') {
        item = getDefaultItem(this.mde, toolbarItem);
        if (!item) {
          console.warn(`No default item defined for name "${toolbarItem}"`);
          continue;
        }
      } else {
        const defaultItem = getDefaultItem(this.mde, toolbarItem.name);
        item = {
          name: toolbarItem.name,
          action: toolbarItem.action || defaultItem.action,
          tooltip: (toolbarItem.tooltip && this.getTooltip(toolbarItem)) || defaultItem.tooltip,
          icon: (toolbarItem.icon && this.getIcon(toolbarItem)) || defaultItem.icon,
        };
      }
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
      this.normalizedItems.push(item);
    }

    this.mde?.setOptions(this.mapOptions(this.options));
  }

  private getTooltip(item: NgxMdeItem): string {
    const tooltip = item.tooltip;
    if (typeof tooltip === 'string') {
      return tooltip;
    } else {
      return tooltip[this.language] || tooltip.default;
    }
  }

  private getIcon(item: NgxMdeItem): MarkdownEditorIcon {
    const icon = item.icon;
    if ('format' in icon) {
      return icon;
    } else {
      return icon[this.language] || icon.default;
    }
  }

  private getMarkdownGuideUrl(url: string | ({ default: string } & { [lang in LanguageTag]?: string })) {
    if (typeof url === 'string') {
      return url;
    } else {
      return url[this.language] || url.default;
    }
  }

  private mapOptions(options: NgxMdeOptions): MarkdownEditorOptions | undefined {
    if (!options) {
      return undefined;
    }

    return {
      ...options,
      markdownGuideUrl: this.getMarkdownGuideUrl(options.markdownGuideUrl),
    };
  }

  private onContentChange = () => this.contentChange.emit();
  private onEditorFocus = () => this.editorFocus.emit();
  private onEditorBlur = () => this.editorBlur.emit();
}

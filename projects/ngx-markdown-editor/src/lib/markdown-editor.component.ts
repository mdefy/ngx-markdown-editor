import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownEditor, MarkdownEditorAction, MarkdownEditorOptions } from 'markdown-editor-core';
import { DEFAULT_TOOLBAR, getDefaultItem } from './default-toolbar-config';
import { MarkdownEditorItem, PartialMarkdownEditorItem } from './types';

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
export class MarkdownEditorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() options: MarkdownEditorOptions;
  @Input() toolbarItems: (MarkdownEditorAction | PartialMarkdownEditorItem | '|')[];

  @Output() contentChange = new EventEmitter<void>();
  @Output() editorFocus = new EventEmitter<void>();
  @Output() editorBlur = new EventEmitter<void>();

  public mde: MarkdownEditor;
  public normalizedItems: MarkdownEditorItem[];

  constructor(private readonly iconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const wrapper = document.getElementById('ngx-markdown-editor-wrapper');
    this.mde = new MarkdownEditor(wrapper, this.options);

    this.mde.cm.on('changes', this.onContentChange);
    this.mde.cm.on('focus', this.onEditorFocus);
    this.mde.cm.on('blur', this.onEditorBlur);
  }

  ngOnDestroy(): void {
    this.mde.cm.off('changes', this.onContentChange);
    this.mde.cm.off('focus', this.onEditorFocus);
    this.mde.cm.off('blur', this.onEditorBlur);
  }

  ngOnChanges() {
    let items: (MarkdownEditorAction | PartialMarkdownEditorItem | '|')[];
    if (this.toolbarItems?.length) {
      items = this.toolbarItems;
    } else {
      items = DEFAULT_TOOLBAR;
    }
    this.normalizedItems = [];
    for (const toolbarItem of items) {
      let item: MarkdownEditorItem;
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
          tooltip: toolbarItem.tooltip || defaultItem.tooltip,
          icon: toolbarItem.icon || defaultItem.icon,
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
  }

  private onContentChange = () => this.contentChange.emit();
  private onEditorFocus = () => this.editorFocus.emit();
  private onEditorBlur = () => this.editorBlur.emit();
}

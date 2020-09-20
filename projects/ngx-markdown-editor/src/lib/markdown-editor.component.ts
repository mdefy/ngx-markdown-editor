import { Component, Input, OnInit } from '@angular/core';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MarkdownEditor, MarkdownEditorShortcuts, Options } from 'markdown-editor-core';

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
export class MarkdownEditorComponent implements OnInit {
  @Input() options: Options;
  @Input() toolbarItems: (keyof MarkdownEditorShortcuts)[];

  public mde: MarkdownEditor;
  public readonly showItems: { [key in keyof MarkdownEditorShortcuts]: boolean } = {
    toggleBold: true,
    toggleItalic: true,
    toggleStrikethrough: true,
    toggleUnorderedList: true,
    toggleOrderedList: true,
    toggleCheckList: true,
    toggleQuote: true,
    insertLink: true,
    insertImageLink: true,
    insertTable: true,
    insertHorizontalLine: true,
    toggleInlineCode: true,
    insertCodeBlock: true,
    openMarkdownGuide: true,
    toggleRichTextMode: true,
    downloadAsFile: true,
    importFromFile: true,
    formatContent: true,
  };

  constructor() {}

  ngOnInit(): void {
    for (const item of this.toolbarItems) {
      this.showItems[item] = true;
    }

    const wrapper = document.getElementById('ngx-markdown-editor-wrapper');
    this.mde = new MarkdownEditor(wrapper, this.options);
  }
}

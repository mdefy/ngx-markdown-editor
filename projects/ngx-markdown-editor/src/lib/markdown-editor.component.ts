import { Component, Input, OnInit } from '@angular/core';
import { MarkdownEditor, MarkdownEditorShortcuts, Options } from 'markdown-editor-core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
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

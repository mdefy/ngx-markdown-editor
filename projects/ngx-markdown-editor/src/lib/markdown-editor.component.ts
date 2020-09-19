import { Component, Input, OnInit } from '@angular/core';
import { MarkdownEditor, MarkdownEditorShortcuts, Options } from 'markdown-editor-core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const wrapper = document.getElementById('ngx-markdown-editor-wrapper');
    const mde = new MarkdownEditor(wrapper);
  }
}

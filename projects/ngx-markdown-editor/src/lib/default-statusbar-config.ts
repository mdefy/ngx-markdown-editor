import { MarkdownEditor } from 'markdown-editor-core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { NgxMdeDefaultStatusbarItem, NgxMdeStatusbarItemNormalized } from './types';
import { fromCmEvent } from './util/from-cm-event';

const DEFAULT_STATUSBAR_ITEMS: NgxMdeStatusbarItemNormalized[] = [];

export const DEFAULT_STATUSBAR: (NgxMdeDefaultStatusbarItem | '|')[] = [
  'wordCount',
  'characterCount',
  '|',
  'cursorPosition',
];

export function getDefaultStatusbarItem(
  ngxMde: MarkdownEditorComponent,
  itemName: string
): NgxMdeStatusbarItemNormalized | undefined {
  return getDefaultStatusbarItems(ngxMde).find((i) => i.name === itemName);
}

export function getDefaultStatusbarItems(ngxMde: MarkdownEditorComponent): NgxMdeStatusbarItemNormalized[] {
  return DEFAULT_STATUSBAR_ITEMS;
}

export function defineDefaultStatusbarItems(mde: MarkdownEditor) {
  const defaultItems: NgxMdeStatusbarItemNormalized[] = [
    {
      name: 'wordCount',
      value: fromCmEvent(mde.cm, 'changes').pipe(
        startWith(true),
        map(() => 'Words: ' + mde.getWordCount().toString())
      ),
    },
    {
      name: 'characterCount',
      value: fromCmEvent(mde.cm, 'changes').pipe(
        startWith(true),
        map(() => 'Characters: ' + mde.getCharacterCount().toString())
      ),
    },
    {
      name: 'cursorPosition',
      value: fromCmEvent(mde.cm, 'cursorActivity').pipe(
        startWith(true),
        map(() => {
          const pos = mde.getCursorPos();
          return `${pos.line}:${pos.ch}`;
        })
      ),
    },
    // Normalize separator item to reduce type complexity in template.
    // Effectively, only the `name` property is needed.
    {
      name: '|',
      value: new Observable(),
    },
  ];

  DEFAULT_STATUSBAR_ITEMS.push(...defaultItems);
}

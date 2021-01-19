import { MarkdownEditor } from 'markdown-editor-core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StatusbarItemName, StatusbarItemNormalized } from './types';
import { fromCmEvent } from './util/from-cm-event';

let DEFAULT_STATUSBAR_ITEMS: StatusbarItemNormalized[];

/**
 * The default statusbar setup.
 */
export const DEFAULT_STATUSBAR: StatusbarItemName[] = ['wordCount', 'characterCount', '|', 'cursorPosition'];

/**
 * Returns the default configuration of the item with the specified name.
 * Returns `undefined`, if no item with the specified name can be found.
 */
export function getDefaultStatusbarItem(itemName: string): StatusbarItemNormalized | undefined {
  return getDefaultStatusbarItems().find((i) => i.name === itemName);
}

/**
 * Returns the default configurations of all items.
 */
export function getDefaultStatusbarItems(): StatusbarItemNormalized[] {
  return DEFAULT_STATUSBAR_ITEMS;
}

/**
 * Defines the default statusbar items.
 * Cannot be done statically as the values depend on the `MarkdownEditor` instance.
 */
export function defineDefaultStatusbarItems(mde: MarkdownEditor) {
  const defaultItems: StatusbarItemNormalized[] = [
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

  DEFAULT_STATUSBAR_ITEMS = defaultItems;
}

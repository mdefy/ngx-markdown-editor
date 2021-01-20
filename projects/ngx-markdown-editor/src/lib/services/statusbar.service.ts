import { Injectable } from '@angular/core';
import { MarkdownEditor } from 'markdown-editor-core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StatusbarItemName, StatusbarItemNormalized } from '../types/statusbar';
import { fromCmEvent } from '../util/from-cm-event';

@Injectable()
export class StatusbarService {
  private _defaultItems: StatusbarItemNormalized[];

  /**
   * The default configurations of all items.
   */
  public get DEFAULT_ITEMS(): StatusbarItemNormalized[] {
    return this._defaultItems;
  }

  /**
   * The default statusbar setup.
   */
  public DEFAULT_STATUSBAR: StatusbarItemName[] = ['wordCount', 'characterCount', '|', 'cursorPosition'];

  /**
   * Returns the default configuration of the item with the specified name.
   * Returns `undefined`, if no item with the specified name can be found.
   */
  public getDefaultItem(itemName: string): StatusbarItemNormalized | undefined {
    return this.DEFAULT_ITEMS.find((i) => i.name === itemName);
  }

  /**
   * Defines the default statusbar items.
   * Cannot be done statically as the values depend on the `MarkdownEditor` instance.
   */
  public defineDefaultItems(mde: MarkdownEditor) {
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

    this._defaultItems = defaultItems;
  }
}

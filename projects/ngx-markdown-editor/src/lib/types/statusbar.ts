import { Observable } from 'rxjs';
import { OptionalI18n } from './optional-i18n';

/**
 * Statusbar item definition. Can either be a predefined item name or a item object.
 */
export type StatusbarItemDef = StatusbarItemName | StatusbarItem;

/**
 * Predefined item name string.
 */
export type StatusbarItemName = 'wordCount' | 'characterCount' | 'cursorPosition' | '|';

/**
 * A statusbar item.
 */
export interface StatusbarItem {
  /**
   * The item name.
   */
  name: string;

  /**
   * The observable containing the string value that is displayed in the statusbar.
   */
  value: OptionalI18n<Observable<string>>;
}

/**
 * A normalized statusbar item.
 *
 * _Not intended to be used outside of this library. Only made public for access inside component._
 */
export interface StatusbarItemNormalized extends StatusbarItem {
  name: string;
  value: Observable<string>;
}

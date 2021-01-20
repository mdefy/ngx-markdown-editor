import { MarkdownEditorAction } from 'markdown-editor-core';
import { OptionalI18n } from './optional-i18n';

/**
 * Toolbar item definition. Can either be a predefined item name or a item object.
 */
export type ToolbarItemDef = ToolbarItemName | ToolbarItem;

/**
 * Predefined item name string.
 */
export type ToolbarItemName = MarkdownEditorAction | AdditionalToolbarItemName;

/**
 * Name of an action defined in _Ngx Markdown Editor_ (and not available in _Markdown Editor Core_).
 *
 * _Not intended to be used outside of this library. Only made public for access inside component._
 */
export type AdditionalToolbarItemName =
  | 'undo'
  | 'redo'
  | 'toggleHeadingLevel'
  | 'togglePreview'
  | 'toggleSideBySidePreview'
  | '|';

/**
 * A toolbar item.
 */
export interface ToolbarItem {
  /**
   * The item name.
   */
  name: string;

  /**
   * The action being triggered by the item.
   */
  action?: (...args: any[]) => void;

  /**
   * The keybinding for the item's action (only keyboard keys allowed).
   *
   * @see Our [README section](https://github.com/lenardfunk/ngx-markdown-editor#shortcuts) for how to define key combinations.
   */
  shortcut?: string;

  /**
   * A function to determine whether this item should be highlighted as active.
   * This is checked on every content change, item trigger and cursor activity.
   */
  isActive?: (...args: any[]) => boolean | number;

  /**
   * The tooltip content. Can be internationalized.
   */
  tooltip?: OptionalI18n<string>;

  /**
   * The icon displayed in the toolbar. Can be internationalized.
   */
  icon?: OptionalI18n<Icon>;

  /**
   * Specifies whether this item shall be disabled when the full-size preview is active.
   */
  disableOnPreview?: boolean;
}

/**
 * A normalized toolbar item.
 *
 * _Not intended to be used outside of this library. Only made public for access inside component._
 */
export interface ToolbarItemNormalized extends ToolbarItem {
  name: string;
  action: (...args: any[]) => void;
  shortcut?: string;
  isActive?: (...args: any[]) => boolean | number;
  tooltip: string;
  icon: Icon;
  disableOnPreview: boolean;
}

/**
 * Toolbar icon definition.
 */
export type Icon =
  | { format: 'material'; iconName: string }
  | { format: 'svgFile'; iconName: string; runtimePath: string }
  | { format: 'svgString'; iconName: string; svgHtmlString: string };

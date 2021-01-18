import { MarkdownEditorAction, MarkdownEditorOptions, MarkdownEditorShortcuts } from 'markdown-editor-core';
import { Observable } from 'rxjs';

/**
 * Adjusted and extended options from _Markdown Editor Core_.
 */
export interface NgxMdeOptions extends Omit<MarkdownEditorOptions, 'markdownGuideUrl' | 'shortcuts' | 'theme'> {
  /**
   * Names of CSS themes to style the editor's appearance. The theme classes are applied to both
   * elements `<ngx-markdown-editor>` and `<div class="CodeMirror">`.
   *
   * @see Our [README section](https://github.com/lenardfunk/ngx-markdown-editor#theming) for more details.
   */
  editorTheme?: string;

  /**
   * Names of CSS themes to style the markup of the in-editor markdown syntax.
   * The theme classes are applied to <div class="CodeMirror"> only.
   *
   * Also checkout the predefined theme [`preview-like-markup`](https://github.com/lenardfunk/ngx-markdown-editor#markup-styling).
   *
   * @see Our [README section](https://github.com/lenardfunk/ngx-markdown-editor#theming) for more details.
   */
  markupTheme?: string;

  /**
   * The markdown guide url. Can be internationalized.
   */
  markdownGuideUrl?: OptionalI18n<string>;

  /**
   * The
   */
  shortcuts?: Partial<MarkdownEditorShortcuts> & Partial<Record<Exclude<NgxMdeAdditionalItemName, '|'>, string>>;
}

/**
 * Toolbar item definition. Can either be a predefined item name or a item object.
 */
export type NgxMdeItemDef = NgxMdeItemName | NgxMdeItem;

/**
 * Predefined item name string.
 */
export type NgxMdeItemName = MarkdownEditorAction | NgxMdeAdditionalItemName;

/**
 * Name of an action defined in _Ngx Markdown Editor_ (and not available in _Markdown Editor Core_).
 */
type NgxMdeAdditionalItemName =
  | 'undo'
  | 'redo'
  | 'toggleHeadingLevel'
  | 'togglePreview'
  | 'toggleSideBySidePreview'
  | '|';

/**
 * A toolbar item.
 */
export interface NgxMdeItem {
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
  icon?: OptionalI18n<NgxMdeIcon>;

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
export interface NgxMdeItemNormalized extends NgxMdeItem {
  name: string;
  action: (...args: any[]) => void;
  shortcut?: string;
  isActive?: (...args: any[]) => boolean | number;
  tooltip: string;
  icon: NgxMdeIcon;
  disableOnPreview: boolean;
}

/**
 * Statusbar item definition. Can either be a predefined item name or a item object.
 */
export type NgxMdeStatusbarItemDef = NgxMdeStatusbarItemName | NgxMdeStatusbarItem;

/**
 * Predefined item name string.
 */
export type NgxMdeStatusbarItemName = 'wordCount' | 'characterCount' | 'cursorPosition' | '|';

/**
 * A statusbar item.
 */
export interface NgxMdeStatusbarItem {
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
export interface NgxMdeStatusbarItemNormalized extends NgxMdeStatusbarItem {
  name: string;
  value: Observable<string>;
}

/**
 * Toolbar icon definition.
 */
export type NgxMdeIcon =
  | { format: 'material'; iconName: string }
  | { format: 'svgFile'; iconName: string; runtimePath: string }
  | { format: 'svgString'; iconName: string; svgHtmlString: string };

/**
 * A generic type for optional internationalization. The result is a union type of either
 * the plain applied type or a i18n object of the applied type. The i18n object type contains
 * an obligatory `default` property and optional language properties with language tags as
 * property names.
 */
export type OptionalI18n<T> = T | ({ default: T } & { [lang in LanguageTag]?: T });

/**
 * A language tag as of ISO 639-1.
 *
 * @see ISO 639-1 on Wikipedia: https://en.wikipedia.org/w/index.php?title=List_of_ISO_639-1_codes&oldid=978447089
 */
export type LanguageTag =
  | 'ab'
  | 'aa'
  | 'af'
  | 'ak'
  | 'sq'
  | 'am'
  | 'ar'
  | 'an'
  | 'hy'
  | 'as'
  | 'av'
  | 'ae'
  | 'ay'
  | 'az'
  | 'bm'
  | 'ba'
  | 'eu'
  | 'be'
  | 'bn'
  | 'bh'
  | 'bi'
  | 'bs'
  | 'br'
  | 'bg'
  | 'my'
  | 'ca'
  | 'ch'
  | 'ce'
  | 'ny'
  | 'zh'
  | 'cv'
  | 'kw'
  | 'co'
  | 'cr'
  | 'hr'
  | 'cs'
  | 'da'
  | 'dv'
  | 'nl'
  | 'dz'
  | 'en'
  | 'eo'
  | 'et'
  | 'ee'
  | 'fo'
  | 'fj'
  | 'fi'
  | 'fr'
  | 'ff'
  | 'gl'
  | 'ka'
  | 'de'
  | 'el'
  | 'gn'
  | 'gu'
  | 'ht'
  | 'ha'
  | 'he'
  | 'hz'
  | 'hi'
  | 'ho'
  | 'hu'
  | 'ia'
  | 'id'
  | 'ie'
  | 'ga'
  | 'ig'
  | 'ik'
  | 'io'
  | 'is'
  | 'it'
  | 'iu'
  | 'ja'
  | 'jv'
  | 'kl'
  | 'kn'
  | 'kr'
  | 'ks'
  | 'kk'
  | 'km'
  | 'ki'
  | 'rw'
  | 'ky'
  | 'kv'
  | 'kg'
  | 'ko'
  | 'ku'
  | 'kj'
  | 'la'
  | 'lb'
  | 'lg'
  | 'li'
  | 'ln'
  | 'lo'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'gv'
  | 'mk'
  | 'mg'
  | 'ms'
  | 'ml'
  | 'mt'
  | 'mi'
  | 'mr'
  | 'mh'
  | 'mn'
  | 'na'
  | 'nv'
  | 'nd'
  | 'ne'
  | 'ng'
  | 'nb'
  | 'nn'
  | 'no'
  | 'ii'
  | 'nr'
  | 'oc'
  | 'oj'
  | 'cu'
  | 'om'
  | 'or'
  | 'os'
  | 'pa'
  | 'pi'
  | 'fa'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'sa'
  | 'sc'
  | 'sd'
  | 'se'
  | 'sm'
  | 'sg'
  | 'sr'
  | 'gd'
  | 'sn'
  | 'si'
  | 'sk'
  | 'sl'
  | 'so'
  | 'st'
  | 'es'
  | 'su'
  | 'sw'
  | 'ss'
  | 'sv'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'bo'
  | 'tk'
  | 'tl'
  | 'tn'
  | 'to'
  | 'tr'
  | 'ts'
  | 'tt'
  | 'tw'
  | 'ty'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'vo'
  | 'wa'
  | 'cy'
  | 'wo'
  | 'fy'
  | 'xh'
  | 'yi'
  | 'yo'
  | 'za'
  | 'zu';

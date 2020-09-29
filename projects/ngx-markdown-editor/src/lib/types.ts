import { MarkdownEditorAction, MarkdownEditorOptions } from 'markdown-editor-core';
import { Observable } from 'rxjs';

export interface NgxMdeOptions extends Omit<MarkdownEditorOptions, 'markdownGuideUrl'> {
  markdownGuideUrl: OptionalI18n<string>;
}

export type NgxMdeItemDef = MarkdownEditorAction | NgxMdeItem | '|';

export interface NgxMdeItem {
  name: string;
  action?: (...args: any[]) => void;
  tooltip?: OptionalI18n<string>;
  icon?: OptionalI18n<NgxMdeIcon>;
}

export interface NgxMdeItemNormalized {
  name: string;
  action: (...args: any[]) => void;
  tooltip: string;
  icon: NgxMdeIcon;
}

export type NgxMdeStatusbarItemDef = NgxMdeDefaultStatusbarItem | NgxMdeStatusbarItem | '|';

export type NgxMdeDefaultStatusbarItem = 'wordCount' | 'characterCount' | 'cursorPosition';

export interface NgxMdeStatusbarItem {
  name: string;
  value: OptionalI18n<Observable<string>>;
}

export interface NgxMdeStatusbarItemNormalized {
  name: string;
  value: Observable<string>;
}

export type NgxMdeIcon =
  | { format: 'material'; iconName: string }
  | { format: 'svgFile'; iconName: string; runtimePath: string }
  | { format: 'svgString'; iconName: string; svgHtmlString: string };

export type OptionalI18n<T> = T | ({ default: T } & { [lang in LanguageTag]?: T });

// As of ISO 639-1, see https://en.wikipedia.org/w/index.php?title=List_of_ISO_639-1_codes&oldid=978447089
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

/*
 * Public API Surface of ngx-markdown-editor
 */

export { DEFAULT_STATUSBAR, getDefaultStatusbarItem, getDefaultStatusbarItems } from './lib/default-statusbar-config';
export { DEFAULT_TOOLBAR, getDefaultItem, getDefaultItems } from './lib/default-toolbar-config';
export * from './lib/markdown-editor.component';
export * from './lib/markdown-editor.module';
export {
  LanguageTag,
  NgxMdeIcon,
  NgxMdeItem,
  NgxMdeItemDef,
  NgxMdeItemName,
  NgxMdeOptions,
  NgxMdeStatusbarItem,
  NgxMdeStatusbarItemDef,
  NgxMdeStatusbarItemName,
  OptionalI18n,
} from './lib/types';
export * from './lib/util/from-cm-event';

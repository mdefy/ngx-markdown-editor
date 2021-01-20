import { LanguageTag } from './language-tag';

/**
 * A generic type for optional internationalization. The result is a union type of
 * the plain applied type and an i18n object of the applied type. The i18n object type contains
 * an obligatory `default` property and optional language properties with language tags as
 * property names.
 */
export type OptionalI18n<T> = T | ({ default: T } & { [lang in LanguageTag]?: T });

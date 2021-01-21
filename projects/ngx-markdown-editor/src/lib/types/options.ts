import { MarkdownEditorOptions, MarkdownEditorShortcuts } from '@mdefy/markdown-editor-core';
import { OptionalI18n } from './optional-i18n';
import { AdditionalToolbarItemName } from './toolbar';

/**
 * Adjusted and extended options from _Markdown Editor Core_.
 */
export interface Options extends Omit<MarkdownEditorOptions, 'markdownGuideUrl' | 'shortcuts' | 'themes'> {
  /**
   * Names of CSS themes to style the editor's appearance. The theme classes are applied to both
   * elements `<ngx-markdown-editor>` and `<div class="CodeMirror">`.
   *
   * @see Our [README section](https://github.com/lenardfunk/ngx-markdown-editor#theming) for more details.
   */
  editorThemes?: string[];

  /**
   * Names of CSS themes to style the markup of the in-editor markdown syntax.
   * The theme classes are applied to <div class="CodeMirror"> only.
   *
   * Also checkout the predefined theme [`preview-like-markup`](https://github.com/lenardfunk/ngx-markdown-editor#markup-styling).
   *
   * @see Our [README section](https://github.com/lenardfunk/ngx-markdown-editor#theming) for more details.
   */
  markupThemes?: string[];

  /**
   * The markdown guide url. Can be internationalized.
   */
  markdownGuideUrl?: OptionalI18n<string>;

  /**
   * Custom keyboard shortcuts for editor actions.
   */
  shortcuts?: Partial<MarkdownEditorShortcuts> & Partial<Record<Exclude<AdditionalToolbarItemName, '|'>, string>>;
}

import { MarkdownEditorAction } from 'markdown-editor-core';

export type MarkdownEditorItem = Required<PartialMarkdownEditorItem>;

export interface PartialMarkdownEditorItem {
  name: MarkdownEditorAction | string;
  action?: (...args: any[]) => void;
  tooltip?: string;
  icon?:
    | {
        format: 'material';
        iconName: string;
      }
    | {
        format: 'svgFile';
        iconName: string;
        runtimePath: string;
      }
    | {
        format: 'svgString';
        iconName: string;
        svgHtmlString: string;
      };
}

import { MarkdownEditor, MarkdownEditorAction } from 'markdown-editor-core';
import { MarkdownEditorItem } from './types';

export const DEFAULT_TOOLBAR: (MarkdownEditorAction | '|')[] = [
  'setHeadingLevel',
  'toggleBold',
  'toggleItalic',
  'toggleStrikethrough',
  '|',
  'toggleUnorderedList',
  'toggleOrderedList',
  'toggleCheckList',
  '|',
  'toggleQuote',
  'toggleInlineCode',
  'insertCodeBlock',
  '|',
  'insertLink',
  'insertImageLink',
  'insertTable',
  'insertHorizontalLine',
  '|',
  'toggleRichTextMode',
  'formatContent',
  '|',
  'downloadAsFile',
  'importFromFile',
  '|',
  'openMarkdownGuide',
];

export function getDefaultItem(mde: MarkdownEditor, itemName: string): MarkdownEditorItem | undefined {
  return getDefaultItems(mde).find((i) => i.name === itemName);
}

export function getDefaultItems(mde: MarkdownEditor): MarkdownEditorItem[] {
  const defaultItems: MarkdownEditorItem[] = [
    {
      name: 'setHeadingLevel',
      action: (level: 0 | 1 | 2 | 3 | 4 | 5 | 6) => this.mde.setHeadingLevel(level),
      tooltip: 'setHeadingLevel',
      icon: {
        format: 'svgString',
        iconName: 'format_heading',
        svgHtmlString: FORMAT_HEADING,
      },
    },
    {
      name: 'toggleBold',
      action: () => this.mde.toggleBold(),
      tooltip: 'toggleBold',
      icon: {
        format: 'material',
        iconName: 'format_bold',
      },
    },
    {
      name: 'toggleItalic',
      action: () => this.mde.toggleItalic(),
      tooltip: 'toggleItalic',
      icon: {
        format: 'material',
        iconName: 'format_italic',
      },
    },
    {
      name: 'toggleStrikethrough',
      action: () => this.mde.toggleStrikethrough(),
      tooltip: 'toggleStrikethrough',
      icon: {
        format: 'material',
        iconName: 'format_strikethrough',
      },
    },
    {
      name: 'toggleUnorderedList',
      action: () => this.mde.toggleUnorderedList(),
      tooltip: 'toggleUnorderedList',
      icon: {
        format: 'material',
        iconName: 'format_list_bulleted',
      },
    },
    {
      name: 'toggleOrderedList',
      action: () => this.mde.toggleOrderedList(),
      tooltip: 'toggleOrderedList',
      icon: {
        format: 'material',
        iconName: 'format_list_numbered',
      },
    },
    {
      name: 'toggleCheckList',
      action: () => this.mde.toggleCheckList(),
      tooltip: 'toggleCheckList',
      icon: {
        format: 'material',
        iconName: 'check_box',
      },
    },
    {
      name: 'toggleQuote',
      action: () => this.mde.toggleQuote(),
      tooltip: 'toggleQuote',
      icon: {
        format: 'material',
        iconName: 'format_quote',
      },
    },
    {
      name: 'toggleInlineCode',
      action: () => this.mde.toggleInlineCode(),
      tooltip: 'toggleInlineCode',
      icon: {
        format: 'material',
        iconName: 'code',
      },
    },
    {
      name: 'insertCodeBlock',
      action: () => this.mde.insertCodeBlock(),
      tooltip: 'insertCodeBlock',
      icon: {
        format: 'svgString',
        iconName: 'file_code',
        svgHtmlString: FILE_CODE,
      },
    },
    {
      name: 'insertLink',
      action: () => this.mde.insertLink(),
      tooltip: 'insertLink',
      icon: {
        format: 'material',
        iconName: 'insert_link',
      },
    },
    {
      name: 'insertImageLink',
      action: () => this.mde.insertImageLink(),
      tooltip: 'insertImageLink',
      icon: {
        format: 'material',
        iconName: 'image',
      },
    },
    {
      name: 'insertTable',
      action: () => this.mde.insertTable(),
      tooltip: 'insertTable',
      icon: {
        format: 'material',
        iconName: 'table_chart',
      },
    },
    {
      name: 'insertHorizontalLine',
      action: () => this.mde.insertHorizontalLine(),
      tooltip: 'insertHorizontalLine',
      icon: {
        format: 'material',
        iconName: 'horizontal_rule',
      },
    },
    {
      name: 'toggleRichTextMode',
      action: () => this.mde.toggleRichTextMode(),
      tooltip: 'toggleRichTextMode',
      icon: {
        format: 'material',
        iconName: 'highlight',
      },
    },
    {
      name: 'formatContent',
      action: () => this.mde.formatContent(),
      tooltip: 'formatContent',
      icon: {
        format: 'material',
        iconName: 'format_paint',
      },
    },
    {
      name: 'downloadAsFile',
      action: () => this.mde.downloadAsFile(),
      tooltip: 'downloadAsFile',
      icon: {
        format: 'material',
        iconName: 'get_app',
      },
    },
    {
      name: 'importFromFile',
      action: () => this.mde.importFromFile(),
      tooltip: 'importFromFile',
      icon: {
        format: 'svgString',
        iconName: 'upload',
        svgHtmlString: UPLOAD,
      },
    },
    {
      name: 'openMarkdownGuide',
      action: () => this.mde.openMarkdownGuide(),
      tooltip: 'openMarkdownGuide',
      icon: {
        format: 'material',
        iconName: 'help',
      },
    },
    {
      name: '|',
      action: undefined,
      tooltip: undefined,
      icon: { format: 'material', iconName: '' },
    },
  ];

  return defaultItems;
}

const FILE_CODE = `
  <!-- Icon from Font Awesome: https://fontawesome.com/icons/file-code?style=solid; License: https://fontawesome.com/license -->
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="file-code"
    class="svg-inline--fa fa-file-code fa-w-12"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width="80%"
    height="80%"
    licenseUrl="https://fontawesome.com/license"
  >
    <path
      fill="currentColor"
      d="M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747l-19.579 20.884zm51.295 50.479l-27.453-7.97a5.402 5.402 0 0 1-3.681-6.692l61.44-211.626a5.402 5.402 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681zm160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879z"
    ></path>
  </svg>
`;

const FORMAT_HEADING = `
  <!-- Icon from Font Awesome: https://fontawesome.com/icons/heading?style=solid; License: https://fontawesome.com/license -->
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="heading"
    class="svg-inline--fa fa-heading fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    licenseUrl="https://fontawesome.com/license"
  >
    <path
      fill="currentColor"
      d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"
    ></path>
  </svg>
`;

const UPLOAD = `
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
  </svg>
`;

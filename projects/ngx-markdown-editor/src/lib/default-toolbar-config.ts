import { MarkdownEditor, MarkdownEditorAction } from 'markdown-editor-core';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { NgxMdeItemNormalized } from './types';

let DEFAULT_TOOLBAR_ITEMS: NgxMdeItemNormalized[];

export const DEFAULT_TOOLBAR: (MarkdownEditorAction | 'togglePreview' | 'toggleSideBySidePreview' | '|')[] = [
  'toggleBold',
  'setHeadingLevel',
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
  'togglePreview',
  'toggleSideBySidePreview',
  '|',
  'openMarkdownGuide',
];

export function getDefaultItem(itemName: string): NgxMdeItemNormalized | undefined {
  return getDefaultItems().find((i) => i.name === itemName);
}

export function getDefaultItems(): NgxMdeItemNormalized[] {
  return DEFAULT_TOOLBAR_ITEMS;
}

export function defineDefaultToolbarItems(ngxMde: MarkdownEditorComponent) {
  const defaultItems: NgxMdeItemNormalized[] = [
    {
      name: 'setHeadingLevel',
      action: (level: 0 | 1 | 2 | 3 | 4 | 5 | 6) => ngxMde.mde.setHeadingLevel(level),
      shortcut: 'Alt-H',
      isActive: () => {
        if (!ngxMde.mde.hasTokenAtCursorPos('header')) return 0;
        const token = ngxMde.mde.cm.getTokenAt(ngxMde.mde.getCursorPos());
        return token.state.base.header as number;
      },
      tooltip: 'Set Heading Level',
      icon: {
        format: 'svgString',
        iconName: 'format_heading',
        svgHtmlString: FORMAT_HEADING,
      },
    },
    {
      name: 'toggleBold',
      action: () => ngxMde.mde.toggleBold(),
      isActive: () => ngxMde.mde.hasTokenAtCursorPos('strong'),
      tooltip: 'Toggle Bold',
      icon: {
        format: 'material',
        iconName: 'format_bold',
      },
    },
    {
      name: 'toggleItalic',
      action: () => ngxMde.mde.toggleItalic(),
      isActive: () => ngxMde.mde.hasTokenAtCursorPos('em'),
      tooltip: 'Toggle Italic',
      icon: {
        format: 'material',
        iconName: 'format_italic',
      },
    },
    {
      name: 'toggleStrikethrough',
      action: () => ngxMde.mde.toggleStrikethrough(),
      isActive: () => ngxMde.mde.hasTokenAtCursorPos('strikethrough'),
      tooltip: 'Toggle Strikethrough',
      icon: {
        format: 'material',
        iconName: 'format_strikethrough',
      },
    },
    {
      name: 'toggleUnorderedList',
      action: () => ngxMde.mde.toggleUnorderedList(),
      isActive: () => isListTypeActive(ngxMde, 'unordered'),
      tooltip: 'Toggle Unordered List',
      icon: {
        format: 'material',
        iconName: 'format_list_bulleted',
      },
    },
    {
      name: 'toggleOrderedList',
      action: () => ngxMde.mde.toggleOrderedList(),
      isActive: () => isListTypeActive(ngxMde, 'ordered'),
      tooltip: 'Toggle Ordered List',
      icon: {
        format: 'material',
        iconName: 'format_list_numbered',
      },
    },
    {
      name: 'toggleCheckList',
      action: () => ngxMde.mde.toggleCheckList(),
      isActive: () => isListTypeActive(ngxMde, 'check'),
      tooltip: 'Toggle Checklist',
      icon: {
        format: 'material',
        iconName: 'check_box',
      },
    },
    {
      name: 'toggleQuote',
      action: () => ngxMde.mde.toggleQuote(),
      isActive: () => ngxMde.mde.hasTokenAtCursorPos('quote'),
      tooltip: 'Toggle Quotation',
      icon: {
        format: 'material',
        iconName: 'format_quote',
      },
    },
    {
      name: 'toggleInlineCode',
      action: () => ngxMde.mde.toggleInlineCode(),
      isActive: () => isCodeTypeActive(ngxMde, 'inline'),
      tooltip: 'Toggle Inline Code',
      icon: {
        format: 'material',
        iconName: 'code',
      },
    },
    {
      name: 'insertCodeBlock',
      action: () => ngxMde.mde.insertCodeBlock(),
      isActive: () => isCodeTypeActive(ngxMde, 'block'),
      tooltip: 'Insert Code Block',
      icon: {
        format: 'svgString',
        iconName: 'file_code',
        svgHtmlString: FILE_CODE,
      },
    },
    {
      name: 'insertLink',
      action: () => ngxMde.mde.insertLink(),
      isActive: () => ngxMde.mde.hasTokenAtCursorPos('link') && !ngxMde.mde.hasTokenAtCursorPos('image'),
      tooltip: 'Insert Link',
      icon: {
        format: 'material',
        iconName: 'insert_link',
      },
    },
    {
      name: 'insertImageLink',
      action: () => ngxMde.mde.insertImageLink(),
      isActive: () => ngxMde.mde.hasTokenAtCursorPos('link') && ngxMde.mde.hasTokenAtCursorPos('image'),
      tooltip: 'Insert Image Link',
      icon: {
        format: 'material',
        iconName: 'image',
      },
    },
    {
      name: 'insertTable',
      action: () => ngxMde.mde.insertTable(),
      tooltip: 'Insert Table',
      icon: {
        format: 'material',
        iconName: 'table_chart',
      },
    },
    {
      name: 'insertHorizontalLine',
      action: () => ngxMde.mde.insertHorizontalLine(),
      isActive: () => ngxMde.mde.hasTokenAtCursorPos('hr'),
      tooltip: 'Insert Horizontal Line',
      icon: {
        format: 'material',
        iconName: 'horizontal_rule',
      },
    },
    {
      name: 'toggleRichTextMode',
      action: () => ngxMde.mde.toggleRichTextMode(),
      isActive: () => ngxMde.mde.cm.getOption('mode') === 'gfm',
      tooltip: 'Toggle Rich-Text Mode',
      icon: {
        format: 'material',
        iconName: 'highlight',
      },
    },
    {
      name: 'formatContent',
      action: () => ngxMde.mde.formatContent(),
      tooltip: 'Format Content',
      icon: {
        format: 'material',
        iconName: 'format_paint',
      },
    },
    {
      name: 'downloadAsFile',
      action: () => ngxMde.mde.downloadAsFile(),
      tooltip: 'Download As File',
      icon: {
        format: 'material',
        iconName: 'get_app',
      },
    },
    {
      name: 'importFromFile',
      action: () => ngxMde.mde.importFromFile(),
      tooltip: 'Import From File',
      icon: {
        format: 'svgString',
        iconName: 'upload',
        svgHtmlString: UPLOAD,
      },
    },
    {
      name: 'togglePreview',
      action: () => ngxMde.togglePreview(),
      shortcut: 'Alt-P',
      isActive: () => ngxMde.showPreview,
      tooltip: 'Toggle Preview',
      icon: {
        format: 'material',
        iconName: 'preview',
      },
    },
    {
      name: 'toggleSideBySidePreview',
      action: () => ngxMde.toggleSideBySidePreview(),
      shortcut: 'Shift-Alt-P',
      isActive: () => ngxMde.showSideBySidePreview,
      tooltip: 'Toggle Side-by-Side Preview',
      icon: {
        format: 'svgString',
        iconName: 'column',
        svgHtmlString: COLUMN,
      },
    },
    {
      name: 'openMarkdownGuide',
      action: () => ngxMde.mde.openMarkdownGuide(),
      tooltip: 'Open Markdown Guide',
      icon: {
        format: 'material',
        iconName: 'help',
      },
    },
    // Normalize separator item to reduce type complexity in template.
    // Effectively, only the `name` property is needed.
    {
      name: '|',
      action: () => {},
      tooltip: '',
      icon: { format: 'material', iconName: '' },
    },
  ];

  DEFAULT_TOOLBAR_ITEMS = defaultItems;
}

function isListTypeActive(
  ngxMde: MarkdownEditorComponent,
  listType: NonNullable<ReturnType<MarkdownEditor['getListTypeOfLine']>>
) {
  const isList = ngxMde.mde.hasTokenAtCursorPos('variable-2');
  if (!isList) return false;

  const selections = ngxMde.mde.cm.listSelections();
  let isListType = false;
  if (selections?.length) {
    const lineNumber = selections[selections.length - 1].from().line;
    isListType = ngxMde.mde.getListTypeOfLine(lineNumber) === listType;
  }
  return isListType;
}

function isCodeTypeActive(ngxMde: MarkdownEditorComponent, codeType: 'inline' | 'block') {
  const isCode = ngxMde.mde.hasTokenAtCursorPos('comment');
  if (!isCode) return false;

  const token = ngxMde.mde.cm.getTokenAt(ngxMde.mde.getCursorPos());
  if (codeType === 'block') {
    return token.state.base.codeBlock;
  } else {
    return token.state.overlay.code;
  }
}

const COLUMN = `
  <!-- Icon from Font Awesome: https://fontawesome.com/icons/columns?style=solid; License: https://fontawesome.com/license -->
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="columns"
    class="svg-inline--fa fa-columns fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    licenseUrl="https://fontawesome.com/license"
  >
    <path
      fill="currentColor"
      d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
    ></path>
  </svg>
`;

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
  <svg
    focusable="false"
    data-icon="upload"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="2 2 20 20"
  >
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
  </svg>
`;

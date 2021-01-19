# Ngx Markdown Editor

_Ngx Markdown Editor_ is a [_Angular_](https://angular.io/) library providing a **WYSIWYG** markdown editor, which is especially intended for users unfamiliar with the _Markdown_ syntax. However, it is also well-suited for advanced users as it provides efficient ways to write _Markdown_, e.g. by using shortcuts or utilizing a preview-like markup theme to get immediate visual response of how the result will look like.

In addition, this markdown editor provides high **extensibility** and **customizability** as well as broad and simple options for **internationalization**.

Last but not least, by containing an opt-in material theme, this component will perfectly fit into your [_Angular Material_](https://material.angular.io/) application. If you do not use _Angular Material_ you can easily integrate your own theme.

## Table of contents

- [Ngx Markdown Editor](#ngx-markdown-editor)
  - [Table of contents](#table-of-contents)
  - [Dependencies](#dependencies)
  - [Installation](#installation)
  - [Getting started](#getting-started)
  - [Module configuration](#module-configuration)
  - [Component bindings](#component-bindings)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
  - [Toolbar](#toolbar)
    - [1. Construct a toolbar from existing items](#1-construct-a-toolbar-from-existing-items)
    - [2. Configure an existing item](#2-configure-an-existing-item)
    - [3. Create your own item](#3-create-your-own-item)
    - [Shortcuts](#shortcuts)
      - [Disabling shortcuts](#disabling-shortcuts)
    - [Icons](#icons)
  - [Statusbar](#statusbar)
    - [1. Construct a statusbar from existing items](#1-construct-a-statusbar-from-existing-items)
    - [2. Configure an existing item](#2-configure-an-existing-item-1)
    - [3. Create your own item](#3-create-your-own-item-1)
  - [Internationalization](#internationalization)
  - [Theming](#theming)
    - [Editor styling](#editor-styling)
    - [Markup styling](#markup-styling)
  - [FAQs](#faqs)
    - [How to set the editor's content programmatically](#how-to-set-the-editors-content-programmatically)
    - [How to access the _CodeMirror_ editor instance](#how-to-access-the-codemirror-editor-instance)
    - [How to listen to an _CodeMirror_ event which is not emitted by `MarkdownEditorComponent`](#how-to-listen-to-an-codemirror-event-which-is-not-emitted-by-markdowneditorcomponent)
  - [How to contribute](#how-to-contribute)
    - [Writing issues](#writing-issues)
    - [Making pull requests](#making-pull-requests)
  - [Project setup](#project-setup)
    - [Package manager](#package-manager)
    - [Commit rules](#commit-rules)
    - [Coding style guidelines](#coding-style-guidelines)

## Dependencies

This library depends on [_Markdown Editor Core_](https://github.com/lenardfunk/markdown-editor-core) and [_Ngx Markdown_](https://github.com/jfcere/ngx-markdown).

_Markdown Editor Core_ is a JS library based on [CodeMirror](https://codemirror.net/) and was developed together with _Ngx Markdown Editor_. It provides the text editor and an extensive API for markdown-related actions and everything required to interact conveniently with the editor.

_Ngx Markdown_ is used to provide a preview feature, that renders the _Markdown_ text written in the editor.

## Installation

Run

```
npm i ngx-markdown-editor
```

or

```
yarn add ngx-markdown-editor
```

## Getting started

Include `MarkdownEditorModule` into your Angular module and include `<ngx-markdown-editor></ngx-markdown-editor>` into your HTML template.

In order to use the material theme of _Ngx Markdown Editor_ in combination with your global material theme (especially _Angular Material_), import the theme file into your `styles.scss` and include the material mixin, where you should pass your app's primary color.
You can select from different material styles like in _Angular Material's_ [`MatFormField`](https://material.angular.io/components/form-field/overview) using the [`materialStyle`](#inputs) input property.

```css
@import '~ngx-markdown-editor/src/lib/material-theme';

@include mde-material(mat-color($your-primary-color));
```

In order to set specific dimension for _Ngx Markdown Editor_, simply apply any of the dimensional CSS properties to the component. Example:

```css
ngx-markdown-editor {
  min-height: 100px;
  max-height: 500px;
}
```

## Module configuration

In general, all configuration of the editor can be done dynamically through [input bindings](#inputs). However, as _Ngx Markdown Editor_ utilizes the [_Ngx Markdown_](https://github.com/jfcere/ngx-markdown) library for the preview feature and as the latter can be configured statically via Module import, `MarkdownEditorModule` also implements Angular's `forRoot()` and `forChild()` paradigma to make _Ngx Markdown_'s configuration options available. For this, import `MarkdownEditorModule` as follows:

```typescript
@NgModule({
  imports: [
    NgxMarkdownEditorModule.forRoot({
      previewConfig: {
        sanitize: ...
        markedOptions: ...
      }
    })
  ]
})
```

For detailed instructions how to configure _Ngx Markdown_, visit its dedicated [documentation section](https://github.com/jfcere/ngx-markdown#configuration) on GitHub.
Note, that we do not forward the `loader` option of `MarkdownModuleConfig`, as the `[src]` property of `<ngx-markdown>` is irrelevant for us.

If you like to use the same configuration for other `MarkdownEditorComponent` instances in sub modules, import the module with

```typescript
@NgModule({
  imports: [ NgxMarkdownEditorModule.forChild() ]
})
```

## Component bindings

### Inputs

<table>
  <thead>
    <tr>
      <th>Input</th>
      <th>Description</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>data: string</code></td>
      <td>Data string to set as content of the editor.</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>options: NgxMdeOptions</code></td>
      <td>
        Mainly options from <a href="https://github.com/lenardfunk/markdown-editor-core#configuration-options"><i>Markdown Editor
        Core</i></a>, including some adjustments. To update options at runtime, merge the old options object with the new options before applying the changes: <code>this.options = { ...this.options, optionToUpdate: updateValue }</code>.
      </td>
      <td><code>{}</code></td>
    </tr>
    <tr>
      <td><code>toolbarItems: NgxMdeItemDef[]</code></td>
      <td>Toolbar configuration. Can contain names of predefined items or objects of custom items.</td>
      <td>See <a href="#toolbar">toolbar section</a>.</td>
    </tr>
    <tr>
      <td><code>statusItems: NgxMdeStatusbarItemDef[]</code></td>
      <td>Statusbar configuration. Can contain names of predefined items or objects of custom items.</td>
      <td>See <a href="#statusbar">statusbar section</a>.</td>
    </tr>
    <tr>
      <td><code>showTooltips: boolean</code></td>
      <td>Specifies whether tooltips are shown for toolbar items.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>shortcutsInTooltips: boolean</code></td>
      <td>Specifies whether the applied keyboard shortcuts are included in the tooltips of toolbar items.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>materialStyle: boolean | 'standard' | 'fill' | 'legacy'</code></td>
      <td>Specifies whether or which Angular Material style is applied.</td>
      <td><code>false</code>; for <code>true</code>, the default style is <code>standard</code></td>
    </tr>
    <tr>
      <td><code>label: string | undefined</code></td>
      <td>The label text for the editor component. The label area is hidden, if no label is specified.</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td><code>disabled: boolean</code></td>
      <td>Specifies whether the editor is disabled. In the disabled mode, the preview with rendered markdown is shown instead of the editor area.</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>showToolbar: boolean</code></td>
      <td>Specifies whether the toolbar is rendered.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>showStatusbar: boolean</code></td>
      <td>Specifies whether the statusbar is rendered.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>required: boolean</code></td>
      <td>Specifies whether the editor component is a required field. If <code>true</code>, an asterisk (*) is added to the label. (Apart from that, this has no other effect.)</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>language: LanguageTag</code></td>
      <td>Specifies the current language applied to all internationalizable properties.</td>
      <td><code>en</code></td>
    </tr>
  </tbody>
</table>

### Outputs

The most important _Codemirror_ events are transformed to _Angular_ outputs to facilitate event binding.

<table>
  <thead>
    <tr>
      <th>Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>contentChange: ObservableEmitter<{ instance: Editor; changes: EditorChangeLinkedList[] }></code></td>
      <td>Emits when the editor's content changes.</td>
    </tr>
    <tr>
      <td><code>curserActivity: ObservableEmitter<{ instance: Editor }></code></td>
      <td>Emits when the cursor is moved.</td>
    </tr>
    <tr>
      <td><code>editorFocus: ObservableEmitter<{ instance: Editor; event: FocusEvent }></code></td>
      <td>Emits when the editor receives focus.</td>
    </tr>
    <tr>
      <td><code>editorBlur: ObservableEmitter<{ instance: Editor; event: FocusEvent }></code></td>
      <td>Emits when the editor loses focus.</td>
    </tr>
  </tbody>
</table>

## Toolbar

The toolbar is highly configurable and comes with many built-in items. You can simply

- pick the ones you need,
- define a custom order,
- reconfigure existing items,
- and even define whole new items (currently only buttons supported).

If you do not specify anything at all for the `toolbarItems` input property, the default toolbar setup is applied.

The `toolbarItems` input property in an array of type

```typescript
type NgxMdeItemDef = NgxMdeItemName | NgxMdeItem;
```

`NgxMdeItemName` is a union type of all built-in item names. The interface `NgxMdeItem` represents a full toolbar item.

```typescript
interface NgxMdeItem {
  name: string;
  action?: (...args: any[]) => void;
  shortcut?: string;
  isActive?: (...args: any[]) => boolean | number;
  tooltip?: OptionalI18n<string>;
  icon?: OptionalI18n<NgxMdeIcon>;
  disableOnPreview?: boolean;
}
```

> For details about the `OptionalI18n<T>` type, see [Internationalization](#internationalization) section.

In the following, we always apply a JavaScript variable to the `toolbarItems` input property:

```html
<ngx-markdown-editor [toolbarItems]="toolbarItems"></ngx-markdown-editor>
```

### 1. Construct a toolbar from existing items

To build a toolbar from existing items, simply create an array of type `NgxMdeItemName[]` (or `NgxMdeItemDef[]`) and specify the items by name.
Additionally, there is a separator element, which you can insert at any position with `'|'`.

```typescript
public toolbarItems: NgxMdeItemName[] = ['toggleBold', 'toggleItalic', '|', 'insertLink', '|', 'openMarkdownGuide'];
```

The naming convention for items is to use the name of the function that is triggered by the item.

### 2. Configure an existing item

You can adjust built-in items for you needs by defining an item with a name included in `NgxMdeItemName`. You do not have to specify
all item properties, but can simply adjust only a subset of them, the rest will keep their default values.

For example, if you want to give the `toggleBold` item a new shortcut (default: `Ctrl-B`) as well as change the tooltip, then proceed as following:

```typescript
const newToggleBoldItem: NgxMdeItem = {
  name: 'toggleBold',
  shortcut: 'Alt-B',
  tooltip: 'Bold you shall be',
};
```

Then include this object into the toolbar item array (maybe alongside `NgxMdeItemName`s):

```typescript
public toolbarItems: NgxMdeItemDef[] = [newToggleBoldItem, 'toggleItalic', ...];
```

### 3. Create your own item

This is very similar to configuring an existing item. Example:

```typescript
const myItem: NgxMdeItem = {
  name: 'myCustomAction',
  action: () => myCustomAction()
  shortcut: 'Alt-B',
  tooltip: 'Hint: No need to hard code the shortcut here, see input `shortcutsInTooltips`',
  icon: {
    format: 'material'
    iconName: 'star'
  }
};
```

Again you only have to include the properties you want to explicitly specify (except the obligatory `name` property), all other item properties will be "as empty as possible" per default:

```typescript
const defaultItem: NgxMdeItem = {
  name: '',
  action: () => {},
  shortcut: undefined,
  isActive: undefined,
  tooltip: '',
  icon: { format: 'material', iconName: '' },
  disableOnPreview: false,
};
```

> Note, that although there is the built-in `setHeadingLevel` dropdown item, so far only custom button items can be constructed in the described way (`setHeadingLevel` is implemented as a special case). This should satisfy most cases. If you require other items as well, you are welcome to fork this repo and/or make a pull request.

### Shortcuts

The default keymap is as follows (on Mac "Ctrl" is replaced with "Cmd"):

| Action                    | Shortcut             |
| ------------------------- | -------------------- |
| `setHeadingLevel`         | Shift-Ctrl-Alt-H     |
| `toggleHeadingLevel`      | Alt-H                |
| `increaseHeadingLevel`    | Alt-H                |
| `decreaseHeadingLevel`    | Shift-Alt-H          |
| `toggleBold`              | Ctrl-B               |
| `toggleItalic`            | Ctrl-I               |
| `toggleStrikethrough`     | Ctrl-K               |
| `toggleUnorderedList`     | Ctrl-L               |
| `toggleOrderedList`       | Shift-Ctrl-L         |
| `toggleCheckList`         | Shift-Ctrl-Alt-L     |
| `toggleQuote`             | Ctrl-Q               |
| `toggleInlineCode`        | Ctrl-7               |
| `insertCodeBlock`         | Shift-Ctrl-7         |
| `insertLink`              | Ctrl-M               |
| `insertImageLink`         | Shift-Ctrl-M         |
| `insertTable`             | Ctrl-Alt-T           |
| `insertHorizontalRule`    | Shift-Ctrl--         |
| `toggleRichTextMode`      | Alt-R                |
| `formatContent`           | Alt-F                |
| `downloadAsFile`          | Shift-Ctrl-S         |
| `importFromFile`          | Ctrl-Alt-I           |
| `togglePreview`           | Alt-p                |
| `toggleSideBySidePreview` | Shift-Alt-P          |
| `undo`                    | Ctrl-Z               |
| `redo`                    | Ctrl-Y, Shift-Ctrl-Z |
| `openMarkdownGuide`       | F1                   |

For shortcuts that come built-in with _CodeMirror_, see [_CodeMirror_ documentation](https://codemirror.net/doc/manual.html#commands).

The primary to configure single shortcuts alongside with other item properties is to use the `toolbarItems` configuration as described in the [toolbar](#toolbar) section.

However, if you want to customize keyboard shortcuts of a lot of (built-in) items you may also do this inside the `options: NgxMdeOptions` input property with `options.shortcuts = {...}`. This is a decent alternative as you can specify many keybindings in a single object. **Attention**: Shortcuts defined in `options.shortcuts` will override shortcuts specified in `toolbarItems`.

When specifying custom shortcuts, mind the correct order of special keys: **Shift-Cmd-Ctrl-Alt** (see [here](https://codemirror.net/doc/manual.html#keymaps)).

#### Disabling shortcuts

As per default, keyboard shortcuts are always functioning for all built-in toolbar items, even when they are not included into the visible toolbar, in order to enable users to efficiently write _Markdown_.
However, you can configure this behavior inside the `options: NgxMdeOptions` input property with `options.shortcutsEnabled`.
You can either disable shortcuts completely (`shortcutsEnabled: 'none'`) or only enable them for items included in the toolbar or specified in `options.shortcuts` (`shortcutsEnabled: 'customOnly'`).

### Icons

Icons can be specified in multiple ways. The easiest is to use an icon included in the [_Material icon_](https://material.io/resources/icons/) font.

```typescript
const item: NgxMdeIcon = {
  format: 'material',
  iconName: 'thumb_up',
};
```

But you can also use your own SVG icons by either specifying the icon's file path (location at runtime) or by including an SVG string into your TypeScript file:

```typescript
const item: NgxMdeIcon = {
  format: 'svgFile',
  iconName: 'my_icon',
  runTimePath: './path/to/icon.svg',
};
```

or

```typescript
const item: NgxMdeIcon = {
  format: 'svgFile',
  iconName: 'my_icon',
  svgHtmlString: '<svg viewBox="0 0 20 20"> <circle r="10" /> </svg>',
};
```

Depending on the format of your icon you might need to adjust the icon via CSS, e.g. similar to

```css
.mat-button .mat-icon[data-mat-icon-name='my_icon'] {
  height: 16px;
  ...;
}
```

## Statusbar

Configuring the statusbar is very similar to configuring the toolbar, only simpler as there are only two properties for an item.

The `statusbarItems` input property is an array of type

```typescript
type NgxMdeStatusbarItemDef = NgxMdeStatusbarItemName | NgxMdeStatusbarItem;
```

`NgxMdeStatusbarItemName` is a union type of all built-in item names. The interface `NgxMdeStatusbarItem` represents a full statusbar item.

```typescript
interface NgxMdeStatusbarItem {
  name: string;
  value: OptionalI18n<Observable<string>>;
}
```

The `value` of an item is a observable (or an internationalized version of it), which will be observed by the statusbar.

> For details about the `OptionalI18n<T>` type, see [Internationalization](#internationalization) section.

In the following, we always apply a JavaScript variable to the `toolbarItems` input property:

```html
<ngx-markdown-editor [toolbarItems]="toolbarItems"></ngx-markdown-editor>
```

### 1. Construct a statusbar from existing items

To build a statusbar from existing items, simply create an array of type `NgxMdeStatusbarItemName[]` (or `NgxMdeStatusbarItemDef[]`) and specify the items by name.
Additionally, there is a separator element, which you can insert at any position with `'|'`.

```typescript
public statusbarItems: NgxMdeItemName[] = ['wordCount', 'characterCount', '|', 'cursorPosition'];
```

The naming convention for items is to use the name of the subject / value that is displayed.

### 2. Configure an existing item

You can adjust built-in items for you needs by defining an item with a name included in `NgxMdeItemName`. However, this might only make sense if you want to keep an existing item name and implement internationalization for it, as this is almost the same as creating a new item. For this reason, we omit an example here and refer to the section below.

### 3. Create your own item

To create a custom statusbar item, simply define a new object of type `NgxMdeStatusbarItem`:

```typescript
const myItem: NgxMdeItem = {
  name: 'myValue',
  value: of('static string'),
};
```

Then include this object into the statusbar item array (maybe alongside `NgxMdeStatusbarItemName`s):

```typescript
public toolbarItems: NgxMdeItemDef[] = [newToggleBoldItem, 'toggleItalic', ...];
```

## Internationalization

_Ngx Markdown Editor_ provides **opt-in internationalization** for many objects like tooltips and even icons.
To realize this, a generic type named `OptionalI18n<T>` was implemented:

```typescript
type OptionalI18n<T> = T | ({ default: T } & { [lang in LanguageTag]?: T });
```

This enables you to specify either the same object for all languages (not using internationalization for this specific object)
or apply an i18n object for only those language you need. If you use the internationalized version, you are required
to define a `default` value, that is applied for all languages you do not specify explicitly.

To summarize: you can go **exactly** as far with internationalization as you want to with this component.

## Theming

Theming is an important issue when using third party components to integrate them smoothly into your application.
Therefore, _Ngx Markdown Editor_ provides default themes as well as an easy way to apply your own theme.

You can style every element inside `<ngx-markdown-editor>` with CSS as the component does not use
view encapsulation (`ViewEncapsulation.None`). You can also predefine different themes and apply them dynamically.

### Editor styling

The default theme is named `default`. Alternatively you can use the predefined `material` theme and choose from different styles as described in the [_Getting started_](#getting-started) section.

To customize the editor's appearance for your needs, use `options.editorThemes`.
The theme name specified here, will be applied as is to `<ngx-markdown-editor>` as well as be applied with a `cm-s-` prefix to the `<div class="CodeMirror">` element.
For further details on CodeMirror's theming, visit the dedicated section on [_CodeMirror_](https://codemirror.net/doc/manual.html#styling).

To apply a customized theme with the name "example"

- specify `{ editorThemes: ["example"]}` in the `options` input property,
- define the CSS selector `ngx-markdown-editor.example` in a CSS file,
- define the CSS class `.cm-s-example` to style the _CodeMirror_ element, and
- make sure to load the CSS file with your app.

If you only want to extend the default theme, you can either define new stylings for the classes `ngx-markdown-editor.default` and `.cm-s-default` and make sure that the "default" theme is applied or you can create your own additional theme and specify two themes in the options: `{ editorThemes: ['default', 'additional-theme'] }`.

### Markup styling

Again, the default theme is named `default` here, which applies the default markup styling from the [`gfm`](https://codemirror.net/mode/gfm/index.html) _CodeMirror_ mode.

Additionally there is a predefined theme `preview-like-markup` which imitates the styling of _Ngx Markdown's_ default styling.
This makes the markup look as similar to the preview as possible.

To customize the markup styling, use `options.markupThemes`.
The theme specified here is only applied to the _CodeMirror_ element `<div class="CodeMirror"></div>`.
For detailed instructions how to define your own markup styling, visit the section on [_Markdown Editor Core_](https://github.com/lenardfunk/markdown-editor-core/#how-to-change-the-markup-styling-eg-heading-bold-).

## FAQs

### How to set the editor's content programmatically

You can either set the content using the input property `data` (one-way binding, not like `ngModel`):

```html
<ngx-markdown-editor [data]="'Content changes whenever this input changes'"></ngx-markdown-editor>
```

Or you can do it using the `MarkdownEditorComponent` instance:

```typescript
@ViewChild(MarkdownEditorComponent) ngxMde: MarkdownEditorComponent;
```

```typescript
this.ngxMde.mde.setContent('Any _Markdown_ **string**, where lines are separated with a new line character "\n".');
```

### How to access the _CodeMirror_ editor instance

The _CodeMirror_ instance is accessible through the _Markdown Editor Core_ instance, which is in turn publicly accessible in `MarkdownEditorComponent`.

```typescript
@ViewChild(MarkdownEditorComponent) ngxMde: MarkdownEditorComponent;
```

```typescript
const cm: CodeMirror.Editor = this.ngxMde.mde.cm;
```

### How to listen to an _CodeMirror_ event which is not emitted by `MarkdownEditorComponent`

With the utility function `fromCmEvent`, _Ngx Markdown Editor_ provides a convenient way to convert a _CodeMirror_ event to an RxJS `Observable`.

```typescript
@ViewChild(MarkdownEditorComponent) ngxMde: MarkdownEditorComponent;
```

```typescript
const eventObs: Observable<{...}> = fromCmEvent(this.ngxMde.mde.cm, 'mousedown');

eventObs.subscribe((instance, ...) => myEventHandler());

```

## How to contribute

First of all, contributions in any way are very welcome! And a big thank you to all who decide to so!! :)

The code is neither perfect nor complete. If you have any suggestions, requirements or even just
comments, please let me know and I will do my best do incorporate them! The even better (and probably faster) way for requesting code modifications, however, are pull requests. I am very happy about all code
contributions as time is often rare around here... :)

### Writing issues

When writing issues, please give a clear description of the current state and what you are unhappy
about. Then, if possible, propose your solution or at least leave a short statement of your thoughts
about it.

### Making pull requests

Recipe for making a pull request:

1. Fork and checkout repo locally.
2. Install [_Yarn_](https://yarnpkg.com/), if you do not have it yet. For example via `npm i yarn -g`.
3. Open a command line, move to the project directory and run `yarn` to install all dependencies.
4. Make your code changes. (Please mind the [style guidelines](#coding-style-guidelines).)
5. Use `yarn run start` to test your changes in the demo app.
6. Check the docs whether they need to be changed.
7. Push the changes to your fork.
8. Make a pull request to the _master_ branch of this repo. Please provide a meaningful title for
   the PR and give a concise description.

## Project setup

### Package manager

This project uses [_Yarn_](https://yarnpkg.com/) as package manager. So you must use this one to install dependencies when contributing code. The scripts in _package.json_ still work with `npm`, although it is recommended to always use `yarn` throughout the project.

### Commit rules

We use [_Commitlint_](https://commitlint.js.org/#/) to guarantee structured commit messages. This means
you must write commit messages that meet the rules of _Commitlint_. If you are not familiar with
_Commitlint_, you can use the CLI tool [_Commitizen_](https://github.com/commitizen/cz-cli) by running `yarn run commit`, which assists you to
write conventional messages. You can also install _Commitizen_ globally on your system, if you want to use the shorter cli commands `cz` or `git cz`.

### Coding style guidelines

There are not many strict guidelines to keep in mind, but please adapt to the project's code style
when contributing. Only one more thing shall be mentioned here:

We use [_Prettier_](https://prettier.io/) to ensure consistent formatting. Therefore, you should install a _Prettier_ plugin for your IDE. Further it is highly recommended to enable "Format on save", which is also set as the project's default for VSCode.

There is a pre-commit git hook for _Prettier_, which checks the formatting of all files. Occasionally
it might happen that this hook fails although you have "Format on save" enabled. This is usually
due to wrong line endings, e.g. caused by `yarn add ...` or some other file-writing script or tool.
In this case, run `yarn run format:write` to let _Prettier_ correct the wrong formatting and then try to commit again. Unfortunately,
the `format:write` command cannot be set as a pre-commit hook as it is not known in general, which
files need to be staged afterwards.

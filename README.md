# NgxMarkdownEditor

_Ngx Markdown Editor_ is a [_Angular_](https://angular.io/) library providing a **WYSIWYG** markdown editor, which is especially intended for users unfamiliar with the _Markdown_ syntax. However, it is also well-suited for advanced users as it provides efficient ways to write markdown, e.g. by using shortcuts or utilizing a preview-like markup theme to get immediate visual response of how the result will look like. In addition, this markdown editor provides high **extensibility** and **customizability** as well as broad and simple options for **internationalization**. Last but not least, by containing an (optional) material theme, this component will perfectly fit into your Angular Material application.

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

In order to use the material theme of _Ngx Markdown Editor_ in combination with your global material theme, import the theme file into your `styles.scss` and include the material mixin, where you should pass your app's primary color.

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
      <td><code>shortcutsInTooltips: boolean</code></td>
      <td>Specifies whether keyboard shortcuts are displayed in the tooltips of toolbar items.</td>
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
      <td>Specifies whether editor component is a required field. If <code>true</code>, an asterisk (*) is added to the label. (Apart from that, this has no other effect.)</td>
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

> One side note at this point: if you want to change the keyboard shortcuts of a lot of built-in items you may also do this inside the `options: MarkdownEditorOptions` input property with `options.shortcuts = {...}`. This is a decent alternative as you can specify many keybindings in a single object. **Attention**: Shortcuts defined in `options.shortcuts` will override shortcuts specified in `toolbarItems`.

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

## FAQs

### How to set the editor's content programmatically

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

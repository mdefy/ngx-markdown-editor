(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*****************************************!*\
  !*** multi ./projects/demo/src/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LenardF\dev\MarkdownEditor\ngx-markdown-editor\projects\demo\src\main.ts */"rzic");


/***/ }),

/***/ "7kkH":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/lib/component/markdown-editor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MarkdownEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorComponent", function() { return MarkdownEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _mdefy_markdown_editor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdefy/markdown-editor-core */ "t2xL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_statusbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/statusbar.service */ "mDhk");
/* harmony import */ var _services_toolbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toolbar.service */ "86o2");
/* harmony import */ var _types_observable_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/observable-emitter */ "MRlX");
/* harmony import */ var _util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/from-cm-event */ "hqX3");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_keybindings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/keybindings.service */ "7uov");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






















const _c0 = ["setHeadingLevel"];
const _c1 = ["markdown"];
function MarkdownEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.required ? "*" : "");
} }
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.icon.iconName, " ");
} }
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 25);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r5.icon.iconName);
} }
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", j_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("H", j_r16, "");
} }
const _c2 = function () { return [1, 2, 3, 4, 5, 6]; };
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_mat_icon_2_Template, 2, 1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_mat_icon_3_Template, 1, 1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_Template_div_mousedown_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.blockBlur = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_Template_mat_select_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r5.action($event.value); })("closed", function MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_Template_mat_select_closed_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r21.mde.cm.focus(); return ctx_r21.blockBlur = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_mat_option_9_Template, 2, 2, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r6 = ctx_r22.index;
    const item_r5 = ctx_r22.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r8.toolbarItemTooltips[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.icon.format === "material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.icon.format !== "material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.activeToolbarItems[i_r6])("disabled", ctx_r8.disabled || ctx_r8.showPreview && item_r5.disableOnPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
} }
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.icon.iconName, " ");
} }
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 25);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r5.icon.iconName);
} }
function MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_Template_button_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.blockBlur = true; })("mouseup", function MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_Template_button_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.blockBlur = false; })("click", function MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.onButtonClick(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_mat_icon_1_Template, 2, 1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_mat_icon_2_Template, 1, 1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r6 = ctx_r32.index;
    const item_r5 = ctx_r32.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r9.activeToolbarItems[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r9.toolbarItemTooltips[i_r6])("disabled", ctx_r9.disabled || ctx_r9.showPreview && item_r5.disableOnPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.icon.format === "material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.icon.format !== "material");
} }
function MarkdownEditorComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkdownEditorComponent_div_1_ng_container_1_ng_template_1_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MarkdownEditorComponent_div_1_ng_container_1_ng_template_2_Template, 10, 7, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MarkdownEditorComponent_div_1_ng_container_1_ng_template_3_Template, 3, 6, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "setHeadingLevel");
} }
function MarkdownEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkdownEditorComponent_div_1_ng_container_1_Template, 4, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.normalizedToolbarItems);
} }
function MarkdownEditorComponent_div_8_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
} }
function MarkdownEditorComponent_div_8_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r34.value));
} }
function MarkdownEditorComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkdownEditorComponent_div_8_ng_container_1_div_1_Template, 1, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MarkdownEditorComponent_div_8_ng_container_1_div_2_Template, 3, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "|");
} }
function MarkdownEditorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkdownEditorComponent_div_8_ng_container_1_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.normalizedStatusbarItems);
} }
const _c3 = function (a0) { return { display: a0 }; };
const markdownEditorTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 0,
    touchendHideDelay: 1000,
};
class MarkdownEditorComponent {
    constructor(iconRegistry, domSanitizer, hotkeys, hostElement, markdownService, toolbarService, statusbarService) {
        this.iconRegistry = iconRegistry;
        this.domSanitizer = domSanitizer;
        this.hotkeys = hotkeys;
        this.hostElement = hostElement;
        this.markdownService = markdownService;
        this.toolbarService = toolbarService;
        this.statusbarService = statusbarService;
        /**
         * Data string to set as content of the editor.
         */
        this.data = '';
        /**
         * Options to configure _Ngx Markdown Editor_.
         *
         * Basically `MarkdownEditorOptions` from _Markdown Editor Core_ are forwarded,
         * including some adjustments and extensions.
         */
        this.options = {};
        /**
         * Custom set of toolbar items.
         */
        this.toolbar = [];
        /**
         * Custom set of statusbar items.
         */
        this.statusbar = [];
        /**
         * The current language applied to internationalized items.
         */
        this.language = 'en';
        /**
         * Specifies whether the editor is a required form field. An asterisk will be appended to the label.
         */
        this.required = false;
        /**
         * Specifies whether and which Angular Material style is used.
         */
        this.materialStyle = false;
        /**
         * Specifies whether the editor is disabled.
         */
        this.disabled = false;
        /**
         * Specifies whether the toolbar is rendered.
         */
        this.showToolbar = true;
        /**
         * Specifies whether the statusbar is rendered.
         */
        this.showStatusbar = true;
        /**
         * Specifies whether tooltips are shown for toolbar items.
         */
        this.showTooltips = true;
        /**
         * Specifies whether the key combination is included in the tooltip.
         */
        this.shortcutsInTooltips = true;
        /**
         * Emits when the editor's content changes.
         */
        this.contentChange = new _types_observable_emitter__WEBPACK_IMPORTED_MODULE_7__["ObservableEmitter"]();
        /**
         * Emits when the editor's cursor is moved.
         */
        this.cursorActivity = new _types_observable_emitter__WEBPACK_IMPORTED_MODULE_7__["ObservableEmitter"]();
        /**
         * Emits when the editor receives focus.
         */
        this.editorFocus = new _types_observable_emitter__WEBPACK_IMPORTED_MODULE_7__["ObservableEmitter"]();
        /**
         * Emits when the editor loses focus.
         */
        this.editorBlur = new _types_observable_emitter__WEBPACK_IMPORTED_MODULE_7__["ObservableEmitter"]();
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.normalizedToolbarItems = [];
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.activeToolbarItems = [];
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.toolbarItemTooltips = [];
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.normalizedStatusbarItems = [];
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.showPreview = false;
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.showSideBySidePreview = false;
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.blockBlur = false;
        /**
         * _Not intended to be used outside the component. Only made public for access inside template._
         */
        this.focused = false;
        this.shortcutResetter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Render checkbox dummies which can be replaced by an `<input type="checkbox"> later,
        // because the checkboxes rendered by marked.js inside ngx-markdown are removed by Angular sanitizer.
        this.markdownService.renderer.checkbox = (checked) => (checked ? '[x] ' : '[ ] ');
    }
    get disabledStyle() {
        return this.disabled;
    }
    get default() {
        return !this.options.editorThemes && !this.materialStyle;
    }
    get material() {
        return this.materialStyle;
    }
    get class() {
        return this.options.editorThemes;
    }
    get appearanceStandard() {
        return this.materialStyle === true || this.materialStyle === 'standard';
    }
    get appearanceFill() {
        return this.materialStyle === 'fill';
    }
    get appearanceLegacy() {
        return this.materialStyle === 'legacy';
    }
    get focusedStyle() {
        return this.focused;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        const wrapper = this.hostElement.nativeElement.querySelector('.ngx-markdown-editor-text-editor');
        this.mde = new _mdefy_markdown_editor_core__WEBPACK_IMPORTED_MODULE_2__["MarkdownEditor"](wrapper, this.mapOptions(this.options));
        this.contentChange.emitObservable(Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__["fromCmEvent"])(this.mde.cm, 'changes'));
        this.cursorActivity.emitObservable(Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__["fromCmEvent"])(this.mde.cm, 'cursorActivity'));
        this.editorFocus.emitObservable(Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__["fromCmEvent"])(this.mde.cm, 'focus'));
        this.editorBlur.emitObservable(Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__["fromCmEvent"])(this.mde.cm, 'blur'));
        this.toolbarService.defineDefaultItems(this);
        this.statusbarService.defineDefaultItems(this.mde);
        // Necessary to apply `this.mde` instance to default toolbar items
        // as `ngOnChanges()` is executed before `ngOnInit()`.
        this.ngOnChanges({ data: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](undefined, this.data, true) });
        this.mde.cm.clearHistory();
        Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__["fromCmEvent"])(this.mde.cm, 'focus').subscribe(() => {
            this.focused = true;
        });
        Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__["fromCmEvent"])(this.mde.cm, 'blur').subscribe(() => {
            if (!this.blockBlur)
                this.focused = false;
        });
        Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_8__["fromCmEvent"])(this.mde.cm, 'cursorActivity').subscribe(() => {
            this.determineActiveButtons();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnChanges(changes) {
        if (this.mde) {
            if (this.showToolbar) {
                this.applyToolbarItems();
            }
            if (this.showStatusbar) {
                this.applyStatusbarItems();
            }
            this.applyDisabled();
            this.mde.setOptions(this.mapOptions(this.options));
            if (changes.data) {
                this.mde.setContent(changes.data.currentValue);
            }
            this.createTooltips();
            this.determineActiveButtons();
            this.setCodeMirrorClasses();
            this.applyMaterialStyle();
        }
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.shortcutResetter.next();
        this.shortcutResetter.complete();
    }
    /**
     * Toggles the full-size preview.
     */
    togglePreview() {
        this.showPreview = !this.showPreview;
        this.showSideBySidePreview = false;
        if (this.showPreview) {
            // Necessary to wait until Angular change detector has finished
            setTimeout(() => { var _a; return (_a = this.hostElement.nativeElement.querySelector('.ngx-markdown-editor-wrapper')) === null || _a === void 0 ? void 0 : _a.focus(); }, 100);
        }
        else {
            // Necessary to wait until Angular change detector has finished
            setTimeout(() => this.mde.focus(), 100);
        }
    }
    /**
     * Toggles the side-by-side preview.
     */
    toggleSideBySidePreview() {
        this.showSideBySidePreview = !this.showSideBySidePreview;
        this.showPreview = false;
        // Timeout necessary until Angular change detector has finished
        setTimeout(() => {
            this.mde.focus();
            this.mde.cm.refresh();
        }, 100);
    }
    /**
     * Triggered when a toolbar button is clicked.
     *
     * _Not intended to be used outside the component. Only made public for access inside template._
     */
    onButtonClick(item) {
        item.action();
        this.mde.focus();
        this.determineActiveButtons();
    }
    /**
     * Resolves the shortcut for the specified item and appends it to the item's tooltip text,
     * if `shortcutsInTooltips` is enabled.
     *
     * _Not intended to be used outside the component. Only made public for access inside template._
     */
    createTooltip(item) {
        let shortcut = this.mde.getShortcuts()[item.name] || item.shortcut;
        if (item.name === 'undo')
            shortcut = 'Ctrl-Z';
        else if (item.name === 'redo')
            shortcut = 'Shift-Ctrl-Z';
        if (/Mac/.test(navigator.platform))
            shortcut = shortcut === null || shortcut === void 0 ? void 0 : shortcut.replace(/Ctrl/gi, 'Cmd');
        const shortcutString = this.shortcutsInTooltips && shortcut ? ' (' + shortcut + ')' : '';
        return item.tooltip + shortcutString;
    }
    /**
     * Replaces the checkbox dummies rendered inside the preview with actual checkboxes (also see constructor).
     *
     * _Not intended to be used outside the component. Only made public for access inside template._
     */
    replaceCheckboxDummies() {
        var _a;
        (_a = this.markdown) === null || _a === void 0 ? void 0 : _a.element.nativeElement.querySelectorAll('li').forEach((el) => el.childNodes.forEach((node) => {
            var _a, _b;
            if (node.nodeType === 3) {
                if (/^\[ \] /.test(node.nodeValue || '')) {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.setAttribute('disabled', '');
                    el.insertBefore(input, node);
                    node.nodeValue = ((_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.replace(/^\[ \]/, '')) || null;
                }
                else if (/^\[x\] /.test(node.nodeValue || '')) {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.setAttribute('disabled', '');
                    input.setAttribute('checked', '');
                    el.insertBefore(input, node);
                    node.nodeValue = ((_b = node.nodeValue) === null || _b === void 0 ? void 0 : _b.replace(/^\[x\]/, '')) || null;
                }
            }
        }));
    }
    /**
     * Maps `NgxMdeOptions` to `MarkdownEditorOptions`.
     */
    mapOptions(options) {
        if (!options) {
            return undefined;
        }
        const getMarkdownGuideUrl = (url) => {
            if (!url)
                return undefined;
            if (typeof url === 'string') {
                return url;
            }
            else {
                return url[this.language] || url.default;
            }
        };
        const markupTheme = options.markupThemes || [];
        let editorThemes = options.editorThemes || [];
        if (this.materialStyle) {
            editorThemes = editorThemes ? editorThemes.concat('mde-material') : ['mde-material'];
        }
        else {
            if (editorThemes) {
                const index = editorThemes.findIndex((t) => t === 'mde-material');
                if (index > -1)
                    editorThemes.splice(index, 1);
            }
        }
        const shortcuts = {};
        for (const actionName in _mdefy_markdown_editor_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_OPTIONS"].shortcuts) {
            if (options.shortcuts) {
                shortcuts[actionName] = options.shortcuts[actionName];
            }
        }
        return Object.assign(Object.assign({}, options), { shortcuts, disabled: this.disabled, themes: editorThemes.concat(markupTheme), markdownGuideUrl: getMarkdownGuideUrl(options.markdownGuideUrl) });
    }
    /**
     * Applies the custom toolbar or the default toolbar as fallback.
     */
    applyToolbarItems() {
        let items;
        if (this.toolbar.length) {
            items = this.toolbar;
        }
        else {
            items = this.toolbarService.DEFAULT_TOOLBAR;
        }
        this.normalizedToolbarItems = [];
        for (const toolbarItem of items) {
            const item = this.getNormalizedItem(toolbarItem);
            if (!item) {
                console.warn(`No default item defined for name "${toolbarItem}"`);
                continue;
            }
            this.addSvgIcon(item);
            this.normalizedToolbarItems.push(item);
        }
        this.applyShortcuts(this.normalizedToolbarItems);
    }
    /**
     * Returns a complete item for all combinations of how a toolbar item can be specified and
     * resolves the current value of internationalized properties. Only returns `undefined` for
     * items specified by name and no such item can be found.
     *
     * In detail, item normalization means (in addition to i18n resolution):
     * - For built-in items specified by name string, resolves the default item.
     * - For built-in items specified partly, completes the object with default values for the missing properties.
     * - For custom items specified partly, completes the object with empty values for the missing properties.
     * - For custom items specified fully, returns as is.
     * - For unknown items specified by name string, returns `undefined`.
     */
    getNormalizedItem(toolbarItem) {
        const getTooltip = (tooltip) => {
            if (typeof tooltip === 'string') {
                return tooltip;
            }
            else {
                return tooltip[this.language] || tooltip.default;
            }
        };
        const getIcon = (icon) => {
            if ('format' in icon) {
                return icon;
            }
            else {
                return icon[this.language] || icon.default;
            }
        };
        if (typeof toolbarItem === 'string') {
            return this.toolbarService.getDefaultItem(toolbarItem);
        }
        else {
            let defaultItem = this.toolbarService.getDefaultItem(toolbarItem.name);
            if (!defaultItem) {
                defaultItem = {
                    name: '',
                    action: () => { },
                    tooltip: '',
                    icon: { format: 'material', iconName: '' },
                    disableOnPreview: false,
                };
            }
            return {
                name: toolbarItem.name,
                action: toolbarItem.action || defaultItem.action,
                shortcut: toolbarItem.shortcut || defaultItem.shortcut,
                isActive: toolbarItem.isActive || defaultItem.isActive,
                tooltip: (toolbarItem.tooltip && getTooltip(toolbarItem.tooltip)) || defaultItem.tooltip,
                icon: (toolbarItem.icon && getIcon(toolbarItem.icon)) || defaultItem.icon,
                disableOnPreview: toolbarItem.disableOnPreview || (defaultItem === null || defaultItem === void 0 ? void 0 : defaultItem.disableOnPreview),
            };
        }
    }
    /**
     * Creates tooltips for all configured toolbar items and stores them in `this.toolbarItemTooltips`.
     */
    createTooltips() {
        this.toolbarItemTooltips = new Array(this.normalizedToolbarItems.length);
        for (let i = 0; i < this.normalizedToolbarItems.length; i++) {
            const item = this.normalizedToolbarItems[i];
            this.toolbarItemTooltips[i] = this.showTooltips ? this.createTooltip(item) : '';
        }
    }
    /**
     * Applies custom shortcuts.
     *
     * For items, whose actions originate in _Markdown Editor Core_, `options.shortcuts` is
     * modified. For items that are specific to _Ngx Markdown Editor_ keybindings are applied to
     * the `<ngx-markdown-editor>` element.
     */
    applyShortcuts(items) {
        var _a, _b, _c, _d;
        if (this.options.shortcutsEnabled === 'none') {
            return;
        }
        const applySetHeadingLevelShortcut = (shortcut) => {
            const s = shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
            return this.hotkeys
                .addKeybinding(this.hostElement.nativeElement, s)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.shortcutResetter))
                .subscribe(() => {
                this.blockBlur = true;
                this.setHeadingLevelDropdown.open();
                this.setHeadingLevelDropdown.focus();
            });
        };
        const applyShortcut = (shortcut, action) => {
            const s = shortcut.replace(/(\w)-/gi, '$1.').replace(/Ctrl/gi, 'Control').replace(/Cmd/gi, 'Meta');
            return this.hotkeys
                .addKeybinding(this.hostElement.nativeElement, s)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.shortcutResetter))
                .subscribe(() => {
                action();
                this.determineActiveButtons();
            });
        };
        this.shortcutResetter.next();
        const shortcuts = {};
        const appliedNgxMdeShortcuts = {};
        if (this.options.shortcutsEnabled !== 'customOnly') {
            const previewItem = this.toolbarService.getDefaultItem('togglePreview');
            if (previewItem === null || previewItem === void 0 ? void 0 : previewItem.shortcut) {
                const subscription = applyShortcut(previewItem.shortcut, previewItem.action);
                appliedNgxMdeShortcuts[previewItem.name] = subscription;
            }
            const sideBySidePreviewItem = this.toolbarService.getDefaultItem('toggleSideBySidePreview');
            if (sideBySidePreviewItem === null || sideBySidePreviewItem === void 0 ? void 0 : sideBySidePreviewItem.shortcut) {
                const subscription = applyShortcut(sideBySidePreviewItem.shortcut, sideBySidePreviewItem.action);
                appliedNgxMdeShortcuts[sideBySidePreviewItem.name] = subscription;
            }
        }
        for (const item of items) {
            if (item.name === 'setHeadingLevel' && item.shortcut) {
                const subscription = applySetHeadingLevelShortcut(item.shortcut);
                appliedNgxMdeShortcuts[item.name] = subscription;
            }
            else if (item.name in _mdefy_markdown_editor_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_OPTIONS"].shortcuts) {
                shortcuts[item.name] = item.shortcut;
            }
            else if (item.shortcut) {
                (_a = appliedNgxMdeShortcuts[item.name]) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                const subscription = applyShortcut(item.shortcut, item.action);
                appliedNgxMdeShortcuts[item.name] = subscription;
            }
        }
        for (const actionName in this.options.shortcuts) {
            if (this.options.shortcuts[actionName]) {
                const shortcut = this.options.shortcuts[actionName];
                if (actionName === 'setHeadingLevel') {
                    const item = items.find((i) => i.name === actionName);
                    if (item) {
                        (_b = appliedNgxMdeShortcuts[actionName]) === null || _b === void 0 ? void 0 : _b.unsubscribe();
                        applySetHeadingLevelShortcut(shortcut);
                        item.shortcut = shortcut;
                    }
                }
                else if (actionName in _mdefy_markdown_editor_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_OPTIONS"].shortcuts) {
                    shortcuts[actionName] = shortcut;
                }
                else {
                    const item = items.find((i) => i.name === actionName);
                    const defaultItem = this.toolbarService.getDefaultItem(actionName);
                    if (item) {
                        (_c = appliedNgxMdeShortcuts[actionName]) === null || _c === void 0 ? void 0 : _c.unsubscribe();
                        applyShortcut(shortcut, item.action);
                        item.shortcut = shortcut;
                    }
                    else if (defaultItem) {
                        (_d = appliedNgxMdeShortcuts[actionName]) === null || _d === void 0 ? void 0 : _d.unsubscribe();
                        applyShortcut(shortcut, defaultItem.action);
                    }
                }
            }
        }
        this.options.shortcuts = shortcuts;
    }
    /**
     * Adds the SVG specified inside `item.icon` to the injected `MatIconRegistry` instance.
     */
    addSvgIcon(item) {
        switch (item.icon.format) {
            case 'svgString':
                this.iconRegistry.addSvgIconLiteral(item.icon.iconName, this.domSanitizer.bypassSecurityTrustHtml(item.icon.svgHtmlString));
                break;
            case 'svgFile':
                this.iconRegistry.addSvgIcon(item.icon.iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(item.icon.runtimePath));
                break;
        }
    }
    /**
     * Applies the custom statusbar or the default statusbar as fallback.
     */
    applyStatusbarItems() {
        let items;
        if (this.statusbar.length) {
            items = this.statusbar;
        }
        else {
            items = this.statusbarService.DEFAULT_STATUSBAR;
        }
        this.normalizedStatusbarItems = [];
        for (const toolbarItem of items) {
            const item = this.getNormalizedStatusbarItem(toolbarItem);
            if (!item) {
                console.warn(`No default item defined for name "${toolbarItem}"`);
                continue;
            }
            this.normalizedStatusbarItems.push(item);
        }
    }
    /**
     * Returns a complete item for all combinations of how a status item can be specified and
     * resolves the current value of internationalized properties. Only returns `undefined` for
     * items specified by name and no such item can be found.
     *
     * In detail, item normalization means (in addition to i18n resolution):
     * - For built-in items specified by name string, resolves the default item.
     * - For custom items, returns as is.
     * - For unknown items specified by name string, returns `undefined`.
     */
    getNormalizedStatusbarItem(statusbarItem) {
        const getValue = (value) => {
            if (value instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]) {
                return value;
            }
            else {
                return value[this.language] || value.default;
            }
        };
        if (typeof statusbarItem === 'string') {
            return this.statusbarService.getDefaultItem(statusbarItem);
        }
        else {
            return {
                name: statusbarItem.name,
                value: getValue(statusbarItem.value),
            };
        }
    }
    /**
     * Executes the `item.isActive()` function for all toolbar items and saves the state in `activeItems`.
     */
    determineActiveButtons() {
        this.activeToolbarItems = new Array(this.normalizedToolbarItems.length);
        for (let i = 0; i < this.normalizedToolbarItems.length; i++) {
            const item = this.normalizedToolbarItems[i];
            if (item.isActive) {
                this.activeToolbarItems[i] = item.isActive();
            }
            else {
                this.activeToolbarItems[i] = false;
            }
        }
    }
    /**
     * Applies the disabled state. If disabled, the full-size preview activated.
     */
    applyDisabled() {
        if (this.disabled) {
            this.showPreview = true;
            this.showSideBySidePreview = false;
            this.shortcutResetter.next();
        }
        else {
            this.showPreview = false;
            this.showSideBySidePreview = false;
        }
    }
    /**
     * Applies the material theme to both the editor and the preview. Particularly adds / removes
     * an underline element known from Angular Material `mat-input` form fields.
     */
    applyMaterialStyle() {
        const codemirror = this.hostElement.nativeElement.querySelector('.CodeMirror');
        if (codemirror) {
            const underline = codemirror.querySelector('.underline');
            if (this.materialStyle) {
                if (!underline) {
                    const newUnderline = document.createElement('div');
                    newUnderline.setAttribute('class', 'underline');
                    const newRipple = document.createElement('div');
                    newRipple.setAttribute('class', 'ripple');
                    newUnderline.append(newRipple);
                    codemirror.append(newUnderline);
                }
            }
            else {
                underline === null || underline === void 0 ? void 0 : underline.remove();
            }
        }
        const preview = this.hostElement.nativeElement.querySelector('.ngx-markdown-editor-preview');
        if (preview) {
            const underline = preview.querySelector('.underline');
            if (this.materialStyle) {
                if (!underline) {
                    const newUnderline = document.createElement('div');
                    newUnderline.setAttribute('class', 'underline');
                    preview.append(newUnderline);
                }
            }
            else {
                underline === null || underline === void 0 ? void 0 : underline.remove();
            }
        }
    }
    /**
     * Adds and removes classes to/from the CodeMirror element according to configuration.
     */
    setCodeMirrorClasses() {
        const codemirror = this.hostElement.nativeElement.querySelector('.CodeMirror');
        if (this.options.lineNumbers) {
            codemirror === null || codemirror === void 0 ? void 0 : codemirror.classList.add('CodeMirror-lineNumbers');
        }
        else {
            codemirror === null || codemirror === void 0 ? void 0 : codemirror.classList.remove('CodeMirror-lineNumbers');
        }
    }
}
MarkdownEditorComponent.ɵfac = function MarkdownEditorComponent_Factory(t) { return new (t || MarkdownEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keybindings_service__WEBPACK_IMPORTED_MODULE_11__["Keybindings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolbar_service__WEBPACK_IMPORTED_MODULE_6__["ToolbarService"], 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statusbar_service__WEBPACK_IMPORTED_MODULE_5__["StatusbarService"], 1)); };
MarkdownEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownEditorComponent, selectors: [["ngx-markdown-editor"]], viewQuery: function MarkdownEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.setHeadingLevelDropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.markdown = _t.first);
    } }, hostVars: 16, hostBindings: function MarkdownEditorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabledStyle)("default", ctx.default)("material", ctx.material)("appearance-standard", ctx.appearanceStandard)("appearance-fill", ctx.appearanceFill)("appearance-legacy", ctx.appearanceLegacy)("focused", ctx.focusedStyle);
    } }, inputs: { data: "data", options: "options", toolbar: "toolbar", statusbar: "statusbar", language: "language", label: "label", required: "required", materialStyle: "materialStyle", disabled: "disabled", showToolbar: "showToolbar", showStatusbar: "showStatusbar", showTooltips: "showTooltips", shortcutsInTooltips: "shortcutsInTooltips" }, outputs: { contentChange: "contentChange", cursorActivity: "cursorActivity", editorFocus: "editorFocus", editorBlur: "editorBlur" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MAT_TOOLTIP_DEFAULT_OPTIONS"], useValue: markdownEditorTooltipDefaults },
            _services_toolbar_service__WEBPACK_IMPORTED_MODULE_6__["ToolbarService"],
            _services_statusbar_service__WEBPACK_IMPORTED_MODULE_5__["StatusbarService"],
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 10, consts: [["class", "ngx-markdown-editor-label", 4, "ngIf"], ["class", "ngx-markdown-editor-toolbar", 4, "ngIf"], ["tabindex", "-1", 1, "ngx-markdown-editor-wrapper"], [1, "ngx-markdown-editor-text-editor", 3, "ngStyle"], [1, "ngx-markdown-editor-preview", 3, "ngStyle"], [1, "preview-wrapper"], [3, "data", "ready"], ["markdown", ""], ["class", "ngx-markdown-editor-statusbar", 4, "ngIf"], [1, "ngx-markdown-editor-label"], [1, "required-marker"], [1, "ngx-markdown-editor-toolbar"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "ngSwitchCase"], ["ngSwitchDefault", ""], [1, "mde-toolbar-separator"], ["floatLabel", "never", 3, "matTooltip"], [4, "ngIf"], [3, "svgIcon", 4, "ngIf"], [3, "mousedown"], [3, "value", "disabled", "selectionChange", "closed"], ["setHeadingLevel", ""], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [3, "svgIcon"], [3, "value"], ["mat-button", "", 3, "matTooltip", "disabled", "mousedown", "mouseup", "click"], [1, "ngx-markdown-editor-statusbar"], ["class", "mde-statusbar-separator", 4, "ngSwitchCase"], ["class", "mde-statusbar-item", 4, "ngSwitchDefault"], [1, "mde-statusbar-separator"], [1, "mde-statusbar-item"]], template: function MarkdownEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MarkdownEditorComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkdownEditorComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "markdown", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function MarkdownEditorComponent_Template_markdown_ready_6_listener() { return ctx.replaceCheckboxDummies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarkdownEditorComponent_div_8_Template, 2, 1, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, ctx.showPreview ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, ctx.showPreview || ctx.showSideBySidePreview ? "" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.mde.getContent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStatusbar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchDefault"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["/* BASICS */\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n/* PADDING */\n.CodeMirror-lines {\n  padding: 4px 0;\n  /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px;\n  /* Horizontal padding of content */\n}\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: transparent;\n  /* The little square between H and V scrollbars */\n}\n/* GUTTER */\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n.CodeMirror-guttermarker {\n  color: black;\n}\n.CodeMirror-guttermarker-subtle {\n  color: #999;\n}\n/* CURSOR */\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-webkit-keyframes blink {\n  50% {\n    background-color: transparent;\n  }\n}\n@keyframes blink {\n  50% {\n    background-color: transparent;\n  }\n}\n/* Can style cursor different in overwrite (non-insert) mode */\n.cm-tab {\n  display: inline-block;\n  text-decoration: inherit;\n}\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -50px;\n  bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n}\n/* DEFAULT THEME */\n.cm-s-default .cm-header {\n  color: blue;\n}\n.cm-s-default .cm-quote {\n  color: #090;\n}\n.cm-negative {\n  color: #d44;\n}\n.cm-positive {\n  color: #292;\n}\n.cm-header, .cm-strong {\n  font-weight: bold;\n}\n.cm-em {\n  font-style: italic;\n}\n.cm-link {\n  text-decoration: underline;\n}\n.cm-strikethrough {\n  text-decoration: line-through;\n}\n.cm-s-default .cm-keyword {\n  color: #708;\n}\n.cm-s-default .cm-atom {\n  color: #219;\n}\n.cm-s-default .cm-number {\n  color: #164;\n}\n.cm-s-default .cm-def {\n  color: #00f;\n}\n.cm-s-default .cm-variable-2 {\n  color: #05a;\n}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {\n  color: #085;\n}\n.cm-s-default .cm-comment {\n  color: #a50;\n}\n.cm-s-default .cm-string {\n  color: #a11;\n}\n.cm-s-default .cm-string-2 {\n  color: #f50;\n}\n.cm-s-default .cm-meta {\n  color: #555;\n}\n.cm-s-default .cm-qualifier {\n  color: #555;\n}\n.cm-s-default .cm-builtin {\n  color: #30a;\n}\n.cm-s-default .cm-bracket {\n  color: #997;\n}\n.cm-s-default .cm-tag {\n  color: #170;\n}\n.cm-s-default .cm-attribute {\n  color: #00c;\n}\n.cm-s-default .cm-hr {\n  color: #999;\n}\n.cm-s-default .cm-link {\n  color: #00c;\n}\n.cm-s-default .cm-error {\n  color: #f00;\n}\n.cm-invalidchar {\n  color: #f00;\n}\n.CodeMirror-composing {\n  border-bottom: 2px solid;\n}\n/* Default styles for common addons */\ndiv.CodeMirror span.CodeMirror-matchingbracket {\n  color: #0b0;\n}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {\n  color: #a22;\n}\n.CodeMirror-matchingtag {\n  background: rgba(255, 150, 0, 0.3);\n}\n.CodeMirror-activeline-background {\n  background: #e8f2ff;\n}\n/* STOP */\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n.CodeMirror-scroll {\n  overflow: scroll !important;\n  /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px;\n  margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none;\n  /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0;\n  top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0;\n  left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0;\n  bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0;\n  bottom: 0;\n}\n.CodeMirror-gutters {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::-moz-selection {\n  background-color: transparent;\n}\n.CodeMirror-gutter-wrapper ::selection {\n  background-color: transparent;\n}\n.CodeMirror-gutter-wrapper ::-moz-selection {\n  background-color: transparent;\n}\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px;\n  /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 0;\n}\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px;\n  /* Force widget margins to stay inside of the container */\n}\n.CodeMirror-rtl pre {\n  direction: rtl;\n}\n.CodeMirror-code {\n  outline: none;\n}\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre {\n  position: static;\n}\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n.CodeMirror-selected {\n  background: #d9d9d9;\n}\n.CodeMirror-focused .CodeMirror-selected {\n  background: #d7d4f0;\n}\n.CodeMirror-crosshair {\n  cursor: crosshair;\n}\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection {\n  background: #d7d4f0;\n}\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection {\n  background: #d7d4f0;\n}\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection {\n  background: #d7d4f0;\n}\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, 0.4);\n}\n/* Used to force a border model for a node */\n.cm-force-border {\n  padding-right: 0.1px;\n}\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n/* See issue #2901 */\n.cm-tab-wrap-hack:after {\n  content: \"\";\n}\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext {\n  background: none;\n}\nngx-markdown-editor {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n.ngx-markdown-editor-toolbar .mat-button {\n  min-width: 30px;\n  line-height: 28px;\n  margin: 3px 2px;\n  padding: 0;\n  border: 1px solid transparent;\n}\n.ngx-markdown-editor-toolbar .mat-button.active {\n  background-color: rgba(0, 0, 0, 0.05);\n  border-color: darkgray;\n}\n.ngx-markdown-editor-toolbar .mat-form-field {\n  font-size: 12px;\n  min-width: 3em;\n  width: 3em;\n  text-align: center;\n  margin: -10px 3px -15px 3px;\n}\n.ngx-markdown-editor-toolbar .mat-form-field:first-child {\n  margin-left: 10px;\n}\n.ngx-markdown-editor-toolbar .mat-form-field.mat-form-field-disabled .mat-icon {\n  color: rgba(0, 0, 0, 0.26);\n}\n.ngx-markdown-editor-toolbar .mde-toolbar-separator {\n  display: inline-block;\n  height: 24px;\n  vertical-align: middle;\n  border-left: 1px solid darkgray;\n}\n.ngx-markdown-editor-toolbar .mat-button .mat-icon {\n  height: 20px;\n  width: 20px;\n  font-size: 20px;\n}\n.ngx-markdown-editor-toolbar .mat-button .mat-icon[data-mat-icon-name=column], .ngx-markdown-editor-toolbar .mat-button .mat-icon[data-mat-icon-name=file_code], .ngx-markdown-editor-toolbar .mat-button .mat-icon[data-mat-icon-name=upload] {\n  height: 16px;\n}\n.ngx-markdown-editor-toolbar .mat-button .mat-icon[data-mat-icon-name=format_heading] {\n  height: 13px;\n  margin-top: -2px;\n}\n.ngx-markdown-editor-toolbar .mat-button .mat-icon[data-mat-icon-name=format_heading_increase], .ngx-markdown-editor-toolbar .mat-button .mat-icon[data-mat-icon-name=format_heading_decrease] {\n  height: 18px;\n  margin-top: -2px;\n}\n.ngx-markdown-editor-toolbar .mat-form-field .mat-icon[data-mat-icon-name=format_heading] {\n  height: 13px;\n}\n.ngx-markdown-editor-toolbar svg {\n  vertical-align: top;\n}\n.ngx-markdown-editor-wrapper {\n  overflow: hidden;\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n}\n.ngx-markdown-editor-wrapper:focus {\n  outline: none;\n}\n.ngx-markdown-editor-text-editor {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n.ngx-markdown-editor-text-editor .CodeMirror {\n  height: 100%;\n  word-wrap: break-word;\n}\n.ngx-markdown-editor-text-editor .CodeMirror .CodeMirror-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n}\n.ngx-markdown-editor-preview {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  background-color: #f0f0f0;\n  overflow-y: auto;\n  word-wrap: break-word;\n}\n.ngx-markdown-editor-preview > .preview-wrapper {\n  padding: 0 10px;\n  height: 100%;\n  overflow: auto;\n}\n.ngx-markdown-editor-statusbar {\n  margin-top: 5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.75em;\n  text-align: right;\n}\n.ngx-markdown-editor-statusbar * {\n  margin: 0 7px;\n  display: inline-block;\n}\n.ngx-markdown-editor-statusbar .mde-statusbar-separator {\n  margin: 0 4px;\n  height: 14px;\n  vertical-align: middle;\n  border-left: 1px solid darkgray;\n}\nngx-markdown-editor.default .ngx-markdown-editor-label {\n  padding-left: 8px;\n  font-weight: bold;\n  text-decoration: underline;\n}\nngx-markdown-editor.default .ngx-markdown-editor-wrapper > * {\n  border: 1px solid #ddd;\n}\nngx-markdown-editor.default .ngx-markdown-editor-wrapper > :first-child,\nngx-markdown-editor.default .ngx-markdown-editor-wrapper :first-child[style=\"display: none;\"] + * {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\nngx-markdown-editor.default .ngx-markdown-editor-wrapper > :last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\nngx-markdown-editor.default .ngx-markdown-editor-wrapper .CodeMirror {\n  border-radius: 5px;\n}\nngx-markdown-editor.default .ngx-markdown-editor-wrapper .CodeMirror .CodeMirror-scroll {\n  padding-left: 8px;\n  padding-top: 8px;\n  height: calc(100% - 8px);\n}\nngx-markdown-editor.default .ngx-markdown-editor-wrapper .CodeMirror.CodeMirror-lineNumbers .CodeMirror-scroll {\n  padding-left: 0;\n}\n.CodeMirror.cm-s-preview-like-markup {\n  font-family: Roboto, Helvetica Neue, sans-serif;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-header {\n  color: black;\n  font-weight: bold;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-header.cm-header-1 {\n  font-size: 2em;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-header.cm-header-2 {\n  font-size: 1.5em;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-header.cm-header-3 {\n  font-size: 1.17em;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-header.cm-header-4 {\n  font-size: 1em;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-header.cm-header-5 {\n  font-size: 0.83em;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-header.cm-header-6 {\n  font-size: 0.67em;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-code {\n  font-family: monospace;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-link-text {\n  color: #0366d6;\n  text-decoration: underline;\n}\n.CodeMirror.cm-s-preview-like-markup .cm-link-href {\n  color: #afafaf;\n  text-decoration: none;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGNvZGVtaXJyb3JcXGxpYlxcY29kZW1pcnJvci5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG1hcmtkb3duLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBRUE7RUFDRSxnRUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUY7QURHQSxZQUFBO0FBRUE7RUFDRSxjQUFBO0VBQWdCLG9DQUFBO0FDQWxCO0FERUE7O0VBRUUsY0FBQTtFQUFnQixrQ0FBQTtBQ0VsQjtBRENBO0VBQ0UsNkJBQUE7RUFBK0IsaURBQUE7QUNHakM7QURBQSxXQUFBO0FBRUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQTJCLFlBQUE7QUNHM0I7QURGQTtFQUFrQyxXQUFBO0FDTWxDO0FESkEsV0FBQTtBQUVBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNNRjtBREpBLDZDQUFBO0FBQ0E7RUFDRSw2QkFBQTtBQ09GO0FETEE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ1FGO0FETkE7RUFDRSxVQUFBO0FDU0Y7QURQQTtFQUNFLHdDQUFBO0VBQ0EsZ0RBQUE7RUFFQSx3Q0FBQTtBQ1VGO0FEUkE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdEQUFBO0VBRUEsd0NBQUE7RUFDQSxzQkFBQTtBQ1dGO0FESkE7RUFFRTtJQUFNLDZCQUFBO0VDWU47QUFDRjtBRFZBO0VBRUU7SUFBTSw2QkFBQTtFQ1lOO0FBQ0Y7QURUQSw4REFBQTtBQUdBO0VBQVUscUJBQUE7RUFBdUIsd0JBQUE7QUNXakM7QURUQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUFTLFFBQUE7RUFBVSxVQUFBO0VBQVksU0FBQTtFQUMvQixnQkFBQTtBQ2VGO0FEYkE7RUFDRSwyQkFBQTtFQUNBLE1BQUE7RUFBUSxTQUFBO0VBQ1Isa0JBQUE7QUNpQkY7QURkQSxrQkFBQTtBQUVBO0VBQTBCLFdBQUE7QUNpQjFCO0FEaEJBO0VBQXlCLFdBQUE7QUNvQnpCO0FEbkJBO0VBQWMsV0FBQTtBQ3VCZDtBRHRCQTtFQUFjLFdBQUE7QUMwQmQ7QUR6QkE7RUFBd0IsaUJBQUE7QUM2QnhCO0FENUJBO0VBQVEsa0JBQUE7QUNnQ1I7QUQvQkE7RUFBVSwwQkFBQTtBQ21DVjtBRGxDQTtFQUFtQiw2QkFBQTtBQ3NDbkI7QURwQ0E7RUFBMkIsV0FBQTtBQ3dDM0I7QUR2Q0E7RUFBd0IsV0FBQTtBQzJDeEI7QUQxQ0E7RUFBMEIsV0FBQTtBQzhDMUI7QUQ3Q0E7RUFBdUIsV0FBQTtBQ2lEdkI7QUQ1Q0E7RUFBOEIsV0FBQTtBQ2dEOUI7QUQvQ0E7RUFBc0QsV0FBQTtBQ21EdEQ7QURsREE7RUFBMkIsV0FBQTtBQ3NEM0I7QURyREE7RUFBMEIsV0FBQTtBQ3lEMUI7QUR4REE7RUFBNEIsV0FBQTtBQzRENUI7QUQzREE7RUFBd0IsV0FBQTtBQytEeEI7QUQ5REE7RUFBNkIsV0FBQTtBQ2tFN0I7QURqRUE7RUFBMkIsV0FBQTtBQ3FFM0I7QURwRUE7RUFBMkIsV0FBQTtBQ3dFM0I7QUR2RUE7RUFBdUIsV0FBQTtBQzJFdkI7QUQxRUE7RUFBNkIsV0FBQTtBQzhFN0I7QUQ3RUE7RUFBc0IsV0FBQTtBQ2lGdEI7QURoRkE7RUFBd0IsV0FBQTtBQ29GeEI7QURsRkE7RUFBeUIsV0FBQTtBQ3NGekI7QURyRkE7RUFBaUIsV0FBQTtBQ3lGakI7QUR2RkE7RUFBd0Isd0JBQUE7QUMyRnhCO0FEekZBLHFDQUFBO0FBRUE7RUFBZ0QsV0FBQTtBQzRGaEQ7QUQzRkE7RUFBbUQsV0FBQTtBQytGbkQ7QUQ5RkE7RUFBMEIsa0NBQUE7QUNrRzFCO0FEakdBO0VBQW1DLG1CQUFBO0FDcUduQztBRG5HQSxTQUFBO0FBRUE7bURBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ29HRjtBRGpHQTtFQUNFLDJCQUFBO0VBQTZCLDRDQUFBO0VBQzdCLHdFQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUFzQixtQkFBQTtFQUN0QixvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQWUsbURBQUE7RUFDZixrQkFBQTtBQ3VHRjtBRHJHQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7QUN3R0Y7QURyR0E7OzBCQUFBO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ3dHRjtBRHRHQTtFQUNFLFFBQUE7RUFBVSxNQUFBO0VBQ1Ysa0JBQUE7RUFDQSxrQkFBQTtBQzBHRjtBRHhHQTtFQUNFLFNBQUE7RUFBVyxPQUFBO0VBQ1gsa0JBQUE7RUFDQSxrQkFBQTtBQzRHRjtBRDFHQTtFQUNFLFFBQUE7RUFBVSxTQUFBO0FDOEdaO0FENUdBO0VBQ0UsT0FBQTtFQUFTLFNBQUE7QUNnSFg7QUQ3R0E7RUFDRSxrQkFBQTtFQUFvQixPQUFBO0VBQVMsTUFBQTtFQUM3QixnQkFBQTtFQUNBLFVBQUE7QUNrSEY7QURoSEE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNtSEY7QURqSEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDb0hGO0FEbEhBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQVEsU0FBQTtFQUNSLFVBQUE7QUNzSEY7QURwSEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDdUhGO0FEckhBO0VBQXlDLDZCQUFBO0FDeUh6QztBRHpIQTtFQUF5Qyw2QkFBQTtBQ3lIekM7QUR4SEE7RUFBOEMsNkJBQUE7QUM0SDlDO0FEMUhBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFBaUIsMENBQUE7QUM4SG5CO0FENUhBOztFQUVFLCtEQUFBO0VBQ2lELGdCQUFBO0VBQ2pELGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFFQSxrQ0FBQTtBQ2lJRjtBRC9IQTs7RUFFRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNrSUY7QUQvSEE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFBUyxRQUFBO0VBQVUsTUFBQTtFQUFRLFNBQUE7RUFDM0IsVUFBQTtBQ3FJRjtBRGxJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFBZ0IseURBQUE7QUNzSWxCO0FEaklBO0VBQXNCLGNBQUE7QUNxSXRCO0FEbklBO0VBQ0UsYUFBQTtBQ3NJRjtBRG5JQSxpRUFBQTtBQUNBOzs7OztFQU1FLHVCQUFBO0FDc0lGO0FEbklBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNzSUY7QURuSUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FDc0lGO0FEcElBO0VBQTBCLGdCQUFBO0FDd0kxQjtBRHRJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDeUlGO0FEdklBO0VBQ0UsbUJBQUE7QUMwSUY7QUR2SUE7RUFDRSxtQkFBQTtBQzBJRjtBRHZJQTtFQUF1QixtQkFBQTtBQzJJdkI7QUQxSUE7RUFBMkMsbUJBQUE7QUM4STNDO0FEN0lBO0VBQXdCLGlCQUFBO0FDaUp4QjtBRGhKQTtFQUE2RyxtQkFBQTtBQ29KN0c7QURwSkE7RUFBNkcsbUJBQUE7QUNvSjdHO0FEbkpBO0VBQTRILG1CQUFBO0FDdUo1SDtBRHJKQTtFQUNFLHNCQUFBO0VBQ0Esd0NBQUE7QUN3SkY7QURySkEsNENBQUE7QUFDQTtFQUFtQixvQkFBQTtBQ3lKbkI7QUR2SkE7RUFDRSxrQ0FBQTtFQUNBO0lBQ0Usa0JBQUE7RUMwSkY7QUFDRjtBRHZKQSxvQkFBQTtBQUNBO0VBQTBCLFdBQUE7QUMwSjFCO0FEeEpBLGlFQUFBO0FBQ0E7RUFBK0IsZ0JBQUE7QUM0Si9CO0FBdmZBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUEwZkY7QUF0ZkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBeWZKO0FBdmZJO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtBQXlmTjtBQXJmRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUF1Zko7QUFyZkk7RUFDRSxpQkFBQTtBQXVmTjtBQW5mTTtFQUNFLDBCQUFBO0FBcWZSO0FBaGZFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQWtmSjtBQS9lRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWlmSjtBQS9lSTtFQUdFLFlBQUE7QUErZU47QUE1ZUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUE4ZU47QUEzZUk7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUE0ZU47QUF4ZUU7RUFDRSxZQUFBO0FBMGVKO0FBdmVFO0VBQ0UsbUJBQUE7QUF5ZUo7QUFyZUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXdlRjtBQXRlRTtFQUNFLGFBQUE7QUF3ZUo7QUFwZUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUF1ZUY7QUFyZUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUF1ZUo7QUFyZUk7RUFDRSx5QkFBQTtBQXVlTjtBQWxlQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQXFlRjtBQW5lRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXFlSjtBQWplQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFvZUY7QUFsZUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFvZUo7QUFqZUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFtZUo7QUE5ZEU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFpZUo7QUE3ZEk7RUFDRSxzQkFBQTtBQStkTjtBQTVkSTs7RUFFRSwyQkFBQTtFQUNBLDhCQUFBO0FBOGROO0FBM2RJO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBQTZkTjtBQTFkSTtFQUNFLGtCQUFBO0FBNGROO0FBMWRNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBNGRSO0FBeGRRO0VBQ0UsZUFBQTtBQTBkVjtBQW5kQTtFQUNFLCtDQUFBO0FBc2RGO0FBcGRFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBc2RKO0FBcGRJO0VBQ0UsY0FBQTtBQXNkTjtBQXBkSTtFQUNFLGdCQUFBO0FBc2ROO0FBcGRJO0VBQ0UsaUJBQUE7QUFzZE47QUFwZEk7RUFDRSxjQUFBO0FBc2ROO0FBcGRJO0VBQ0UsaUJBQUE7QUFzZE47QUFwZEk7RUFDRSxpQkFBQTtBQXNkTjtBQWxkRTtFQUNFLHNCQUFBO0FBb2RKO0FBamRFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBbWRKO0FBaGRFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFrZEoiLCJmaWxlIjoibWFya2Rvd24tZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQkFTSUNTICovXG5cbi5Db2RlTWlycm9yIHtcbiAgLyogU2V0IGhlaWdodCwgd2lkdGgsIGJvcmRlcnMsIGFuZCBnbG9iYWwgZm9udCBwcm9wZXJ0aWVzIGhlcmUgKi9cbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLyogUEFERElORyAqL1xuXG4uQ29kZU1pcnJvci1saW5lcyB7XG4gIHBhZGRpbmc6IDRweCAwOyAvKiBWZXJ0aWNhbCBwYWRkaW5nIGFyb3VuZCBjb250ZW50ICovXG59XG4uQ29kZU1pcnJvciBwcmUuQ29kZU1pcnJvci1saW5lLFxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZS1saWtlIHtcbiAgcGFkZGluZzogMCA0cHg7IC8qIEhvcml6b250YWwgcGFkZGluZyBvZiBjb250ZW50ICovXG59XG5cbi5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsIC5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogVGhlIGxpdHRsZSBzcXVhcmUgYmV0d2VlbiBIIGFuZCBWIHNjcm9sbGJhcnMgKi9cbn1cblxuLyogR1VUVEVSICovXG5cbi5Db2RlTWlycm9yLWd1dHRlcnMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLkNvZGVNaXJyb3ItbGluZW51bWJlcnMge31cbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICBwYWRkaW5nOiAwIDNweCAwIDVweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM5OTk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5Db2RlTWlycm9yLWd1dHRlcm1hcmtlciB7IGNvbG9yOiBibGFjazsgfVxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7IGNvbG9yOiAjOTk5OyB9XG5cbi8qIENVUlNPUiAqL1xuXG4uQ29kZU1pcnJvci1jdXJzb3Ige1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHdpZHRoOiAwO1xufVxuLyogU2hvd24gd2hlbiBtb3ZpbmcgaW4gYmktZGlyZWN0aW9uYWwgdGV4dCAqL1xuLkNvZGVNaXJyb3IgZGl2LkNvZGVNaXJyb3Itc2Vjb25kYXJ5Y3Vyc29yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBzaWx2ZXI7XG59XG4uY20tZmF0LWN1cnNvciAuQ29kZU1pcnJvci1jdXJzb3Ige1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM3ZTc7XG59XG4uY20tZmF0LWN1cnNvciBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgei1pbmRleDogMTtcbn1cbi5jbS1mYXQtY3Vyc29yLW1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyNTUsIDIwLCAwLjUpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbn1cbi5jbS1hbmltYXRlLWZhdC1jdXJzb3Ige1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlNztcbn1cbkAtbW96LWtleWZyYW1lcyBibGluayB7XG4gIDAlIHt9XG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIDEwMCUge31cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XG4gIDAlIHt9XG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIDEwMCUge31cbn1cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7fVxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAxMDAlIHt9XG59XG5cbi8qIENhbiBzdHlsZSBjdXJzb3IgZGlmZmVyZW50IGluIG92ZXJ3cml0ZSAobm9uLWluc2VydCkgbW9kZSAqL1xuLkNvZGVNaXJyb3Itb3ZlcndyaXRlIC5Db2RlTWlycm9yLWN1cnNvciB7fVxuXG4uY20tdGFiIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IH1cblxuLkNvZGVNaXJyb3ItcnVsZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiAtNTBweDsgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLkNvZGVNaXJyb3ItcnVsZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIHRvcDogMDsgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi8qIERFRkFVTFQgVEhFTUUgKi9cblxuLmNtLXMtZGVmYXVsdCAuY20taGVhZGVyIHtjb2xvcjogYmx1ZTt9XG4uY20tcy1kZWZhdWx0IC5jbS1xdW90ZSB7Y29sb3I6ICMwOTA7fVxuLmNtLW5lZ2F0aXZlIHtjb2xvcjogI2Q0NDt9XG4uY20tcG9zaXRpdmUge2NvbG9yOiAjMjkyO31cbi5jbS1oZWFkZXIsIC5jbS1zdHJvbmcge2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5jbS1lbSB7Zm9udC1zdHlsZTogaXRhbGljO31cbi5jbS1saW5rIHt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XG4uY20tc3RyaWtldGhyb3VnaCB7dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7fVxuXG4uY20tcy1kZWZhdWx0IC5jbS1rZXl3b3JkIHtjb2xvcjogIzcwODt9XG4uY20tcy1kZWZhdWx0IC5jbS1hdG9tIHtjb2xvcjogIzIxOTt9XG4uY20tcy1kZWZhdWx0IC5jbS1udW1iZXIge2NvbG9yOiAjMTY0O31cbi5jbS1zLWRlZmF1bHQgLmNtLWRlZiB7Y29sb3I6ICMwMGY7fVxuLmNtLXMtZGVmYXVsdCAuY20tdmFyaWFibGUsXG4uY20tcy1kZWZhdWx0IC5jbS1wdW5jdHVhdGlvbixcbi5jbS1zLWRlZmF1bHQgLmNtLXByb3BlcnR5LFxuLmNtLXMtZGVmYXVsdCAuY20tb3BlcmF0b3Ige31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTIge2NvbG9yOiAjMDVhO31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTMsIC5jbS1zLWRlZmF1bHQgLmNtLXR5cGUge2NvbG9yOiAjMDg1O31cbi5jbS1zLWRlZmF1bHQgLmNtLWNvbW1lbnQge2NvbG9yOiAjYTUwO31cbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZyB7Y29sb3I6ICNhMTE7fVxuLmNtLXMtZGVmYXVsdCAuY20tc3RyaW5nLTIge2NvbG9yOiAjZjUwO31cbi5jbS1zLWRlZmF1bHQgLmNtLW1ldGEge2NvbG9yOiAjNTU1O31cbi5jbS1zLWRlZmF1bHQgLmNtLXF1YWxpZmllciB7Y29sb3I6ICM1NTU7fVxuLmNtLXMtZGVmYXVsdCAuY20tYnVpbHRpbiB7Y29sb3I6ICMzMGE7fVxuLmNtLXMtZGVmYXVsdCAuY20tYnJhY2tldCB7Y29sb3I6ICM5OTc7fVxuLmNtLXMtZGVmYXVsdCAuY20tdGFnIHtjb2xvcjogIzE3MDt9XG4uY20tcy1kZWZhdWx0IC5jbS1hdHRyaWJ1dGUge2NvbG9yOiAjMDBjO31cbi5jbS1zLWRlZmF1bHQgLmNtLWhyIHtjb2xvcjogIzk5OTt9XG4uY20tcy1kZWZhdWx0IC5jbS1saW5rIHtjb2xvcjogIzAwYzt9XG5cbi5jbS1zLWRlZmF1bHQgLmNtLWVycm9yIHtjb2xvcjogI2YwMDt9XG4uY20taW52YWxpZGNoYXIge2NvbG9yOiAjZjAwO31cblxuLkNvZGVNaXJyb3ItY29tcG9zaW5nIHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkOyB9XG5cbi8qIERlZmF1bHQgc3R5bGVzIGZvciBjb21tb24gYWRkb25zICovXG5cbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjMGIwO31cbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1ub25tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjYTIyO31cbi5Db2RlTWlycm9yLW1hdGNoaW5ndGFnIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MCwgMCwgLjMpOyB9XG4uQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmQge2JhY2tncm91bmQ6ICNlOGYyZmY7fVxuXG4vKiBTVE9QICovXG5cbi8qIFRoZSByZXN0IG9mIHRoaXMgZmlsZSBjb250YWlucyBzdHlsZXMgcmVsYXRlZCB0byB0aGUgbWVjaGFuaWNzIG9mXG4gICB0aGUgZWRpdG9yLiBZb3UgcHJvYmFibHkgc2hvdWxkbid0IHRvdWNoIHRoZW0uICovXG5cbi5Db2RlTWlycm9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50OyAvKiBUaGluZ3Mgd2lsbCBicmVhayBpZiB0aGlzIGlzIG92ZXJyaWRkZW4gKi9cbiAgLyogNTBweCBpcyB0aGUgbWFnaWMgbWFyZ2luIHVzZWQgdG8gaGlkZSB0aGUgZWxlbWVudCdzIHJlYWwgc2Nyb2xsYmFycyAqL1xuICAvKiBTZWUgb3ZlcmZsb3c6IGhpZGRlbiBpbiAuQ29kZU1pcnJvciAqL1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDsgbWFyZ2luLXJpZ2h0OiAtNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTsgLyogUHJldmVudCBkcmFnZ2luZyBmcm9tIGhpZ2hsaWdodGluZyB0aGUgZWxlbWVudCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uQ29kZU1pcnJvci1zaXplciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vKiBUaGUgZmFrZSwgdmlzaWJsZSBzY3JvbGxiYXJzLiBVc2VkIHRvIGZvcmNlIHJlZHJhdyBkdXJpbmcgc2Nyb2xsaW5nXG4gICBiZWZvcmUgYWN0dWFsIHNjcm9sbGluZyBoYXBwZW5zLCB0aHVzIHByZXZlbnRpbmcgc2hha2luZyBhbmRcbiAgIGZsaWNrZXJpbmcgYXJ0aWZhY3RzLiAqL1xuLkNvZGVNaXJyb3ItdnNjcm9sbGJhciwgLkNvZGVNaXJyb3ItaHNjcm9sbGJhciwgLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciwgLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICByaWdodDogMDsgdG9wOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5Db2RlTWlycm9yLWhzY3JvbGxiYXIge1xuICBib3R0b206IDA7IGxlZnQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciB7XG4gIHJpZ2h0OiAwOyBib3R0b206IDA7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItZmlsbGVyIHtcbiAgbGVmdDogMDsgYm90dG9tOiAwO1xufVxuXG4uQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDM7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXIge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7IGJvdHRvbTogMDtcbiAgei1pbmRleDogNDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci1lbHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgei1pbmRleDogNDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgfVxuLkNvZGVNaXJyb3ItZ3V0dGVyLXdyYXBwZXIgOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IH1cblxuLkNvZGVNaXJyb3ItbGluZXMge1xuICBjdXJzb3I6IHRleHQ7XG4gIG1pbi1oZWlnaHQ6IDFweDsgLyogcHJldmVudHMgY29sbGFwc2luZyBiZWZvcmUgZmlyc3QgZHJhdyAqL1xufVxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZSxcbi5Db2RlTWlycm9yIHByZS5Db2RlTWlycm9yLWxpbmUtbGlrZSB7XG4gIC8qIFJlc2V0IHNvbWUgc3R5bGVzIHRoYXQgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgbWlnaHQgaGF2ZSBzZXQgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7IGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1mb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb250ZXh0dWFsO1xuICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb250ZXh0dWFsO1xufVxuLkNvZGVNaXJyb3Itd3JhcCBwcmUuQ29kZU1pcnJvci1saW5lLFxuLkNvZGVNaXJyb3Itd3JhcCBwcmUuQ29kZU1pcnJvci1saW5lLWxpa2Uge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xufVxuXG4uQ29kZU1pcnJvci1saW5lYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogMDsgYm90dG9tOiAwO1xuICB6LWluZGV4OiAwO1xufVxuXG4uQ29kZU1pcnJvci1saW5ld2lkZ2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAwLjFweDsgLyogRm9yY2Ugd2lkZ2V0IG1hcmdpbnMgdG8gc3RheSBpbnNpZGUgb2YgdGhlIGNvbnRhaW5lciAqL1xufVxuXG4uQ29kZU1pcnJvci13aWRnZXQge31cblxuLkNvZGVNaXJyb3ItcnRsIHByZSB7IGRpcmVjdGlvbjogcnRsOyB9XG5cbi5Db2RlTWlycm9yLWNvZGUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBGb3JjZSBjb250ZW50LWJveCBzaXppbmcgZm9yIHRoZSBlbGVtZW50cyB3aGVyZSB3ZSBleHBlY3QgaXQgKi9cbi5Db2RlTWlycm9yLXNjcm9sbCxcbi5Db2RlTWlycm9yLXNpemVyLFxuLkNvZGVNaXJyb3ItZ3V0dGVyLFxuLkNvZGVNaXJyb3ItZ3V0dGVycyxcbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLkNvZGVNaXJyb3ItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uQ29kZU1pcnJvci1jdXJzb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLkNvZGVNaXJyb3ItbWVhc3VyZSBwcmUgeyBwb3NpdGlvbjogc3RhdGljOyB9XG5cbmRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cbmRpdi5Db2RlTWlycm9yLWRyYWdjdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLkNvZGVNaXJyb3ItZm9jdXNlZCBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZDlkOWQ5OyB9XG4uQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2Q3ZDRmMDsgfVxuLkNvZGVNaXJyb3ItY3Jvc3NoYWlyIHsgY3Vyc29yOiBjcm9zc2hhaXI7IH1cbi5Db2RlTWlycm9yLWxpbmU6OnNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46OnNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XG4uQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46Oi1tb3otc2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46Oi1tb3otc2VsZWN0aW9uIHsgYmFja2dyb3VuZDogI2Q3ZDRmMDsgfVxuXG4uY20tc2VhcmNoaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgLjQpO1xufVxuXG4vKiBVc2VkIHRvIGZvcmNlIGEgYm9yZGVyIG1vZGVsIGZvciBhIG5vZGUgKi9cbi5jbS1mb3JjZS1ib3JkZXIgeyBwYWRkaW5nLXJpZ2h0OiAuMXB4OyB9XG5cbkBtZWRpYSBwcmludCB7XG4gIC8qIEhpZGUgdGhlIGN1cnNvciB3aGVuIHByaW50aW5nICovXG4gIC5Db2RlTWlycm9yIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4vKiBTZWUgaXNzdWUgIzI5MDEgKi9cbi5jbS10YWItd3JhcC1oYWNrOmFmdGVyIHsgY29udGVudDogJyc7IH1cblxuLyogSGVscCB1c2VycyB1c2UgbWFya3NlbGVjdGlvbiB0byBzYWZlbHkgc3R5bGUgdGV4dCBiYWNrZ3JvdW5kICovXG5zcGFuLkNvZGVNaXJyb3Itc2VsZWN0ZWR0ZXh0IHsgYmFja2dyb3VuZDogbm9uZTsgfVxuIiwiLyogQkFTSUNTICovXG4uQ29kZU1pcnJvciB7XG4gIC8qIFNldCBoZWlnaHQsIHdpZHRoLCBib3JkZXJzLCBhbmQgZ2xvYmFsIGZvbnQgcHJvcGVydGllcyBoZXJlICovXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi8qIFBBRERJTkcgKi9cbi5Db2RlTWlycm9yLWxpbmVzIHtcbiAgcGFkZGluZzogNHB4IDA7XG4gIC8qIFZlcnRpY2FsIHBhZGRpbmcgYXJvdW5kIGNvbnRlbnQgKi9cbn1cblxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZSxcbi5Db2RlTWlycm9yIHByZS5Db2RlTWlycm9yLWxpbmUtbGlrZSB7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICAvKiBIb3Jpem9udGFsIHBhZGRpbmcgb2YgY29udGVudCAqL1xufVxuXG4uQ29kZU1pcnJvci1zY3JvbGxiYXItZmlsbGVyLCAuQ29kZU1pcnJvci1ndXR0ZXItZmlsbGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIFRoZSBsaXR0bGUgc3F1YXJlIGJldHdlZW4gSCBhbmQgViBzY3JvbGxiYXJzICovXG59XG5cbi8qIEdVVFRFUiAqL1xuLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICBwYWRkaW5nOiAwIDNweCAwIDVweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM5OTk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5Db2RlTWlycm9yLWd1dHRlcm1hcmtlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4vKiBDVVJTT1IgKi9cbi5Db2RlTWlycm9yLWN1cnNvciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIFNob3duIHdoZW4gbW92aW5nIGluIGJpLWRpcmVjdGlvbmFsIHRleHQgKi9cbi5Db2RlTWlycm9yIGRpdi5Db2RlTWlycm9yLXNlY29uZGFyeWN1cnNvciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgc2lsdmVyO1xufVxuXG4uY20tZmF0LWN1cnNvciAuQ29kZU1pcnJvci1jdXJzb3Ige1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM3ZTc7XG59XG5cbi5jbS1mYXQtY3Vyc29yIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICB6LWluZGV4OiAxO1xufVxuXG4uY20tZmF0LWN1cnNvci1tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjU1LCAyMCwgMC41KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG59XG5cbi5jbS1hbmltYXRlLWZhdC1jdXJzb3Ige1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlNztcbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi8qIENhbiBzdHlsZSBjdXJzb3IgZGlmZmVyZW50IGluIG92ZXJ3cml0ZSAobm9uLWluc2VydCkgbW9kZSAqL1xuLmNtLXRhYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4uQ29kZU1pcnJvci1ydWxlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC01MHB4O1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5Db2RlTWlycm9yLXJ1bGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4vKiBERUZBVUxUIFRIRU1FICovXG4uY20tcy1kZWZhdWx0IC5jbS1oZWFkZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20tcXVvdGUge1xuICBjb2xvcjogIzA5MDtcbn1cblxuLmNtLW5lZ2F0aXZlIHtcbiAgY29sb3I6ICNkNDQ7XG59XG5cbi5jbS1wb3NpdGl2ZSB7XG4gIGNvbG9yOiAjMjkyO1xufVxuXG4uY20taGVhZGVyLCAuY20tc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbS1lbSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNtLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNtLXN0cmlrZXRocm91Z2gge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20ta2V5d29yZCB7XG4gIGNvbG9yOiAjNzA4O1xufVxuXG4uY20tcy1kZWZhdWx0IC5jbS1hdG9tIHtcbiAgY29sb3I6ICMyMTk7XG59XG5cbi5jbS1zLWRlZmF1bHQgLmNtLW51bWJlciB7XG4gIGNvbG9yOiAjMTY0O1xufVxuXG4uY20tcy1kZWZhdWx0IC5jbS1kZWYge1xuICBjb2xvcjogIzAwZjtcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20tdmFyaWFibGUtMiB7XG4gIGNvbG9yOiAjMDVhO1xufVxuXG4uY20tcy1kZWZhdWx0IC5jbS12YXJpYWJsZS0zLCAuY20tcy1kZWZhdWx0IC5jbS10eXBlIHtcbiAgY29sb3I6ICMwODU7XG59XG5cbi5jbS1zLWRlZmF1bHQgLmNtLWNvbW1lbnQge1xuICBjb2xvcjogI2E1MDtcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20tc3RyaW5nIHtcbiAgY29sb3I6ICNhMTE7XG59XG5cbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZy0yIHtcbiAgY29sb3I6ICNmNTA7XG59XG5cbi5jbS1zLWRlZmF1bHQgLmNtLW1ldGEge1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20tcXVhbGlmaWVyIHtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5jbS1zLWRlZmF1bHQgLmNtLWJ1aWx0aW4ge1xuICBjb2xvcjogIzMwYTtcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20tYnJhY2tldCB7XG4gIGNvbG9yOiAjOTk3O1xufVxuXG4uY20tcy1kZWZhdWx0IC5jbS10YWcge1xuICBjb2xvcjogIzE3MDtcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20tYXR0cmlidXRlIHtcbiAgY29sb3I6ICMwMGM7XG59XG5cbi5jbS1zLWRlZmF1bHQgLmNtLWhyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5jbS1zLWRlZmF1bHQgLmNtLWxpbmsge1xuICBjb2xvcjogIzAwYztcbn1cblxuLmNtLXMtZGVmYXVsdCAuY20tZXJyb3Ige1xuICBjb2xvcjogI2YwMDtcbn1cblxuLmNtLWludmFsaWRjaGFyIHtcbiAgY29sb3I6ICNmMDA7XG59XG5cbi5Db2RlTWlycm9yLWNvbXBvc2luZyB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbn1cblxuLyogRGVmYXVsdCBzdHlsZXMgZm9yIGNvbW1vbiBhZGRvbnMgKi9cbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQge1xuICBjb2xvcjogIzBiMDtcbn1cblxuZGl2LkNvZGVNaXJyb3Igc3Bhbi5Db2RlTWlycm9yLW5vbm1hdGNoaW5nYnJhY2tldCB7XG4gIGNvbG9yOiAjYTIyO1xufVxuXG4uQ29kZU1pcnJvci1tYXRjaGluZ3RhZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTAsIDAsIDAuMyk7XG59XG5cbi5Db2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNlOGYyZmY7XG59XG5cbi8qIFNUT1AgKi9cbi8qIFRoZSByZXN0IG9mIHRoaXMgZmlsZSBjb250YWlucyBzdHlsZXMgcmVsYXRlZCB0byB0aGUgbWVjaGFuaWNzIG9mXG4gICB0aGUgZWRpdG9yLiBZb3UgcHJvYmFibHkgc2hvdWxkbid0IHRvdWNoIHRoZW0uICovXG4uQ29kZU1pcnJvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5Db2RlTWlycm9yLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgLyogVGhpbmdzIHdpbGwgYnJlYWsgaWYgdGhpcyBpcyBvdmVycmlkZGVuICovXG4gIC8qIDUwcHggaXMgdGhlIG1hZ2ljIG1hcmdpbiB1c2VkIHRvIGhpZGUgdGhlIGVsZW1lbnQncyByZWFsIHNjcm9sbGJhcnMgKi9cbiAgLyogU2VlIG92ZXJmbG93OiBoaWRkZW4gaW4gLkNvZGVNaXJyb3IgKi9cbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gIG1hcmdpbi1yaWdodDogLTUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qIFByZXZlbnQgZHJhZ2dpbmcgZnJvbSBoaWdobGlnaHRpbmcgdGhlIGVsZW1lbnQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uQ29kZU1pcnJvci1zaXplciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vKiBUaGUgZmFrZSwgdmlzaWJsZSBzY3JvbGxiYXJzLiBVc2VkIHRvIGZvcmNlIHJlZHJhdyBkdXJpbmcgc2Nyb2xsaW5nXG4gICBiZWZvcmUgYWN0dWFsIHNjcm9sbGluZyBoYXBwZW5zLCB0aHVzIHByZXZlbnRpbmcgc2hha2luZyBhbmRcbiAgIGZsaWNrZXJpbmcgYXJ0aWZhY3RzLiAqL1xuLkNvZGVNaXJyb3ItdnNjcm9sbGJhciwgLkNvZGVNaXJyb3ItaHNjcm9sbGJhciwgLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciwgLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLkNvZGVNaXJyb3ItdnNjcm9sbGJhciB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uQ29kZU1pcnJvci1oc2Nyb2xsYmFyIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5Db2RlTWlycm9yLWd1dHRlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMztcbn1cblxuLkNvZGVNaXJyb3ItZ3V0dGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xufVxuXG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLkNvZGVNaXJyb3ItZ3V0dGVyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA0O1xufVxuXG4uQ29kZU1pcnJvci1ndXR0ZXItZWx0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLkNvZGVNaXJyb3ItbGluZXMge1xuICBjdXJzb3I6IHRleHQ7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgLyogcHJldmVudHMgY29sbGFwc2luZyBiZWZvcmUgZmlyc3QgZHJhdyAqL1xufVxuXG4uQ29kZU1pcnJvciBwcmUuQ29kZU1pcnJvci1saW5lLFxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZS1saWtlIHtcbiAgLyogUmVzZXQgc29tZSBzdHlsZXMgdGhhdCB0aGUgcmVzdCBvZiB0aGUgcGFnZSBtaWdodCBoYXZlIHNldCAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XG59XG5cbi5Db2RlTWlycm9yLXdyYXAgcHJlLkNvZGVNaXJyb3ItbGluZSxcbi5Db2RlTWlycm9yLXdyYXAgcHJlLkNvZGVNaXJyb3ItbGluZS1saWtlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbn1cblxuLkNvZGVNaXJyb3ItbGluZWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuLkNvZGVNaXJyb3ItbGluZXdpZGdldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogMC4xcHg7XG4gIC8qIEZvcmNlIHdpZGdldCBtYXJnaW5zIHRvIHN0YXkgaW5zaWRlIG9mIHRoZSBjb250YWluZXIgKi9cbn1cblxuLkNvZGVNaXJyb3ItcnRsIHByZSB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uQ29kZU1pcnJvci1jb2RlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogRm9yY2UgY29udGVudC1ib3ggc2l6aW5nIGZvciB0aGUgZWxlbWVudHMgd2hlcmUgd2UgZXhwZWN0IGl0ICovXG4uQ29kZU1pcnJvci1zY3JvbGwsXG4uQ29kZU1pcnJvci1zaXplcixcbi5Db2RlTWlycm9yLWd1dHRlcixcbi5Db2RlTWlycm9yLWd1dHRlcnMsXG4uQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5Db2RlTWlycm9yLW1lYXN1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLkNvZGVNaXJyb3ItY3Vyc29yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLkNvZGVNaXJyb3ItbWVhc3VyZSBwcmUge1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG5kaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbmRpdi5Db2RlTWlycm9yLWRyYWdjdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLkNvZGVNaXJyb3ItZm9jdXNlZCBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLkNvZGVNaXJyb3Itc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xufVxuXG4uQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2Q3ZDRmMDtcbn1cblxuLkNvZGVNaXJyb3ItY3Jvc3NoYWlyIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5Db2RlTWlycm9yLWxpbmU6OnNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46OnNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZDdkNGYwO1xufVxuXG4uQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46Oi1tb3otc2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2Q3ZDRmMDtcbn1cblxuLmNtLXNlYXJjaGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNCk7XG59XG5cbi8qIFVzZWQgdG8gZm9yY2UgYSBib3JkZXIgbW9kZWwgZm9yIGEgbm9kZSAqL1xuLmNtLWZvcmNlLWJvcmRlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMXB4O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAvKiBIaWRlIHRoZSBjdXJzb3Igd2hlbiBwcmludGluZyAqL1xuICAuQ29kZU1pcnJvciBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbi8qIFNlZSBpc3N1ZSAjMjkwMSAqL1xuLmNtLXRhYi13cmFwLWhhY2s6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4vKiBIZWxwIHVzZXJzIHVzZSBtYXJrc2VsZWN0aW9uIHRvIHNhZmVseSBzdHlsZSB0ZXh0IGJhY2tncm91bmQgKi9cbnNwYW4uQ29kZU1pcnJvci1zZWxlY3RlZHRleHQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5uZ3gtbWFya2Rvd24tZWRpdG9yIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5neC1tYXJrZG93bi1lZGl0b3ItdG9vbGJhciAubWF0LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogM3B4IDJweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubmd4LW1hcmtkb3duLWVkaXRvci10b29sYmFyIC5tYXQtYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1jb2xvcjogZGFya2dyYXk7XG59XG4ubmd4LW1hcmtkb3duLWVkaXRvci10b29sYmFyIC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWluLXdpZHRoOiAzZW07XG4gIHdpZHRoOiAzZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAtMTBweCAzcHggLTE1cHggM3B4O1xufVxuLm5neC1tYXJrZG93bi1lZGl0b3ItdG9vbGJhciAubWF0LWZvcm0tZmllbGQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uZ3gtbWFya2Rvd24tZWRpdG9yLXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuLm5neC1tYXJrZG93bi1lZGl0b3ItdG9vbGJhciAubWRlLXRvb2xiYXItc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2dyYXk7XG59XG4ubmd4LW1hcmtkb3duLWVkaXRvci10b29sYmFyIC5tYXQtYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5uZ3gtbWFya2Rvd24tZWRpdG9yLXRvb2xiYXIgLm1hdC1idXR0b24gLm1hdC1pY29uW2RhdGEtbWF0LWljb24tbmFtZT1jb2x1bW5dLCAubmd4LW1hcmtkb3duLWVkaXRvci10b29sYmFyIC5tYXQtYnV0dG9uIC5tYXQtaWNvbltkYXRhLW1hdC1pY29uLW5hbWU9ZmlsZV9jb2RlXSwgLm5neC1tYXJrZG93bi1lZGl0b3ItdG9vbGJhciAubWF0LWJ1dHRvbiAubWF0LWljb25bZGF0YS1tYXQtaWNvbi1uYW1lPXVwbG9hZF0ge1xuICBoZWlnaHQ6IDE2cHg7XG59XG4ubmd4LW1hcmtkb3duLWVkaXRvci10b29sYmFyIC5tYXQtYnV0dG9uIC5tYXQtaWNvbltkYXRhLW1hdC1pY29uLW5hbWU9Zm9ybWF0X2hlYWRpbmddIHtcbiAgaGVpZ2h0OiAxM3B4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLm5neC1tYXJrZG93bi1lZGl0b3ItdG9vbGJhciAubWF0LWJ1dHRvbiAubWF0LWljb25bZGF0YS1tYXQtaWNvbi1uYW1lPWZvcm1hdF9oZWFkaW5nX2luY3JlYXNlXSwgLm5neC1tYXJrZG93bi1lZGl0b3ItdG9vbGJhciAubWF0LWJ1dHRvbiAubWF0LWljb25bZGF0YS1tYXQtaWNvbi1uYW1lPWZvcm1hdF9oZWFkaW5nX2RlY3JlYXNlXSB7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5uZ3gtbWFya2Rvd24tZWRpdG9yLXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkIC5tYXQtaWNvbltkYXRhLW1hdC1pY29uLW5hbWU9Zm9ybWF0X2hlYWRpbmddIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLm5neC1tYXJrZG93bi1lZGl0b3ItdG9vbGJhciBzdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubmd4LW1hcmtkb3duLWVkaXRvci13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogMSAxIDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubmd4LW1hcmtkb3duLWVkaXRvci13cmFwcGVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5neC1tYXJrZG93bi1lZGl0b3ItdGV4dC1lZGl0b3Ige1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5uZ3gtbWFya2Rvd24tZWRpdG9yLXRleHQtZWRpdG9yIC5Db2RlTWlycm9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ubmd4LW1hcmtkb3duLWVkaXRvci10ZXh0LWVkaXRvciAuQ29kZU1pcnJvciAuQ29kZU1pcnJvci1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5uZ3gtbWFya2Rvd24tZWRpdG9yLXByZXZpZXcge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLm5neC1tYXJrZG93bi1lZGl0b3ItcHJldmlldyA+IC5wcmV2aWV3LXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5uZ3gtbWFya2Rvd24tZWRpdG9yLXN0YXR1c2JhciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm5neC1tYXJrZG93bi1lZGl0b3Itc3RhdHVzYmFyICoge1xuICBtYXJnaW46IDAgN3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmd4LW1hcmtkb3duLWVkaXRvci1zdGF0dXNiYXIgLm1kZS1zdGF0dXNiYXItc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwIDRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGRhcmtncmF5O1xufVxuXG5uZ3gtbWFya2Rvd24tZWRpdG9yLmRlZmF1bHQgLm5neC1tYXJrZG93bi1lZGl0b3ItbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxubmd4LW1hcmtkb3duLWVkaXRvci5kZWZhdWx0IC5uZ3gtbWFya2Rvd24tZWRpdG9yLXdyYXBwZXIgPiAqIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbm5neC1tYXJrZG93bi1lZGl0b3IuZGVmYXVsdCAubmd4LW1hcmtkb3duLWVkaXRvci13cmFwcGVyID4gOmZpcnN0LWNoaWxkLFxubmd4LW1hcmtkb3duLWVkaXRvci5kZWZhdWx0IC5uZ3gtbWFya2Rvd24tZWRpdG9yLXdyYXBwZXIgOmZpcnN0LWNoaWxkW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0gKyAqIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5uZ3gtbWFya2Rvd24tZWRpdG9yLmRlZmF1bHQgLm5neC1tYXJrZG93bi1lZGl0b3Itd3JhcHBlciA+IDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbm5neC1tYXJrZG93bi1lZGl0b3IuZGVmYXVsdCAubmd4LW1hcmtkb3duLWVkaXRvci13cmFwcGVyIC5Db2RlTWlycm9yIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxubmd4LW1hcmtkb3duLWVkaXRvci5kZWZhdWx0IC5uZ3gtbWFya2Rvd24tZWRpdG9yLXdyYXBwZXIgLkNvZGVNaXJyb3IgLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHB4KTtcbn1cbm5neC1tYXJrZG93bi1lZGl0b3IuZGVmYXVsdCAubmd4LW1hcmtkb3duLWVkaXRvci13cmFwcGVyIC5Db2RlTWlycm9yLkNvZGVNaXJyb3ItbGluZU51bWJlcnMgLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uQ29kZU1pcnJvci5jbS1zLXByZXZpZXctbGlrZS1tYXJrdXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbn1cbi5Db2RlTWlycm9yLmNtLXMtcHJldmlldy1saWtlLW1hcmt1cCAuY20taGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5Db2RlTWlycm9yLmNtLXMtcHJldmlldy1saWtlLW1hcmt1cCAuY20taGVhZGVyLmNtLWhlYWRlci0xIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4uQ29kZU1pcnJvci5jbS1zLXByZXZpZXctbGlrZS1tYXJrdXAgLmNtLWhlYWRlci5jbS1oZWFkZXItMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uQ29kZU1pcnJvci5jbS1zLXByZXZpZXctbGlrZS1tYXJrdXAgLmNtLWhlYWRlci5jbS1oZWFkZXItMyB7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xufVxuLkNvZGVNaXJyb3IuY20tcy1wcmV2aWV3LWxpa2UtbWFya3VwIC5jbS1oZWFkZXIuY20taGVhZGVyLTQge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5Db2RlTWlycm9yLmNtLXMtcHJldmlldy1saWtlLW1hcmt1cCAuY20taGVhZGVyLmNtLWhlYWRlci01IHtcbiAgZm9udC1zaXplOiAwLjgzZW07XG59XG4uQ29kZU1pcnJvci5jbS1zLXByZXZpZXctbGlrZS1tYXJrdXAgLmNtLWhlYWRlci5jbS1oZWFkZXItNiB7XG4gIGZvbnQtc2l6ZTogMC42N2VtO1xufVxuLkNvZGVNaXJyb3IuY20tcy1wcmV2aWV3LWxpa2UtbWFya3VwIC5jbS1jb2RlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbi5Db2RlTWlycm9yLmNtLXMtcHJldmlldy1saWtlLW1hcmt1cCAuY20tbGluay10ZXh0IHtcbiAgY29sb3I6ICMwMzY2ZDY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLkNvZGVNaXJyb3IuY20tcy1wcmV2aWV3LWxpa2UtbWFya3VwIC5jbS1saW5rLWhyZWYge1xuICBjb2xvcjogI2FmYWZhZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "7uov":
/*!******************************************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/lib/services/keybindings.service.ts ***!
  \******************************************************************************/
/*! exports provided: Keybindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keybindings", function() { return Keybindings; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



/**
 * An injectable hotkeys service to add keybindings.
 */
class Keybindings {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }
    /**
     * Adds an _keydown_ event listener to the Angular `EventManager` with the specified
     * `keys`. The listener is applied to specified `element`. Returns an RxJS observable
     * of the keyboard event.
     *
     * @param element The HTML element to which the keybinding shall be applied to.
     * @param keys The key combination which shall trigger the event.
     */
    addKeybinding(element, keys) {
        const event = `keydown.${keys}`;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const handler = (e) => {
                e.preventDefault();
                observer.next(e);
            };
            const dispose = this.eventManager.addEventListener(element, event, handler);
            return () => {
                dispose();
            };
        });
    }
}
Keybindings.ɵfac = function Keybindings_Factory(t) { return new (t || Keybindings)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"])); };
Keybindings.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Keybindings, factory: Keybindings.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "86o2":
/*!**************************************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/lib/services/toolbar.service.ts ***!
  \**************************************************************************/
/*! exports provided: ToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarService", function() { return ToolbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ToolbarService {
    constructor() {
        /**
         * The default toolbar setup.
         */
        this.DEFAULT_TOOLBAR = [
            'setHeadingLevel',
            'toggleHeadingLevel',
            'increaseHeadingLevel',
            'decreaseHeadingLevel',
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
            'insertHorizontalRule',
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
            'undo',
            'redo',
            '|',
            'openMarkdownGuide',
        ];
    }
    /**
     * The default configurations of all items
     */
    get DEFAULT_ITEMS() {
        return this._defaultItems;
    }
    /**
     * Returns the default configuration of the item with the specified name.
     * Returns `undefined`, if no item with the specified name can be found.
     */
    getDefaultItem(itemName) {
        return this.DEFAULT_ITEMS.find((i) => i.name === itemName);
    }
    /**
     * Defines the default toolbar items.
     * Cannot be done statically as the actions depend on the `MarkdownEditorComponent` instance.
     */
    defineDefaultItems(ngxMde) {
        const defaultItems = [
            {
                name: 'setHeadingLevel',
                action: (level) => ngxMde.mde.setHeadingLevel(level),
                shortcut: 'Shift-Ctrl-Alt-H',
                isActive: () => {
                    if (!ngxMde.mde.hasTokenAtCursorPos('header'))
                        return 0;
                    const token = ngxMde.mde.cm.getTokenAt(ngxMde.mde.getCursorPos());
                    return token.state.base.header;
                },
                tooltip: 'Set Heading Level',
                icon: {
                    format: 'svgString',
                    iconName: 'format_heading',
                    svgHtmlString: FORMAT_HEADING,
                },
                disableOnPreview: true,
            },
            {
                name: 'toggleHeadingLevel',
                action: () => ngxMde.mde.increaseHeadingLevel(),
                tooltip: 'Heading',
                shortcut: 'Alt-H',
                icon: {
                    format: 'svgString',
                    iconName: 'format_heading',
                    svgHtmlString: FORMAT_HEADING,
                },
                disableOnPreview: true,
            },
            {
                name: 'increaseHeadingLevel',
                action: () => ngxMde.mde.increaseHeadingLevel(),
                tooltip: 'Smaller Heading',
                icon: {
                    format: 'svgString',
                    iconName: 'format_heading_decrease',
                    svgHtmlString: FORMAT_HEADING_SMALLER,
                },
                disableOnPreview: true,
            },
            {
                name: 'decreaseHeadingLevel',
                action: () => ngxMde.mde.decreaseHeadingLevel(),
                tooltip: 'Bigger Heading',
                icon: {
                    format: 'svgString',
                    iconName: 'format_heading_increase',
                    svgHtmlString: FORMAT_HEADING_BIGGER,
                },
                disableOnPreview: true,
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
                disableOnPreview: true,
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
                disableOnPreview: true,
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
                disableOnPreview: true,
            },
            {
                name: 'toggleUnorderedList',
                action: () => ngxMde.mde.toggleUnorderedList(),
                isActive: () => this.isListTypeActive(ngxMde, 'unordered'),
                tooltip: 'Toggle Unordered List',
                icon: {
                    format: 'material',
                    iconName: 'format_list_bulleted',
                },
                disableOnPreview: true,
            },
            {
                name: 'toggleOrderedList',
                action: () => ngxMde.mde.toggleOrderedList(),
                isActive: () => this.isListTypeActive(ngxMde, 'ordered'),
                tooltip: 'Toggle Ordered List',
                icon: {
                    format: 'material',
                    iconName: 'format_list_numbered',
                },
                disableOnPreview: true,
            },
            {
                name: 'toggleCheckList',
                action: () => ngxMde.mde.toggleCheckList(),
                isActive: () => this.isListTypeActive(ngxMde, 'check'),
                tooltip: 'Toggle Checklist',
                icon: {
                    format: 'material',
                    iconName: 'check_box',
                },
                disableOnPreview: true,
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
                disableOnPreview: true,
            },
            {
                name: 'toggleInlineCode',
                action: () => ngxMde.mde.toggleInlineCode(),
                isActive: () => this.isCodeTypeActive(ngxMde, 'inline'),
                tooltip: 'Toggle Inline Code',
                icon: {
                    format: 'material',
                    iconName: 'code',
                },
                disableOnPreview: true,
            },
            {
                name: 'insertCodeBlock',
                action: () => ngxMde.mde.insertCodeBlock(),
                isActive: () => this.isCodeTypeActive(ngxMde, 'block'),
                tooltip: 'Insert Code Block',
                icon: {
                    format: 'svgString',
                    iconName: 'file_code',
                    svgHtmlString: FILE_CODE,
                },
                disableOnPreview: true,
            },
            {
                name: 'insertLink',
                action: () => ngxMde.mde.insertLink(),
                isActive: () => (ngxMde.mde.hasTokenAtCursorPos('link-text') || ngxMde.mde.hasTokenAtCursorPos('link')) &&
                    !ngxMde.mde.hasTokenAtCursorPos('image'),
                tooltip: 'Insert Link',
                icon: {
                    format: 'material',
                    iconName: 'insert_link',
                },
                disableOnPreview: true,
            },
            {
                name: 'insertImageLink',
                action: () => ngxMde.mde.insertImageLink(),
                isActive: () => ngxMde.mde.hasTokenAtCursorPos('image'),
                tooltip: 'Insert Image Link',
                icon: {
                    format: 'material',
                    iconName: 'image',
                },
                disableOnPreview: true,
            },
            {
                name: 'insertTable',
                action: () => ngxMde.mde.insertTable(),
                tooltip: 'Insert Table',
                icon: {
                    format: 'material',
                    iconName: 'table_chart',
                },
                disableOnPreview: true,
            },
            {
                name: 'insertHorizontalRule',
                action: () => ngxMde.mde.insertHorizontalRule(),
                isActive: () => ngxMde.mde.hasTokenAtCursorPos('hr'),
                tooltip: 'Insert Horizontal Rule',
                icon: {
                    format: 'material',
                    iconName: 'horizontal_rule',
                },
                disableOnPreview: true,
            },
            {
                name: 'toggleRichTextMode',
                action: () => ngxMde.mde.toggleRichTextMode(),
                isActive: () => {
                    const mode = ngxMde.mde.cm.getOption('mode');
                    return mode === 'gfm' || mode.name === 'gfm';
                },
                tooltip: 'Toggle Rich-Text Mode',
                icon: {
                    format: 'material',
                    iconName: 'highlight',
                },
                disableOnPreview: true,
            },
            {
                name: 'formatContent',
                action: () => ngxMde.mde.formatContent(),
                tooltip: 'Format Content',
                icon: {
                    format: 'material',
                    iconName: 'format_paint',
                },
                disableOnPreview: true,
            },
            {
                name: 'downloadAsFile',
                action: () => ngxMde.mde.downloadAsFile(),
                tooltip: 'Download As File',
                icon: {
                    format: 'material',
                    iconName: 'get_app',
                },
                disableOnPreview: true,
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
                disableOnPreview: true,
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
                disableOnPreview: false,
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
                disableOnPreview: false,
            },
            {
                name: 'undo',
                action: () => ngxMde.mde.undo(),
                tooltip: 'Undo',
                icon: {
                    format: 'material',
                    iconName: 'undo',
                },
                disableOnPreview: true,
            },
            {
                name: 'redo',
                action: () => ngxMde.mde.redo(),
                shortcut: 'Ctrl-S',
                tooltip: 'Redo',
                icon: {
                    format: 'material',
                    iconName: 'redo',
                },
                disableOnPreview: true,
            },
            {
                name: 'openMarkdownGuide',
                action: () => ngxMde.mde.openMarkdownGuide(),
                tooltip: 'Open Markdown Guide',
                icon: {
                    format: 'material',
                    iconName: 'help',
                },
                disableOnPreview: false,
            },
            // Normalize separator item to reduce type complexity in template.
            // Effectively, only the `name` property is needed.
            {
                name: '|',
                action: () => { },
                tooltip: '',
                icon: { format: 'material', iconName: '' },
                disableOnPreview: false,
            },
        ];
        this._defaultItems = defaultItems;
    }
    isListTypeActive(ngxMde, listType) {
        const isList = ngxMde.mde.hasTokenAtCursorPos('list');
        if (!isList)
            return false;
        const selections = ngxMde.mde.cm.listSelections();
        let isListType = false;
        if (selections === null || selections === void 0 ? void 0 : selections.length) {
            const lineNumber = selections[selections.length - 1].from().line;
            isListType = ngxMde.mde.getListTypeOfLine(lineNumber) === listType;
        }
        return isListType;
    }
    isCodeTypeActive(ngxMde, codeType) {
        const isCode = ngxMde.mde.hasTokenAtCursorPos('code');
        if (!isCode)
            return false;
        const token = ngxMde.mde.cm.getTokenAt(ngxMde.mde.getCursorPos());
        if (codeType === 'block') {
            return token.state.overlay.codeBlock;
        }
        else {
            return token.state.overlay.code;
        }
    }
}
ToolbarService.ɵfac = function ToolbarService_Factory(t) { return new (t || ToolbarService)(); };
ToolbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToolbarService, factory: ToolbarService.ɵfac });
/* eslint-disable max-len */
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
const FORMAT_HEADING_BIGGER = `
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
    viewBox="0 0 720 720"
    licenseUrl="https://fontawesome.com/license"
  >
    <path
      fill="currentColor"
      d="M448 200v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V392H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V200H32a16 16 0 0 1-16-16V152a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V200h-32a16 16 0 0 1-16-16V152a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"
    ></path>
    <path
      fill="currentColor"
      d="M620 285 l87 150 h-174 z"
    ></path>
  </svg>
`;
const FORMAT_HEADING_SMALLER = `
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
    viewBox="0 0 720 720"
    licenseUrl="https://fontawesome.com/license"
  >
    <path
      fill="currentColor"
      d="M448 200v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V392H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V200H32a16 16 0 0 1-16-16V152a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V200h-32a16 16 0 0 1-16-16V152a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"
    ></path>
    <path
      fill="currentColor"
      d="M620 435 l87 -150 h-174 z"
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


/***/ }),

/***/ "H5HQ":
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.module.ts ***!
  \*********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var projects_ngx_markdown_editor_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-markdown-editor/src/public-api */ "NDPZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "NO+I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], projects_ngx_markdown_editor_src_public_api__WEBPACK_IMPORTED_MODULE_1__["MarkdownEditorModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], projects_ngx_markdown_editor_src_public_api__WEBPACK_IMPORTED_MODULE_1__["MarkdownEditorModule"]] }); })();


/***/ }),

/***/ "MRlX":
/*!**************************************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/lib/types/observable-emitter.ts ***!
  \**************************************************************************/
/*! exports provided: ObservableEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableEmitter", function() { return ObservableEmitter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 * An event emitter that is able to transform an RxJS observable
 * into an Angular event.
 */
class ObservableEmitter extends _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
    /**
     * Subscribes to the specified RxJS observable and emits an event
     * containing the observed value. Unsubscribes the passed observable
     * when the event is unsubscribed.
     */
    emitObservable(o) {
        const subscription = o.subscribe((x) => this.emit(x));
        this.subscribe(() => { }, undefined, () => subscription.unsubscribe());
    }
}


/***/ }),

/***/ "NDPZ":
/*!********************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/public-api.ts ***!
  \********************************************************/
/*! exports provided: MarkdownEditorComponent, MarkdownEditorModule, fromCmEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_component_markdown_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/component/markdown-editor.component */ "7kkH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorComponent", function() { return _lib_component_markdown_editor_component__WEBPACK_IMPORTED_MODULE_0__["MarkdownEditorComponent"]; });

/* harmony import */ var _lib_component_markdown_editor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/component/markdown-editor.module */ "OB9s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorModule", function() { return _lib_component_markdown_editor_module__WEBPACK_IMPORTED_MODULE_1__["MarkdownEditorModule"]; });

/* harmony import */ var _lib_util_from_cm_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/util/from-cm-event */ "hqX3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromCmEvent", function() { return _lib_util_from_cm_event__WEBPACK_IMPORTED_MODULE_2__["fromCmEvent"]; });

/*
 * Public API Surface of ngx-markdown-editor
 */





/***/ }),

/***/ "NO+I":
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var projects_ngx_markdown_editor_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/ngx-markdown-editor/src/public-api */ "NDPZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_markdown_editor_src_lib_component_markdown_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngx-markdown-editor/src/lib/component/markdown-editor.component */ "7kkH");





class AppComponent {
    constructor() {
        this.toolbarButtons = [
            {
                name: 'toggleBold',
                shortcut: 'Alt-M',
                icon: { format: 'material', iconName: 'star' },
            },
        ];
        this.data = '**Initial content**';
        this.content = '';
        this.statusbarItems = [
            'characterCount',
            '|',
            {
                name: 'cursorPosition',
                value: {
                    de: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('Deutsch'),
                    default: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.clientX.toString())),
                },
            },
            '|',
        ];
        this.options = {
            markupThemes: ['preview-like-markup'],
        };
        this.materialStyle = 'legacy';
        this.disabled = false;
        this.showToolbar = true;
        this.showStatusbar = true;
    }
    test() {
        this.ngxMde.mde.setContent('Initial _Markdown_ content...');
    }
    onContentChange(event) {
        this.content = event.instance.getValue();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](projects_ngx_markdown_editor_src_public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownEditorComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ngxMde = _t.first);
    } }, decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ngx Markdown Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ngx-markdown-editor");
    } }, directives: [_ngx_markdown_editor_src_lib_component_markdown_editor_component__WEBPACK_IMPORTED_MODULE_4__["MarkdownEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "OB9s":
/*!**********************************************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/lib/component/markdown-editor.module.ts ***!
  \**********************************************************************************/
/*! exports provided: MarkdownEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorModule", function() { return MarkdownEditorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _markdown_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./markdown-editor.component */ "7kkH");














class MarkdownEditorModule {
    static forRoot(config) {
        var _a, _b, _c;
        return {
            ngModule: MarkdownEditorModule,
            providers: [
                ((_a = config === null || config === void 0 ? void 0 : config.previewConfig) === null || _a === void 0 ? void 0 : _a.markedOptions) || [],
                {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_10__["SECURITY_CONTEXT"],
                    useValue: (_c = (_b = config === null || config === void 0 ? void 0 : config.previewConfig) === null || _b === void 0 ? void 0 : _b.sanitize) !== null && _c !== void 0 ? _c : _angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML,
                },
            ],
        };
    }
    static forChild() {
        return {
            ngModule: MarkdownEditorModule,
        };
    }
}
MarkdownEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MarkdownEditorModule });
MarkdownEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MarkdownEditorModule_Factory(t) { return new (t || MarkdownEditorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_10__["MarkdownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarkdownEditorModule, { declarations: [_markdown_editor_component__WEBPACK_IMPORTED_MODULE_11__["MarkdownEditorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_10__["MarkdownModule"]], exports: [_markdown_editor_component__WEBPACK_IMPORTED_MODULE_11__["MarkdownEditorComponent"]] }); })();


/***/ }),

/***/ "ZcuK":
/*!*******************************************************!*\
  !*** ./projects/demo/src/environments/environment.ts ***!
  \*******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "hqX3":
/*!********************************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/lib/util/from-cm-event.ts ***!
  \********************************************************************/
/*! exports provided: fromCmEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCmEvent", function() { return fromCmEvent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

/**
 * Transforms a _CodeMirror_ event to an RxJS observable.
 *
 * @param cm the `CodeMirror.Editor` instance of which the event shall be observed
 * @param eventName the name of a _CodeMirror_ event
 */
function fromCmEvent(cm, eventName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
        let handler;
        switch (eventName) {
            case 'change':
                handler = (...args) => subscriber.next({ instance: args[0], changeObj: args[1] });
                break;
            case 'changes':
                handler = (...args) => subscriber.next({ instance: args[0], changes: args[1] });
                break;
            case 'beforeChange':
                handler = (...args) => subscriber.next({ instance: args[0], changeObj: args[1] });
                break;
            case 'cursorActivity':
                handler = (...args) => subscriber.next({ instance: args[0] });
                break;
            case 'keyHandled':
                handler = (...args) => subscriber.next({ instance: args[0], name: args[1], event: args[2] });
                break;
            case 'inputRead':
                handler = (...args) => subscriber.next({ instance: args[0], changeObj: args[1] });
                break;
            case 'electricInput':
                handler = (...args) => subscriber.next({ instance: args[0], line: args[1] });
                break;
            case 'beforeSelectionChange':
                handler = (...args) => subscriber.next({ instance: args[0], obj: args[1] });
                break;
            case 'viewportChange':
                handler = (...args) => subscriber.next({ instance: args[0], from: args[1], to: args[2] });
                break;
            case 'swapDoc':
                handler = (...args) => subscriber.next({ instance: args[0], oldDoc: args[1] });
                break;
            case 'gutterClick':
                handler = (...args) => subscriber.next({ instance: args[0], line: args[1], gutter: args[2], clickEvent: args[3] });
                break;
            case 'gutterContextMenu':
                handler = (...args) => subscriber.next({ instance: args[0], line: args[1], gutter: args[2], contextMenu: args[3] });
                break;
            case 'focus':
                handler = (...args) => subscriber.next({ instance: args[0], event: args[1] });
                break;
            case 'blur':
                handler = (...args) => subscriber.next({ instance: args[0], event: args[1] });
                break;
            case 'scroll':
                handler = (...args) => subscriber.next({ instance: args[0] });
                break;
            case 'refresh':
                handler = (...args) => subscriber.next({ instance: args[0] });
                break;
            case 'optionChange':
                handler = (...args) => subscriber.next({ instance: args[0], option: args[1] });
                break;
            case 'scrollCursorIntoView':
                handler = (...args) => subscriber.next({ instance: args[0], event: args[1] });
                break;
            case 'update':
                handler = (...args) => subscriber.next({ instance: args[0] });
                break;
            case 'renderLine':
                handler = (...args) => subscriber.next({ instance: args[0], line: args[1], element: args[2] });
                break;
            case 'overwriteToggle':
                handler = (...args) => subscriber.next({ instance: args[0], overwrite: args[1] });
                break;
            default:
                handler = (...args) => subscriber.next({ instance: args[0], event: args[1] });
        }
        if (cm) {
            cm.on(eventName, handler);
            return () => cm.off(eventName, handler);
        }
        subscriber.error(new Error('CodeMirror instance is undefined'));
        return;
    });
}


/***/ }),

/***/ "mDhk":
/*!****************************************************************************!*\
  !*** ./projects/ngx-markdown-editor/src/lib/services/statusbar.service.ts ***!
  \****************************************************************************/
/*! exports provided: StatusbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarService", function() { return StatusbarService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _util_from_cm_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/from-cm-event */ "hqX3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class StatusbarService {
    constructor() {
        /**
         * The default statusbar setup.
         */
        this.DEFAULT_STATUSBAR = ['wordCount', 'characterCount', '|', 'cursorPosition'];
    }
    /**
     * The default configurations of all items.
     */
    get DEFAULT_ITEMS() {
        return this._defaultItems;
    }
    /**
     * Returns the default configuration of the item with the specified name.
     * Returns `undefined`, if no item with the specified name can be found.
     */
    getDefaultItem(itemName) {
        return this.DEFAULT_ITEMS.find((i) => i.name === itemName);
    }
    /**
     * Defines the default statusbar items.
     * Cannot be done statically as the values depend on the `MarkdownEditor` instance.
     */
    defineDefaultItems(mde) {
        const defaultItems = [
            {
                name: 'wordCount',
                value: Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_2__["fromCmEvent"])(mde.cm, 'changes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => 'Words: ' + mde.getWordCount().toString())),
            },
            {
                name: 'characterCount',
                value: Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_2__["fromCmEvent"])(mde.cm, 'changes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => 'Characters: ' + mde.getCharacterCount().toString())),
            },
            {
                name: 'cursorPosition',
                value: Object(_util_from_cm_event__WEBPACK_IMPORTED_MODULE_2__["fromCmEvent"])(mde.cm, 'cursorActivity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
                    const pos = mde.getCursorPos();
                    return `${pos.line}:${pos.ch}`;
                })),
            },
            // Normalize separator item to reduce type complexity in template.
            // Effectively, only the `name` property is needed.
            {
                name: '|',
                value: new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](),
            },
        ];
        this._defaultItems = defaultItems;
    }
}
StatusbarService.ɵfac = function StatusbarService_Factory(t) { return new (t || StatusbarService)(); };
StatusbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StatusbarService, factory: StatusbarService.ɵfac });


/***/ }),

/***/ "rzic":
/*!***********************************!*\
  !*** ./projects/demo/src/main.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "H5HQ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "ZcuK");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bsConstArgTag = exports.bsConstArg = exports.bsConsNoElemArg = exports.attachBSAttr = exports.attachBSClass = exports.bsClassFormatterRule = void 0;
const mergeObject_js_1 = require("./mergeObject.js");
const tag_js_1 = require("./tag.js");
const addClassIntoElement_js_1 = require("./addClassIntoElement.js");
const keyOfType_js_1 = require("./keyOfType.js");
var bootstrapTypeA;
(function (bootstrapTypeA) {
    const VIEWPORT = ["sm", "md", "lg", "xl", "xxl"];
    const SPACER = ["auto", 0, 1, 2, 3, 4, 5];
    const GRID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const ROWCOL = ["auto", ...GRID];
    const FLEX = [
        "row",
        "row-reverse",
        "column",
        "column-reverse",
        "wrap",
        "wrap-reverse",
        "nowrap",
        "fill",
        "shrink-0",
        "shrink-1",
        "grow-0",
        "grow-1",
    ];
    const FLOAT = ["start", "end", "none"];
    const ORDER = ["first", "last", ...GRID];
    const ALIGN = ["start", "end", "center", "baseline", "stretch"];
    const ALIGNCONTENT = ["start", "end", "center", "between", "around", "stretch"];
    const JUSTIFYCONTENT = ["start", "end", "center", "between", "around", "evenly"];
    const DISPLAY = [
        "none",
        "inline",
        "inline-block",
        "block",
        "grid",
        "table",
        "table-cell",
        "table-row",
        "flex",
        "inline-flex",
    ];
    const POSITIONVIEW = ["start", "center", "end"];
    const COLOR = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    const COLOREMPHASIS = COLOR.map((i) => `${i}-emphasis`);
    const COLORSUBTLE = COLOR.map((i) => `${i}-subtle`);
    const BODYCOLOR = ["body", "body-secondary", "body-tertiary"];
    const OTHERCOLOR = ["white", "black"];
    const BODYTEXTCOLOR = [...BODYCOLOR, ...OTHERCOLOR, "body-emphasis"];
    const OPACITY = [0, 25, 50, 75, 100];
    const BGOPACITY = [10, 25, 50, 75, 100];
    const TEXTOPACITY = [25, 50, 75, 100];
    const BORDEROPACITY = [10, 25, 50, 75];
    const LINKOFFSET = [1, 2, 3];
    const LINKOPACITY = BGOPACITY;
    const LINKUNDERLINEOPACITY = [0, ...LINKOPACITY];
    const FONTSIZE = [1, 2, 3, 4, 5, 6];
    const TOP = [0, 50, 100];
    const HEIGHT = ["auto", 25, 50, 75, 100];
    const BORDERWIDTH = [0, 1, 2, 3, 4, 5];
    const ZINDEX = [0, 1, 2, 3, "n1"];
    const OBJECTFIT = ["contain", "cover", "fill", "scale", "none"];
    const STICKY = ["top", "bottom"];
    const ROUNDED = ["top", "end", "bottom", "start"];
    const ROUNDEDSIZE = BORDERWIDTH;
    const ROUNDEDSTYLE = ["pill", "circle"];
    const _grid = [...GRID, ...GRID.map((i) => `${i}`), ...VIEWPORT.map((i) => GRID.map((j) => `${i}-${j}`)).flat()];
    const _spacer = [
        ...SPACER,
        ...SPACER.map((i) => `${i}`),
        ...VIEWPORT.map((i) => SPACER.map((j) => `${i}-${j}`)).flat(),
    ];
    const _align = [...ALIGN, ...VIEWPORT.map((i) => ALIGN.map((j) => `${i}-${j}`)).flat()];
    const _positionView = [...POSITIONVIEW, ...VIEWPORT.map((i) => POSITIONVIEW.map((j) => `${i}-${j}`)).flat()];
    //use by component and handle by component rule
    // NO NEED TO DO THIS BCOZ HANDLE BY COMPONENT
    // export const color = [...COLOR, ...OTHERCOLOR];
    // export const viewport = VIEWPORT;
    //attribute
    // NO NEED TO DO THIS BCOZ ATTR VALUE NOT VALIDATE
    // export const theme = ["light", "dark", "auto"];
    // export const pointer = [true];
    // export const label = "string";
    // export const labelledby = "string";
    // export const ownby = "string";
    // export const describedby = "string";
    // export const controlfor = "string";
    //class
    bootstrapTypeA.flex = [...FLEX, ...VIEWPORT.map((i) => FLEX.map((j) => `${i}-${j}`)).flat()];
    bootstrapTypeA.float = [...FLOAT, ...VIEWPORT.map((i) => FLOAT.map((j) => `${i}-${j}`)).flat()];
    bootstrapTypeA.order = [
        ...ORDER,
        ...ORDER.map((i) => `${i}`),
        ...VIEWPORT.map((i) => ORDER.map((j) => `${i}-${j}`)).flat(),
    ];
    bootstrapTypeA.offset = _grid;
    bootstrapTypeA.alignContent = [...ALIGNCONTENT, ...VIEWPORT.map((i) => ALIGNCONTENT.map((j) => `${i}-${j}`)).flat()];
    bootstrapTypeA.justifyContent = [
        ...JUSTIFYCONTENT,
        ...VIEWPORT.map((i) => JUSTIFYCONTENT.map((j) => `${i}-${j}`)).flat(),
    ];
    bootstrapTypeA.alignItem = _align;
    bootstrapTypeA.alignSelf = _align;
    bootstrapTypeA.display = [...DISPLAY, ...VIEWPORT.map((i) => DISPLAY.map((j) => `${i}-${j}`)).flat()];
    bootstrapTypeA.rowCol = [
        ...ROWCOL,
        ...ROWCOL.map((i) => `${i}`),
        ...VIEWPORT.map((i) => ROWCOL.map((j) => `${i}-${j}`)).flat(),
    ];
    bootstrapTypeA.visible = [true, false];
    bootstrapTypeA.textWrap = [true, false];
    bootstrapTypeA.fontItalic = [true, false];
    bootstrapTypeA.bgGradient = [true];
    bootstrapTypeA.textBreak = [true];
    bootstrapTypeA.monospace = [true];
    bootstrapTypeA.loadingPlaceholder = [true];
    bootstrapTypeA.loadingPlaceholderAnimation = ["glow", "wave"];
    bootstrapTypeA.loadingPlaceholderWeight = ["lg", "sm", "xs"];
    bootstrapTypeA.row = [true];
    bootstrapTypeA.col = [
        true,
        ...ROWCOL,
        ...ROWCOL.map((i) => `${i}`),
        ...VIEWPORT,
        ...VIEWPORT.map((i) => ROWCOL.map((j) => `${i}-${j}`)).flat(),
    ];
    bootstrapTypeA.userSelect = ["all", "auto", "none"];
    bootstrapTypeA.pointerEvent = ["auto", "none"];
    bootstrapTypeA.position = ["static", "relative", "absolute", "fixed", "sticky"];
    bootstrapTypeA.overflow = ["auto", "hidden", "scroll", "visible"];
    bootstrapTypeA.overflowX = bootstrapTypeA.overflow;
    bootstrapTypeA.overflowY = bootstrapTypeA.overflow;
    bootstrapTypeA.textAlign = _positionView;
    bootstrapTypeA.verticalAlign = ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"];
    bootstrapTypeA.opacity = [...OPACITY, ...OPACITY.map((i) => `${i}`)];
    bootstrapTypeA.bgOpacity = [...BGOPACITY, ...BGOPACITY.map((i) => `${i}`)];
    bootstrapTypeA.textOpacity = [...TEXTOPACITY, ...TEXTOPACITY.map((i) => `${i}`)];
    bootstrapTypeA.focusRing = [true, ...COLOR];
    bootstrapTypeA.textBgColor = COLOR;
    bootstrapTypeA.textColor = [...COLOR, ...COLOREMPHASIS, ...BODYCOLOR, ...BODYTEXTCOLOR, ...OTHERCOLOR, "reset"];
    bootstrapTypeA.bgColor = [...COLOR, ...COLORSUBTLE, ...BODYCOLOR, ...OTHERCOLOR, "transparent"];
    bootstrapTypeA.iconLink = [true, "hover"];
    bootstrapTypeA.textTransform = ["lowercase", "uppercase", "capitalize"];
    bootstrapTypeA.textDecoration = ["underline", "line-through", "none"];
    bootstrapTypeA.lineHeight = [1, "1", "sm", "base", "lg"];
    bootstrapTypeA.fontSize = [...FONTSIZE, ...FONTSIZE.map((i) => `${i}`)];
    bootstrapTypeA.fontDisplay = bootstrapTypeA.fontSize;
    bootstrapTypeA.fontWeight = ["bold", "bolder", "semibold", "medium", "normal", "light", "lighter"];
    bootstrapTypeA.top = [...TOP, ...TOP.map((i) => `${i}`)];
    bootstrapTypeA.bottom = bootstrapTypeA.top;
    bootstrapTypeA.start = bootstrapTypeA.top;
    bootstrapTypeA.end = bootstrapTypeA.top;
    bootstrapTypeA.tMiddle = [true, "x", "y"];
    bootstrapTypeA.height = [...HEIGHT, ...HEIGHT.map((i) => `${i}`)];
    bootstrapTypeA.width = bootstrapTypeA.height;
    bootstrapTypeA.maxHeight = [100, "100"];
    bootstrapTypeA.maxWidth = [100, "100"];
    bootstrapTypeA.minViewHeight = [100, "100"];
    bootstrapTypeA.minViewWidth = [100, "100"];
    bootstrapTypeA.viewHeight = [100, "100"];
    bootstrapTypeA.viewWidth = [100, "100"];
    bootstrapTypeA.shadow = [true, false, "none", "sm", "lg", "inset"];
    bootstrapTypeA.borderNone = [true, "top", "end", "bottom", "start"];
    bootstrapTypeA.border = [false, ...bootstrapTypeA.borderNone];
    bootstrapTypeA.borderColor = [...COLOR, ...COLORSUBTLE, ...OTHERCOLOR];
    bootstrapTypeA.borderOpacity = [...BORDEROPACITY, ...BORDEROPACITY.map((i) => `${i}`)];
    bootstrapTypeA.borderWidth = [...BORDERWIDTH, ...BORDERWIDTH.map((i) => `${i}`)];
    bootstrapTypeA.roundedNone = bootstrapTypeA.border;
    bootstrapTypeA.rounded = [
        true,
        false,
        ...ROUNDEDSIZE,
        ...ROUNDEDSIZE.map((i) => `${i}`),
        ...ROUNDED,
        ...ROUNDEDSTYLE,
        ...ROUNDED.map((i) => ROUNDEDSTYLE.map((j) => `${i}-${j}`)).flat(),
        ...ROUNDED.map((i) => ROUNDEDSIZE.map((j) => `${i}-${j}`)).flat(),
        ...ROUNDEDSTYLE.map((i) => ROUNDEDSIZE.map((j) => `${i}-${j}`)).flat(),
    ];
    bootstrapTypeA.roundedSize = [...ROUNDEDSIZE, ...ROUNDEDSIZE.map((i) => `${i}`)];
    bootstrapTypeA.padding = _spacer;
    bootstrapTypeA.paddingX = _spacer;
    bootstrapTypeA.paddingY = _spacer;
    bootstrapTypeA.paddingTop = _spacer;
    bootstrapTypeA.paddingBottom = _spacer;
    bootstrapTypeA.paddingStart = _spacer;
    bootstrapTypeA.paddingEnd = _spacer;
    bootstrapTypeA.margin = _spacer;
    bootstrapTypeA.marginX = _spacer;
    bootstrapTypeA.marginY = _spacer;
    bootstrapTypeA.marginTop = _spacer;
    bootstrapTypeA.marginBottom = _spacer;
    bootstrapTypeA.marginStart = _spacer;
    bootstrapTypeA.marginEnd = _spacer;
    bootstrapTypeA.gap = _spacer;
    bootstrapTypeA.gutter = _spacer;
    bootstrapTypeA.gutterX = _spacer;
    bootstrapTypeA.gutterY = _spacer;
    bootstrapTypeA.print = bootstrapTypeA.display;
    bootstrapTypeA.container = [true, ...VIEWPORT, "fluid", "xs"];
    bootstrapTypeA.zIndex = [...ZINDEX, ...ZINDEX.map((i) => `${i}`)];
    bootstrapTypeA.objectFit = [...OBJECTFIT, ...VIEWPORT.map((i) => OBJECTFIT.map((j) => `${i}-${j}`)).flat()];
    bootstrapTypeA.ratio = [true, "1x1", "4x3", "16x9", "21x9"];
    bootstrapTypeA.fixed = STICKY;
    bootstrapTypeA.sticky = [...STICKY, ...VIEWPORT.map((i) => STICKY.map((j) => `${i}-${j}`)).flat()];
    bootstrapTypeA.clearfix = [true];
    bootstrapTypeA.textTruncate = [true];
    bootstrapTypeA.vstack = [true];
    bootstrapTypeA.hstack = [true];
    bootstrapTypeA.visually = ["hidden", "hidden-focusable"];
    bootstrapTypeA.h = bootstrapTypeA.fontDisplay;
    bootstrapTypeA.small = [true];
    //specific component only
    bootstrapTypeA.linkColor = [...COLOR, ...BODYTEXTCOLOR];
    bootstrapTypeA.linkUnderlineColor = bootstrapTypeA.linkColor;
    bootstrapTypeA.linkOffset = [...LINKOFFSET, ...LINKOFFSET.map((i) => `${i}`)];
    bootstrapTypeA.linkOffsetHover = bootstrapTypeA.linkOffset;
    bootstrapTypeA.linkOpacity = [...LINKOPACITY, ...LINKOPACITY.map((i) => `${i}`)];
    bootstrapTypeA.linkOpacityHover = bootstrapTypeA.linkOpacity;
    bootstrapTypeA.linkUnderline = [true];
    bootstrapTypeA.linkUnderlineOpacity = [...LINKUNDERLINEOPACITY, ...LINKUNDERLINEOPACITY.map((i) => `${i}`)];
    bootstrapTypeA.linkUnderlineOpacityHover = bootstrapTypeA.linkUnderlineOpacity;
    bootstrapTypeA.btnColor = COLOR;
    bootstrapTypeA.btnOutlineColor = COLOR;
    bootstrapTypeA.alertColor = COLOR;
    bootstrapTypeA.alertDismissible = [true];
    bootstrapTypeA.dropdownDirection = ["up", "start", "end"];
    bootstrapTypeA.dropdownMenuPositionView = _positionView;
})(bootstrapTypeA || (bootstrapTypeA = {}));
class bsClassFormatterRule {
    shared;
    value;
    format;
    formatValue;
    formatTrue;
    formatFalse;
    constructor(d) {
        this.shared = d.shared;
        this.value = d.value;
        this.format = d.format;
        this.formatValue = d.formatValue;
        this.formatTrue = d.formatTrue;
        this.formatFalse = d.formatFalse;
    }
}
exports.bsClassFormatterRule = bsClassFormatterRule;
const bsClassFormatterDB = {
    //---------------------
    // viewport & color handle by component
    //---------------------
    flex: new bsClassFormatterRule({
        format: "flex-$1",
        value: bootstrapTypeA.flex,
    }),
    float: new bsClassFormatterRule({
        format: "float-$1",
        value: bootstrapTypeA.float,
    }),
    order: new bsClassFormatterRule({
        format: "order-$1",
        value: bootstrapTypeA.order,
    }),
    offset: new bsClassFormatterRule({
        format: "offset-$1",
        value: bootstrapTypeA.offset,
    }),
    //---------------------
    alignContent: new bsClassFormatterRule({
        format: "align-content-$1",
        value: bootstrapTypeA.alignContent,
    }),
    justifyContent: new bsClassFormatterRule({
        format: "justify-content-$1",
        value: bootstrapTypeA.justifyContent,
    }),
    alignItem: new bsClassFormatterRule({
        format: "align-items-$1",
        value: bootstrapTypeA.alignItem,
    }),
    alignSelf: new bsClassFormatterRule({
        format: "align-self-$1",
        value: bootstrapTypeA.alignSelf,
    }),
    display: new bsClassFormatterRule({
        format: "d-$1",
        value: bootstrapTypeA.display,
    }),
    rowCol: new bsClassFormatterRule({
        format: "row-cols-$1",
        value: bootstrapTypeA.rowCol,
    }),
    //---------------------
    visible: new bsClassFormatterRule({
        formatTrue: "visible",
        formatFalse: "invisible",
        value: bootstrapTypeA.visible,
    }),
    textWrap: new bsClassFormatterRule({
        formatTrue: "text-wrap",
        formatFalse: "text-nowrap",
        value: bootstrapTypeA.textWrap,
    }),
    fontItalic: new bsClassFormatterRule({
        formatTrue: "fst-italic",
        formatFalse: "fst-normal",
        value: bootstrapTypeA.fontItalic,
    }),
    bgGradient: new bsClassFormatterRule({
        formatTrue: "bg-gradient",
        value: bootstrapTypeA.bgGradient,
    }),
    textBreak: new bsClassFormatterRule({
        formatTrue: "text-break",
        value: bootstrapTypeA.textBreak,
    }),
    monospace: new bsClassFormatterRule({
        formatTrue: "font-monospace",
        value: bootstrapTypeA.monospace,
    }),
    //---------------------
    loadingPlaceholder: new bsClassFormatterRule({
        formatTrue: "placeholder",
        value: bootstrapTypeA.loadingPlaceholder,
    }),
    loadingPlaceholderAnimation: new bsClassFormatterRule({
        format: "placeholder-$1",
        value: bootstrapTypeA.loadingPlaceholderAnimation,
    }),
    loadingPlaceholderWeight: new bsClassFormatterRule({
        format: "placeholder-$1",
        formatValue: "placeholder $1",
        value: bootstrapTypeA.loadingPlaceholderWeight,
    }),
    //---------------------
    row: new bsClassFormatterRule({
        formatTrue: "row",
        value: bootstrapTypeA.row,
    }),
    col: new bsClassFormatterRule({
        format: "col-$1",
        formatTrue: "col",
        value: bootstrapTypeA.col,
    }),
    //---------------------
    userSelect: new bsClassFormatterRule({
        format: "user-select-$1",
        value: bootstrapTypeA.userSelect,
    }),
    pointerEvent: new bsClassFormatterRule({
        format: "pe-$1",
        value: bootstrapTypeA.pointerEvent,
    }),
    position: new bsClassFormatterRule({
        format: "position-$1",
        value: bootstrapTypeA.position,
    }),
    overflow: new bsClassFormatterRule({
        format: "overflow-$1",
        value: bootstrapTypeA.overflow,
    }),
    overflowX: new bsClassFormatterRule({
        format: "overflow-x-$1",
        value: bootstrapTypeA.overflowX,
    }),
    overflowY: new bsClassFormatterRule({
        format: "overflow-y-$1",
        value: bootstrapTypeA.overflowY,
    }),
    //---------------------
    textAlign: new bsClassFormatterRule({
        format: "text-$1",
        value: bootstrapTypeA.textAlign,
    }),
    verticalAlign: new bsClassFormatterRule({
        format: "align-$1",
        value: bootstrapTypeA.verticalAlign,
    }),
    //---------------------
    opacity: new bsClassFormatterRule({
        format: "opacity-$1",
        value: bootstrapTypeA.opacity,
    }),
    bgOpacity: new bsClassFormatterRule({
        format: "bg-opacity-$1",
        value: bootstrapTypeA.bgOpacity,
    }),
    textOpacity: new bsClassFormatterRule({
        format: "text-opacity-$1",
        value: bootstrapTypeA.textOpacity,
    }),
    //---------------------
    focusRing: new bsClassFormatterRule({
        format: "focus-ring-$1",
        formatValue: "focus-ring",
        value: bootstrapTypeA.focusRing,
    }),
    textBgColor: new bsClassFormatterRule({
        format: "text-bg-$1",
        value: bootstrapTypeA.textBgColor,
    }),
    textColor: new bsClassFormatterRule({
        format: "text-$1",
        value: bootstrapTypeA.textColor,
    }),
    bgColor: new bsClassFormatterRule({
        format: "bg-$1",
        value: bootstrapTypeA.bgColor,
    }),
    //---------------------
    iconLink: new bsClassFormatterRule({
        format: "icon-link-$1",
        formatValue: "icon-link",
        formatTrue: "icon-link",
        value: bootstrapTypeA.iconLink,
    }),
    //---------------------
    textTransform: new bsClassFormatterRule({
        format: "text-$1",
        value: bootstrapTypeA.textTransform,
    }),
    textDecoration: new bsClassFormatterRule({
        format: "text-decoration-$1",
        value: bootstrapTypeA.textDecoration,
    }),
    lineHeight: new bsClassFormatterRule({
        format: "lh-$1",
        value: bootstrapTypeA.lineHeight,
    }),
    //---------------------
    fontSize: new bsClassFormatterRule({
        format: "fs-$1",
        value: bootstrapTypeA.fontSize,
    }),
    fontDisplay: new bsClassFormatterRule({
        format: "display-$1",
        value: bootstrapTypeA.fontDisplay,
    }),
    fontWeight: new bsClassFormatterRule({
        format: "fw-$1",
        value: bootstrapTypeA.fontWeight,
    }),
    //---------------------
    top: new bsClassFormatterRule({
        format: "top-$1",
        value: bootstrapTypeA.top,
    }),
    bottom: new bsClassFormatterRule({
        format: "bottom-$1",
        value: bootstrapTypeA.bottom,
    }),
    start: new bsClassFormatterRule({
        format: "start-$1",
        value: bootstrapTypeA.start,
    }),
    end: new bsClassFormatterRule({
        format: "end-$1",
        value: bootstrapTypeA.end,
    }),
    tMiddle: new bsClassFormatterRule({
        format: "translate-middle-$1",
        formatTrue: "translate-middle",
        value: bootstrapTypeA.tMiddle,
    }),
    //---------------------
    height: new bsClassFormatterRule({
        format: "h-$1",
        value: bootstrapTypeA.height,
        shared: true,
    }),
    width: new bsClassFormatterRule({
        format: "w-$1",
        value: bootstrapTypeA.width,
        shared: true,
    }),
    //---------------------
    maxHeight: new bsClassFormatterRule({
        format: "mh-$1",
        value: bootstrapTypeA.maxHeight,
    }),
    maxWidth: new bsClassFormatterRule({
        format: "mw-$1",
        value: bootstrapTypeA.maxWidth,
    }),
    minViewHeight: new bsClassFormatterRule({
        format: "min-vh-$1",
        value: bootstrapTypeA.minViewHeight,
    }),
    minViewWidth: new bsClassFormatterRule({
        format: "min-vw-$1",
        value: bootstrapTypeA.minViewWidth,
    }),
    viewHeight: new bsClassFormatterRule({
        format: "vh-$1",
        value: bootstrapTypeA.viewHeight,
    }),
    viewWidth: new bsClassFormatterRule({
        format: "vw-$1",
        value: bootstrapTypeA.viewWidth,
    }),
    //---------------------
    shadow: new bsClassFormatterRule({
        format: "shadow-$1",
        formatTrue: "shadow",
        formatValue: "shadow",
        formatFalse: "shadow-none",
        value: bootstrapTypeA.shadow,
    }),
    //---------------------
    borderNone: new bsClassFormatterRule({
        format: "border-$1-0",
        formatTrue: "border-0",
        formatFalse: "border",
        value: bootstrapTypeA.borderNone,
    }),
    border: new bsClassFormatterRule({
        format: "border-$1",
        formatTrue: "border",
        formatFalse: "border-0",
        value: bootstrapTypeA.border,
    }),
    borderColor: new bsClassFormatterRule({
        format: "border-$1",
        value: bootstrapTypeA.borderColor,
    }),
    borderOpacity: new bsClassFormatterRule({
        format: "border-opacity-$1",
        value: bootstrapTypeA.borderOpacity,
    }),
    borderWidth: new bsClassFormatterRule({
        format: "border-$1",
        value: bootstrapTypeA.borderWidth,
    }),
    //---------------------
    roundedNone: new bsClassFormatterRule({
        format: "rounded-$1-0",
        formatTrue: "rounded",
        formatFalse: "rounded-0",
        value: bootstrapTypeA.roundedNone,
    }),
    rounded: new bsClassFormatterRule({
        format: "rounded-$1",
        formatTrue: "rounded",
        formatFalse: "rounded-0",
        value: bootstrapTypeA.rounded,
    }),
    roundedSize: new bsClassFormatterRule({
        format: "rounded-$1",
        value: bootstrapTypeA.roundedSize,
    }),
    //---------------------
    padding: new bsClassFormatterRule({
        format: "p-$1",
        value: bootstrapTypeA.padding,
    }),
    paddingX: new bsClassFormatterRule({
        format: "px-$1",
        value: bootstrapTypeA.paddingX,
    }),
    paddingY: new bsClassFormatterRule({
        format: "py-$1",
        value: bootstrapTypeA.paddingY,
    }),
    paddingTop: new bsClassFormatterRule({
        format: "pt-$1",
        value: bootstrapTypeA.paddingTop,
    }),
    paddingBottom: new bsClassFormatterRule({
        format: "pb-$1",
        value: bootstrapTypeA.paddingBottom,
    }),
    paddingStart: new bsClassFormatterRule({
        format: "ps-$1",
        value: bootstrapTypeA.paddingStart,
    }),
    paddingEnd: new bsClassFormatterRule({
        format: "pe-$1",
        value: bootstrapTypeA.paddingEnd,
    }),
    //---------------------
    margin: new bsClassFormatterRule({
        format: "m-$1",
        value: bootstrapTypeA.margin,
    }),
    marginX: new bsClassFormatterRule({
        format: "mx-$1",
        value: bootstrapTypeA.marginX,
    }),
    marginY: new bsClassFormatterRule({
        format: "my-$1",
        value: bootstrapTypeA.marginY,
    }),
    marginTop: new bsClassFormatterRule({
        format: "mt-$1",
        value: bootstrapTypeA.marginTop,
    }),
    marginBottom: new bsClassFormatterRule({
        format: "mb-$1",
        value: bootstrapTypeA.marginBottom,
    }),
    marginStart: new bsClassFormatterRule({
        format: "ms-$1",
        value: bootstrapTypeA.marginStart,
    }),
    marginEnd: new bsClassFormatterRule({
        format: "me-$1",
        value: bootstrapTypeA.marginEnd,
    }),
    //---------------------
    gap: new bsClassFormatterRule({
        format: "gap-$1",
        value: bootstrapTypeA.gap,
    }),
    gutter: new bsClassFormatterRule({
        format: "g-$1",
        value: bootstrapTypeA.gutter,
    }),
    gutterX: new bsClassFormatterRule({
        format: "gx-$1",
        value: bootstrapTypeA.gutterX,
    }),
    gutterY: new bsClassFormatterRule({
        format: "gy-$1",
        value: bootstrapTypeA.gutterY,
    }),
    //---------------------
    print: new bsClassFormatterRule({
        format: "d-print-$1",
        value: bootstrapTypeA.print,
    }),
    container: new bsClassFormatterRule({
        format: "container-$1",
        formatTrue: "container",
        value: bootstrapTypeA.container,
    }),
    //---------------------
    zIndex: new bsClassFormatterRule({
        format: "z-$1",
        value: bootstrapTypeA.zIndex,
    }),
    objectFit: new bsClassFormatterRule({
        format: "object-fit-$1",
        value: bootstrapTypeA.objectFit,
    }),
    //---------------------
    ratio: new bsClassFormatterRule({
        format: "ratio-$1",
        formatValue: "ratio",
        formatTrue: "ratio",
        value: bootstrapTypeA.ratio,
    }),
    fixed: new bsClassFormatterRule({
        format: "fixed-$1",
        value: bootstrapTypeA.fixed,
    }),
    sticky: new bsClassFormatterRule({
        format: "sticky-$1",
        value: bootstrapTypeA.sticky,
    }),
    //---------------------
    clearfix: new bsClassFormatterRule({
        formatTrue: "clearfix",
        value: bootstrapTypeA.clearfix,
    }),
    textTruncate: new bsClassFormatterRule({
        formatTrue: "text-truncate",
        value: bootstrapTypeA.textTruncate,
    }),
    vstack: new bsClassFormatterRule({
        formatTrue: "vstack",
        value: bootstrapTypeA.vstack,
    }),
    hstack: new bsClassFormatterRule({
        formatTrue: "hstack",
        value: bootstrapTypeA.hstack,
    }),
    visually: new bsClassFormatterRule({
        format: "visually-$1",
        value: bootstrapTypeA.visually,
    }),
    h: new bsClassFormatterRule({
        format: "h$1",
        value: bootstrapTypeA.h,
    }),
    small: new bsClassFormatterRule({
        formatTrue: "small",
        value: bootstrapTypeA.small,
    }),
    //---------------------
    linkColor: new bsClassFormatterRule({
        format: "link-$1",
        value: bootstrapTypeA.linkColor,
    }),
    linkUnderlineColor: new bsClassFormatterRule({
        format: "link-underline-$1",
        value: bootstrapTypeA.linkUnderlineColor,
    }),
    linkOffset: new bsClassFormatterRule({
        format: "link-offset-$1",
        value: bootstrapTypeA.linkOffset,
    }),
    linkOffsetHover: new bsClassFormatterRule({
        format: "link-offset-$1-hover",
        value: bootstrapTypeA.linkOffsetHover,
    }),
    linkOpacity: new bsClassFormatterRule({
        format: "link-opacity-$1",
        value: bootstrapTypeA.linkOpacity,
    }),
    linkOpacityHover: new bsClassFormatterRule({
        format: "link-opacity-$1-hover",
        value: bootstrapTypeA.linkOpacityHover,
    }),
    linkUnderline: new bsClassFormatterRule({
        formatTrue: "link-underline",
        value: bootstrapTypeA.linkUnderline,
    }),
    linkUnderlineOpacity: new bsClassFormatterRule({
        format: "link-underline-opacity-$1",
        value: bootstrapTypeA.linkUnderlineOpacity,
    }),
    linkUnderlineOpacityHover: new bsClassFormatterRule({
        format: "link-underline-opacity-$1-hover",
        value: bootstrapTypeA.linkUnderlineOpacityHover,
    }),
    //---------------------
    btnColor: new bsClassFormatterRule({
        format: "btn-$1",
        formatValue: "btn",
        value: bootstrapTypeA.btnColor,
    }),
    btnOutlineColor: new bsClassFormatterRule({
        format: "btn-outline-$1",
        formatValue: "btn",
        value: bootstrapTypeA.btnOutlineColor,
    }),
    alertColor: new bsClassFormatterRule({
        format: "alert-$1",
        value: bootstrapTypeA.alertColor,
    }),
    alertDismissible: new bsClassFormatterRule({
        formatTrue: "alert-dismissible",
        value: bootstrapTypeA.alertDismissible,
    }),
    dropdownDirection: new bsClassFormatterRule({
        format: "drop$1",
        value: bootstrapTypeA.dropdownDirection,
    }),
    dropdownMenuPositionView: new bsClassFormatterRule({
        format: "dropdown-menu-$1",
        value: bootstrapTypeA.dropdownMenuPositionView,
    }),
};
const attrFormatterDB = {
    theme: (elem, data) => {
        elem.setAttribute(`data-bs-theme`, data.toString());
        return elem;
    },
    pointer: (elem, data) => {
        if (data) {
            elem.setAttribute("role", "button");
        }
        return elem;
    },
    label: (elem, data) => {
        if (data) {
            elem.setAttribute("aria-label", data.toString());
        }
        return elem;
    },
    labelledby: (elem, data) => {
        if (data) {
            elem.setAttribute("aria-labelledby", data.toString());
        }
        return elem;
    },
    ownby: (elem, data) => {
        if (data) {
            elem.setAttribute("aria-owns", data.toString());
        }
        return elem;
    },
    describedby: (elem, data) => {
        if (data) {
            elem.setAttribute("aria-describedby", data.toString());
        }
        return elem;
    },
    controlfor: (elem, data) => {
        if (data) {
            elem.setAttribute("aria-controls", data.toString());
        }
        return elem;
    },
    gridTemplateColumns: (elem, data) => {
        if (data) {
            elem.style.gridTemplateColumns = data.toString();
        }
        return elem;
    },
    gridTemplateAreas: (elem, data) => {
        if (data) {
            elem.style.gridTemplateAreas = data.toString();
        }
        return elem;
    },
    gridTemplateRows: (elem, data) => {
        if (data) {
            elem.style.gridTemplateRows = data.toString();
        }
        return elem;
    },
    gridArea: (elem, data) => {
        if (data) {
            elem.style.gridArea = data.toString();
        }
        return elem;
    },
};
let allowClassProp = [];
var attachBSClass;
(function (attachBSClass) {
    const allowValue = (valueToCheck, listOfPossible) => {
        if (listOfPossible && listOfPossible.length > 0) {
            return listOfPossible.indexOf(valueToCheck) > -1;
        }
        return false;
    };
    const allowProp = (key) => {
        if (allowClassProp.length === 0) {
            allowClassProp = Object.keys(bsClassFormatterDB);
        }
        if (allowClassProp.indexOf(key) > -1) {
            return key;
        }
        return null;
    };
    const addClass = (rule, data, elem) => {
        if (rule.value && allowValue(data, rule.value)) {
            if (rule.formatValue) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.formatValue);
            }
            if (data === true && rule.formatTrue) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.formatTrue);
            }
            else if (data === false && rule.formatFalse) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.formatFalse);
            }
            else if (rule.format) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.format.replace(/\$1/g, data.toString()));
            }
        }
        return elem;
    };
    attachBSClass.attach = (key, elem, attr) => {
        let changed = false;
        let allowKey = allowProp(key);
        if (allowKey) {
            let a = (0, keyOfType_js_1.keyOfType)(key, attr);
            let b = (0, keyOfType_js_1.keyOfType)(allowKey, bsClassFormatterDB);
            let data = [];
            if (!Array.isArray(attr[a])) {
                data = [attr[a]];
            }
            else {
                data = attr[a];
            }
            data.forEach((i) => {
                elem = addClass(bsClassFormatterDB[b], i, elem);
            });
            delete attr[a];
            changed = true;
        }
        return { attr, elem, changed };
    };
})(attachBSClass = exports.attachBSClass || (exports.attachBSClass = {}));
let allowAttrProp = [];
var attachBSAttr;
(function (attachBSAttr) {
    const allow = (key) => {
        if (allowAttrProp.length === 0) {
            allowAttrProp = Object.keys(attrFormatterDB);
        }
        if (allowAttrProp.indexOf(key) > -1) {
            return key;
        }
        return null;
    };
    const addAttr = (rule, data, elem) => {
        elem = rule(elem, data);
        return elem;
    };
    attachBSAttr.attach = (key, elem, attr) => {
        let changed = false;
        let allowKey = allow(key);
        if (allowKey) {
            let a = (0, keyOfType_js_1.keyOfType)(key, attr);
            let b = (0, keyOfType_js_1.keyOfType)(allowKey, attrFormatterDB);
            let data = [];
            if (!Array.isArray(attr[a])) {
                data = [attr[a]];
            }
            else {
                data = attr[a];
            }
            data.forEach((i) => {
                elem = addAttr(attrFormatterDB[b], i, elem);
            });
            delete attr[a];
            changed = true;
        }
        return { attr, elem, changed };
    };
})(attachBSAttr = exports.attachBSAttr || (exports.attachBSAttr = {}));
const bsConsNoElemArg = (fn, arg) => {
    if (arg) {
        if (arg.length === 1) {
            return fn(arg[0]);
        }
        else {
            return fn({});
        }
    }
    else {
        return fn({});
    }
};
exports.bsConsNoElemArg = bsConsNoElemArg;
const bsConstArg = (prop, arg) => {
    if (arg) {
        if (arg.length === 1) {
            if ((0, tag_js_1.isAttr)(arg[0])) {
                return arg[0];
            }
            else {
                return { [prop]: arg[0] };
            }
        }
        else if (arg.length === 2) {
            return (0, mergeObject_js_1.mergeObject)({ [prop]: arg[1] }, arg[0]);
        }
        else {
            return {};
        }
    }
    else {
        return {};
    }
};
exports.bsConstArg = bsConstArg;
const bsConstArgTag = (prop, t1, t2, fn, arg) => {
    if (arg) {
        if (arg.length === 1) {
            if ((0, tag_js_1.isAttr)(arg[0])) {
                return fn(arg[0]) ? t2 : t1;
            }
            else {
                return t1;
            }
        }
        else if (arg.length === 2) {
            return fn((0, mergeObject_js_1.mergeObject)({ [prop]: arg[1] }, arg[0])) ? t2 : t1;
        }
        else {
            return t1;
        }
    }
    else {
        return t1;
    }
};
exports.bsConstArgTag = bsConstArgTag;

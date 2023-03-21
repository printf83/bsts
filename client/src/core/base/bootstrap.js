import { mergeObject } from "../fn/mergeObject.js";
import { isAttr } from "./tag.js";
export var bootstrapBase;
(function (bootstrapBase) {
    const base5 = [0, 1, 2, 3, 4, 5];
    const truefalse = [true, false];
    const trueonly = [true];
    const hundred = [100];
    bootstrapBase.theme = ["dark", "light", "auto"];
    bootstrapBase.viewport = ["sm", "md", "lg", "xl", "xxl"];
    bootstrapBase.grid = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
    ];
    bootstrapBase.flex = [
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
        "sm-row",
        "sm-row-reverse",
        "sm-column",
        "sm-column-reverse",
        "sm-wrap",
        "sm-wrap-reverse",
        "sm-nowrap",
        "sm-fill",
        "sm-shrink-0",
        "sm-shrink-1",
        "sm-grow-0",
        "sm-grow-1",
        "md-row",
        "md-row-reverse",
        "md-column",
        "md-column-reverse",
        "md-wrap",
        "md-wrap-reverse",
        "md-nowrap",
        "md-fill",
        "md-shrink-0",
        "md-shrink-1",
        "md-grow-0",
        "md-grow-1",
        "lg-row",
        "lg-row-reverse",
        "lg-column",
        "lg-column-reverse",
        "lg-wrap",
        "lg-wrap-reverse",
        "lg-nowrap",
        "lg-fill",
        "lg-shrink-0",
        "lg-shrink-1",
        "lg-grow-0",
        "lg-grow-1",
        "xl-row",
        "xl-row-reverse",
        "xl-column",
        "xl-column-reverse",
        "xl-wrap",
        "xl-wrap-reverse",
        "xl-nowrap",
        "xl-fill",
        "xl-shrink-0",
        "xl-shrink-1",
        "xl-grow-0",
        "xl-grow-1",
        "xxl-row",
        "xxl-row-reverse",
        "xxl-column",
        "xxl-column-reverse",
        "xxl-wrap",
        "xxl-wrap-reverse",
        "xxl-nowrap",
        "xxl-fill",
        "xxl-shrink-0",
        "xxl-shrink-1",
        "xxl-grow-0",
        "xxl-grow-1",
    ];
    bootstrapBase.float = [
        "start",
        "end",
        "none",
        "sm-start",
        "sm-end",
        "sm-none",
        "md-start",
        "md-end",
        "md-none",
        "lg-start",
        "lg-end",
        "lg-none",
        "xl-start",
        "xl-end",
        "xl-none",
        "xxl-start",
        "xxl-end",
        "xxl-none",
    ];
    bootstrapBase.order = [
        "first",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "last",
        "sm-first",
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "sm-last",
        "md-first",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "md-last",
        "lg-first",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "lg-last",
        "xl-first",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xl-last",
        "xxl-first",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
        "xxl-last",
    ];
    bootstrapBase.offset = bootstrapBase.grid;
    bootstrapBase.align = [
        "start",
        "end",
        "center",
        "baseline",
        "stretch",
        "sm-start",
        "sm-end",
        "sm-center",
        "sm-baseline",
        "sm-stretch",
        "md-start",
        "md-end",
        "md-center",
        "md-baseline",
        "md-stretch",
        "lg-start",
        "lg-end",
        "lg-center",
        "lg-baseline",
        "lg-stretch",
        "xl-start",
        "xl-end",
        "xl-center",
        "xl-baseline",
        "xl-stretch",
        "xxl-start",
        "xxl-end",
        "xxl-center",
        "xxl-baseline",
        "xxl-stretch",
    ];
    bootstrapBase.alignContent = [
        "start",
        "end",
        "center",
        "between",
        "around",
        "stretch",
        "sm-start",
        "sm-end",
        "sm-center",
        "sm-between",
        "sm-around",
        "sm-stretch",
        "md-start",
        "md-end",
        "md-center",
        "md-between",
        "md-around",
        "md-stretch",
        "lg-start",
        "lg-end",
        "lg-center",
        "lg-between",
        "lg-around",
        "lg-stretch",
        "xl-start",
        "xl-end",
        "xl-center",
        "xl-between",
        "xl-around",
        "xl-stretch",
        "xxl-start",
        "xxl-end",
        "xxl-center",
        "xxl-between",
        "xxl-around",
        "xxl-stretch",
    ];
    bootstrapBase.justifyContent = [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "sm-start",
        "sm-end",
        "sm-center",
        "sm-between",
        "sm-around",
        "sm-evenly",
        "md-start",
        "md-end",
        "md-center",
        "md-between",
        "md-around",
        "md-evenly",
        "lg-start",
        "lg-end",
        "lg-center",
        "lg-between",
        "lg-around",
        "lg-evenly",
        "xl-start",
        "xl-end",
        "xl-center",
        "xl-between",
        "xl-around",
        "xl-evenly",
        "xxl-start",
        "xxl-end",
        "xxl-center",
        "xxl-between",
        "xxl-around",
        "xxl-evenly",
    ];
    bootstrapBase.alignItem = bootstrapBase.align;
    bootstrapBase.alignSelf = bootstrapBase.align;
    bootstrapBase.spacer = [
        0,
        1,
        2,
        3,
        4,
        5,
        "auto",
        "sm-0",
        "md-0",
        "lg-0",
        "xl-0",
        "xxl-0",
        "sm-1",
        "md-1",
        "lg-1",
        "xl-1",
        "xxl-1",
        "sm-2",
        "md-2",
        "lg-2",
        "xl-2",
        "xxl-2",
        "sm-3",
        "md-3",
        "lg-3",
        "xl-3",
        "xxl-3",
        "sm-4",
        "md-4",
        "lg-4",
        "xl-4",
        "xxl-4",
        "sm-5",
        "md-5",
        "lg-5",
        "xl-5",
        "xxl-5",
        "sm-auto",
        "md-auto",
        "lg-auto",
        "xl-auto",
        "xxl-auto",
    ];
    bootstrapBase.display = [
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
        "sm-none",
        "sm-inline",
        "sm-inline-block",
        "sm-block",
        "sm-grid",
        "sm-table",
        "sm-table-cell",
        "sm-table-row",
        "sm-flex",
        "sm-inline-flex",
        "md-none",
        "md-inline",
        "md-inline-block",
        "md-block",
        "md-grid",
        "md-table",
        "md-table-cell",
        "md-table-row",
        "md-flex",
        "md-inline-flex",
        "lg-none",
        "lg-inline",
        "lg-inline-block",
        "lg-block",
        "lg-grid",
        "lg-table",
        "lg-table-cell",
        "lg-table-row",
        "lg-flex",
        "lg-inline-flex",
        "xl-none",
        "xl-inline",
        "xl-inline-block",
        "xl-block",
        "xl-grid",
        "xl-table",
        "xl-table-cell",
        "xl-table-row",
        "xl-flex",
        "xl-inline-flex",
        "xxl-none",
        "xxl-inline",
        "xxl-inline-block",
        "xxl-block",
        "xxl-grid",
        "xxl-table",
        "xxl-table-cell",
        "xxl-table-row",
        "xxl-flex",
        "xxl-inline-flex",
    ];
    bootstrapBase.rowCol = [
        "auto",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "sm-auto",
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "md-auto",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "lg-auto",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "xl-auto",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xxl-auto",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
    ];
    bootstrapBase.color = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    bootstrapBase.colorEmphasis = [
        "primary-emphasis",
        "secondary-emphasis",
        "success-emphasis",
        "danger-emphasis",
        "warning-emphasis",
        "info-emphasis",
        "light-emphasis",
        "dark-emphasis",
    ];
    bootstrapBase.colorSubtle = [
        "primary-subtle",
        "secondary-subtle",
        "success-subtle",
        "danger-subtle",
        "warning-subtle",
        "info-subtle",
        "light-subtle",
        "dark-subtle",
    ];
    bootstrapBase.positionView = [
        "start",
        "sm-start",
        "md-start",
        "lg-start",
        "xl-start",
        "center",
        "sm-center",
        "md-center",
        "lg-center",
        "xl-center",
        "end",
        "sm-end",
        "md-end",
        "lg-end",
        "xl-end",
    ];
    bootstrapBase.visible = truefalse;
    bootstrapBase.textWrap = truefalse;
    bootstrapBase.fontItalic = truefalse;
    bootstrapBase.bgGradient = trueonly;
    bootstrapBase.wordBreak = trueonly;
    bootstrapBase.monospace = trueonly;
    bootstrapBase.placeholder = trueonly;
    bootstrapBase.row = truefalse;
    bootstrapBase.col = [
        true,
        "auto",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "sm-auto",
        "sm-0",
        "sm-1",
        "sm-2",
        "sm-3",
        "sm-4",
        "sm-5",
        "sm-6",
        "sm-7",
        "sm-8",
        "sm-9",
        "sm-10",
        "sm-11",
        "sm-12",
        "md-auto",
        "md-0",
        "md-1",
        "md-2",
        "md-3",
        "md-4",
        "md-5",
        "md-6",
        "md-7",
        "md-8",
        "md-9",
        "md-10",
        "md-11",
        "md-12",
        "lg-auto",
        "lg-0",
        "lg-1",
        "lg-2",
        "lg-3",
        "lg-4",
        "lg-5",
        "lg-6",
        "lg-7",
        "lg-8",
        "lg-9",
        "lg-10",
        "lg-11",
        "lg-12",
        "xl-auto",
        "xl-0",
        "xl-1",
        "xl-2",
        "xl-3",
        "xl-4",
        "xl-5",
        "xl-6",
        "xl-7",
        "xl-8",
        "xl-9",
        "xl-10",
        "xl-11",
        "xl-12",
        "xxl-auto",
        "xxl-0",
        "xxl-1",
        "xxl-2",
        "xxl-3",
        "xxl-4",
        "xxl-5",
        "xxl-6",
        "xxl-7",
        "xxl-8",
        "xxl-9",
        "xxl-10",
        "xxl-11",
        "xxl-12",
    ];
    bootstrapBase.userSelect = ["all", "auto", "none"];
    bootstrapBase.pointerEvent = ["auto", "none"];
    bootstrapBase.position = ["static", "relative", "absolute"];
    bootstrapBase.overflow = ["auto", "hidden", "scroll"];
    bootstrapBase.textAlign = bootstrapBase.positionView;
    bootstrapBase.verticalAlign = ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"];
    bootstrapBase.opacity = [0, 25, 50, 75, 100];
    bootstrapBase.bgOpacity = [10, 25, 50, 75, 100];
    bootstrapBase.textOpacity = [25, 50, 75, 100];
    bootstrapBase.btnColor = bootstrapBase.color;
    bootstrapBase.btnOutlineColor = bootstrapBase.color;
    bootstrapBase.alertColor = bootstrapBase.color;
    bootstrapBase.textBgColor = bootstrapBase.color;
    bootstrapBase.textColor = [
        ...bootstrapBase.color,
        ...bootstrapBase.colorEmphasis,
        "body",
        "body-emphasis",
        "body-secondary",
        "body-tertiary",
        "muted" /** @deprecated text-muted utility has been deprecated as of v5.3.0 */,
    ];
    bootstrapBase.linkColor = bootstrapBase.color;
    bootstrapBase.bgColor = [
        ...bootstrapBase.color,
        ...bootstrapBase.colorSubtle,
        "body",
        "body-secondary",
        "body-tertiary",
        "black",
        "white",
        "transparent",
    ];
    bootstrapBase.dropdownDirection = ["up", "start", "end"];
    bootstrapBase.textTransform = ["lowercase", "uppercase", "capitalize"];
    bootstrapBase.textDecoration = ["underline", "line-through", "none"];
    bootstrapBase.lineHeight = [1, "sm", "base", "lg"];
    bootstrapBase.fontSize = [1, 2, 3, 4, 5, 6];
    bootstrapBase.fontDisplay = bootstrapBase.fontSize;
    bootstrapBase.fontWeight = ["bold", "bolder", "semibold", "normal", "light", "lighter"];
    bootstrapBase.top = [0, 50, 100];
    bootstrapBase.bottom = bootstrapBase.top;
    bootstrapBase.start = bootstrapBase.top;
    bootstrapBase.end = bootstrapBase.top;
    bootstrapBase.tMiddle = [true, "x", "y"];
    bootstrapBase.height = ["auto", 25, 50, 75, 100];
    bootstrapBase.width = bootstrapBase.height;
    bootstrapBase.maxHeight = hundred;
    bootstrapBase.maxWidth = hundred;
    bootstrapBase.minViewHeight = hundred;
    bootstrapBase.minViewWidth = hundred;
    bootstrapBase.viewHeight = hundred;
    bootstrapBase.viewWidth = hundred;
    bootstrapBase.placeholderAnimation = ["glow", "wave"];
    bootstrapBase.placeholderWeight = ["lg", "sm", "xs"];
    bootstrapBase.shadow = [true, false, "none", "sm", "lg", "inset"];
    bootstrapBase.borderNone = [true, "top", "end", "bottom", "start"];
    bootstrapBase.border = [true, false, "top", "end", "bottom", "start"];
    bootstrapBase.borderColor = bootstrapBase.color;
    bootstrapBase.borderOpacity = [10, 25, 50, 75];
    bootstrapBase.borderWidth = base5;
    bootstrapBase.roundedNone = [true, false, "top", "end", "bottom", "start"];
    bootstrapBase.rounded = [
        true,
        false,
        0,
        1,
        2,
        3,
        4,
        5,
        "top",
        "end",
        "bottom",
        "start",
        "circle",
        "pill",
        "top-0",
        "end-0",
        "bottom-0",
        "start-0",
        "circle-0",
        "pill-0",
        "top-1",
        "end-1",
        "bottom-1",
        "start-1",
        "circle-1",
        "pill-1",
        "top-2",
        "end-2",
        "bottom-2",
        "start-2",
        "circle-2",
        "pill-2",
        "top-3",
        "end-3",
        "bottom-3",
        "start-3",
        "circle-3",
        "pill-3",
        "top-4",
        "end-4",
        "bottom-4",
        "start-4",
        "circle-4",
        "pill-4",
        "top-5",
        "end-5",
        "bottom-5",
        "start-5",
        "circle-5",
        "pill-5",
    ];
    bootstrapBase.roundedSize = base5;
    bootstrapBase.padding = bootstrapBase.spacer;
    bootstrapBase.paddingX = bootstrapBase.spacer;
    bootstrapBase.paddingY = bootstrapBase.spacer;
    bootstrapBase.paddingTop = bootstrapBase.spacer;
    bootstrapBase.paddingBottom = bootstrapBase.spacer;
    bootstrapBase.paddingStart = bootstrapBase.spacer;
    bootstrapBase.paddingEnd = bootstrapBase.spacer;
    bootstrapBase.margin = bootstrapBase.spacer;
    bootstrapBase.marginX = bootstrapBase.spacer;
    bootstrapBase.marginY = bootstrapBase.spacer;
    bootstrapBase.marginTop = bootstrapBase.spacer;
    bootstrapBase.marginBottom = bootstrapBase.spacer;
    bootstrapBase.marginStart = bootstrapBase.spacer;
    bootstrapBase.marginEnd = bootstrapBase.spacer;
    bootstrapBase.gap = bootstrapBase.spacer;
    bootstrapBase.gutter = bootstrapBase.spacer;
    bootstrapBase.gutterX = bootstrapBase.spacer;
    bootstrapBase.gutterY = bootstrapBase.spacer;
    bootstrapBase.print = bootstrapBase.display;
    bootstrapBase.container = [true, "xs", ...bootstrapBase.viewport, "fluid"];
    bootstrapBase.zindex = [0, 1, 2, 3, "n1"];
    bootstrapBase.objectFit = [
        "contain",
        "cover",
        "fill",
        "scale",
        "none",
        "sm-contain",
        "sm-cover",
        "sm-fill",
        "sm-scale",
        "sm-none",
        "md-contain",
        "md-cover",
        "md-fill",
        "md-scale",
        "md-none",
        "lg-contain",
        "lg-cover",
        "lg-fill",
        "lg-scale",
        "lg-none",
        "xl-contain",
        "xl-cover",
        "xl-fill",
        "xl-scale",
        "xl-none",
        "xxl-contain",
        "xxl-cover",
        "xxl-fill",
        "xxl-scale",
        "xxl-none",
    ];
    bootstrapBase.ratio = ["1x1", "4x3", "16x9", "21x9"];
    bootstrapBase.fixed = ["top", "bottom"];
    bootstrapBase.sticky = [
        "top",
        "bottom",
        "sm-top",
        "md-top",
        "lg-top",
        "xl-top",
        "xxl-top",
        "sm-bottom",
        "md-bottom",
        "lg-bottom",
        "xl-bottom",
        "xxl-bottom",
    ];
    bootstrapBase.clearfix = trueonly;
    bootstrapBase.truncate = trueonly;
    bootstrapBase.vstack = trueonly;
    bootstrapBase.hstack = trueonly;
    bootstrapBase.visually = ["hidden", "hidden-focusable"];
})(bootstrapBase || (bootstrapBase = {}));
export class bootstrapAttachRule {
    constructor(d) {
        this.format = d.format;
        this.value = d.value;
        this.formatValue = d.formatValue;
        this.formatTrue = d.formatTrue;
        this.formatFalse = d.formatFalse;
        this.shared = d.shared;
    }
}
export const isBootstrapType = (valueToCheck, listOfPossible) => {
    if (listOfPossible && listOfPossible.length > 0) {
        return listOfPossible.includes(valueToCheck);
    }
    return false;
};
export const bsConsNoElemArg = (fn, arg) => {
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
export const bsConstArg = (prop, fn, arg) => {
    if (arg) {
        if (arg.length === 1) {
            if (isAttr(arg[0])) {
                return fn(arg[0]);
            }
            else {
                return fn({ [prop]: arg[0] });
            }
        }
        else if (arg.length === 2) {
            return fn(mergeObject({ [prop]: arg[1] }, arg[0]));
        }
        else {
            return fn({});
        }
    }
    else {
        return fn({});
    }
};
export const bsConstArgTag = (t1, t2, fn, arg) => {
    if (arg) {
        if (arg.length === 1) {
            if (isAttr(arg[0])) {
                return fn(arg[0]) ? t2 : t1;
            }
            else {
                return t1;
            }
        }
        else if (arg.length === 2) {
            return fn(arg[0]) ? t2 : t1;
        }
        else {
            return t1;
        }
    }
    else {
        return t1;
    }
};

import { keyOfType } from "./../fn/keyOfType.js";
import { addIntoClassList } from "../fn/addIntoClassList.js";
import { camel2Dash } from "../fn/camel2Dash.js";
import { dash2Camel } from "../fn/dash2Camel.js";
import { setting } from "../fn/setting.js";
import { attachFn, baseAttr } from "./index.js";

export namespace bsType {
	const base5 = [0, 1, 2, 3, 4, 5];
	const truefalse = [true, false] as const;
	const trueonly = [true] as const;
	const hundred = [100] as const;

	export const grid = [
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
	] as const;

	export const flex = [
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
	] as const;

	export const float = [
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
	] as const;

	export const order = [
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
	] as const;

	export const offset = grid;

	export const align = [
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
	] as const;

	export const alignContent = [
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
	] as const;

	export const justifyContent = [
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
	] as const;

	export const alignItem = align;
	export const alignSelf = align;

	export const spacer = [
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
	] as const;

	export const display = [
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
	] as const;

	export const rowCol = [
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
	] as const;

	export const color = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as const;

	export const positionView = [
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
	] as const;

	export const visible = truefalse;
	export const textWrap = truefalse;
	export const fontItalic = truefalse;

	export const bgGradient = trueonly;
	export const wordBreak = trueonly;
	export const monospace = trueonly;
	export const placeholder = trueonly;

	export const row = truefalse;

	export const col = [
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
	] as const;

	export const userSelect = ["all", "auto", "none"] as const;
	export const pointerEvent = ["auto", "none"] as const;
	export const position = ["static", "relative"] as const;
	export const overflow = ["auto", "hidden", "scroll"] as const;

	export const textAlign = positionView;
	export const verticalAlign = ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"] as const;

	export const opacity = [0, 25, 50, 75, 100] as const;
	export const bgOpacity = [10, 25, 50, 75, 100] as const;
	export const textOpacity = [25, 50, 75, 100] as const;

	export const btnColor = color;
	export const btnOutlineColor = color;
	export const alertColor = color;

	export const textBgColor = color;
	export const textColor = color;
	export const linkColor = color;
	export const bgColor = color;

	export const textTransform = ["lowercase", "uppercase", "capitalize"] as const;
	export const textDecoration = ["underline", "line-through", "none"] as const;
	export const lineHeight = [1, "sm", "base", "lg"] as const;

	export const fontSize = [1, 2, 3, 4, 5, 6] as const;
	export const fontWeight = ["bold", "bolder", "normal", "light", "lighter"] as const;

	export const top = [0, 50, 100] as const;
	export const bottom = top;
	export const start = top;
	export const end = top;
	export const tMiddle = [true, "x", "y"] as const;

	export const height = ["auto", 25, 50, 75, 100] as const;
	export const width = height;

	export const maxHeight = hundred;
	export const maxWidth = hundred;
	export const minViewHeight = hundred;
	export const minViewWidth = hundred;
	export const viewHeight = hundred;
	export const viewWidth = hundred;

	export const placeholderAnimation = ["glow", "wave"] as const;
	export const placeholderWeight = ["lg", "sm", "xs"] as const;

	export const shadow = [true, false, "none", "sm", "lg", "inset"] as const;
	export const borderNone = [true, "top", "end", "bottom", "start"] as const;
	export const border = [true, false, "top", "end", "bottom", "start"] as const;

	export const borderColor = color;
	export const borderOpacity = [10, 25, 50, 75] as const;
	export const borderWidth = base5;
	export const roundedNone = [true, false, "top", "end", "bottom", "start"] as const;
	export const rounded = [true, false, "top", "end", "bottom", "start", "circle", "pill"] as const;
	export const roundedSize = base5;

	export const padding = spacer;
	export const paddingX = spacer;
	export const paddingY = spacer;
	export const paddingTop = spacer;
	export const paddingBottom = spacer;
	export const paddingStart = spacer;
	export const paddingEnd = spacer;

	export const margin = spacer;
	export const marginX = spacer;
	export const marginY = spacer;
	export const marginTop = spacer;
	export const marginBottom = spacer;
	export const marginStart = spacer;
	export const marginEnd = spacer;

	export const gap = spacer;
	export const gutter = spacer;
	export const gutterX = spacer;
	export const gutterY = spacer;

	export const print = display;
	export const container = [true, "xs", "sm", "md", "lg", "xl", "xxl", "fluid"];
}

export namespace bs {
	export type spacer = typeof bsType.spacer;
	export type display = typeof bsType.display;
	export type flex = typeof bsType.flex;
	export type justifyContent = typeof bsType.justifyContent;
	export type align = typeof bsType.align;
	export type alignContent = typeof bsType.alignContent;
	export type alignItem = typeof bsType.align;
	export type alignSelf = typeof bsType.align;
	export type order = typeof bsType.order;
	export type grid = typeof bsType.grid;
	export type offset = typeof bsType.grid;
	export type rowCol = typeof bsType.rowCol;
	export type float = typeof bsType.float;
	export type color = typeof bsType.color;
	export type positionView = typeof bsType.positionView;

	export type visible = typeof bsType.visible;
	export type textWrap = typeof bsType.textWrap;
	export type fontItalic = typeof bsType.fontItalic;
	export type bgGradient = typeof bsType.bgGradient;
	export type wordBreak = typeof bsType.wordBreak;
	export type monospace = typeof bsType.monospace;
	export type placeholder = typeof bsType.placeholder;
	export type row = typeof bsType.row;
	export type col = typeof bsType.col;

	export type userSelect = typeof bsType.userSelect;
	export type pointerEvent = typeof bsType.pointerEvent;
	export type position = typeof bsType.position;
	export type overflow = typeof bsType.overflow;

	export type textAlign = typeof bsType.textAlign;
	export type verticalAlign = typeof bsType.verticalAlign;

	export type opacity = typeof bsType.opacity;
	export type bgOpacity = typeof bsType.bgOpacity;
	export type textOpacity = typeof bsType.textOpacity;

	export type btnColor = typeof bsType.btnColor;
	export type btnOutlineColor = typeof bsType.btnOutlineColor;
	export type alertColor = typeof bsType.alertColor;

	export type textBgColor = typeof bsType.textBgColor;
	export type textColor = typeof bsType.textColor;
	export type linkColor = typeof bsType.linkColor;
	export type bgColor = typeof bsType.bgColor;

	export type textTransform = typeof bsType.textTransform;
	export type textDecoration = typeof bsType.textDecoration;
	export type lineHeight = typeof bsType.lineHeight;

	export type fontSize = typeof bsType.fontSize;
	export type fontWeight = typeof bsType.fontWeight;

	export type top = typeof bsType.top;
	export type bottom = typeof bsType.bottom;
	export type start = typeof bsType.start;
	export type end = typeof bsType.end;
	export type tMiddle = typeof bsType.tMiddle;

	export type height = typeof bsType.height;
	export type width = typeof bsType.width;
	export type maxHeight = typeof bsType.maxHeight;
	export type maxWidth = typeof bsType.maxWidth;
	export type minViewHeight = typeof bsType.minViewHeight;
	export type minViewWidth = typeof bsType.minViewWidth;
	export type viewHeight = typeof bsType.viewHeight;
	export type viewWidth = typeof bsType.viewWidth;

	export type placeholderAnimation = typeof bsType.placeholderAnimation;
	export type placeholderWeight = typeof bsType.placeholderWeight;

	export type shadow = typeof bsType.shadow;
	export type borderNone = typeof bsType.borderNone;
	export type border = typeof bsType.border;

	export type borderColor = typeof bsType.borderColor;
	export type borderOpacity = typeof bsType.borderOpacity;
	export type borderWidth = typeof bsType.borderWidth;
	export type roundedNone = typeof bsType.roundedNone;
	export type rounded = typeof bsType.rounded;
	export type roundedSize = typeof bsType.roundedSize;

	export type padding = typeof bsType.padding;
	export type paddingX = typeof bsType.paddingX;
	export type paddingY = typeof bsType.paddingY;
	export type paddingTop = typeof bsType.paddingTop;
	export type paddingBottom = typeof bsType.paddingBottom;
	export type paddingStart = typeof bsType.paddingStart;
	export type paddingEnd = typeof bsType.paddingEnd;

	export type margin = typeof bsType.margin;
	export type marginX = typeof bsType.marginX;
	export type marginY = typeof bsType.marginY;
	export type marginTop = typeof bsType.marginTop;
	export type marginBottom = typeof bsType.marginBottom;
	export type marginStart = typeof bsType.marginStart;
	export type marginEnd = typeof bsType.marginEnd;

	export type gap = typeof bsType.gap;
	export type gutter = typeof bsType.gutter;
	export type gutterX = typeof bsType.gutterX;
	export type gutterY = typeof bsType.gutterY;

	export type print = typeof bsType.print;
	export type container = typeof bsType.container;
}

export type bsRuleType = {
	format?: string | null;
	value?: (string | number | boolean)[] | null;
	formatValue?: string | null;
	formatTrue?: string | null;
	formatFalse?: string | null;
	shared?: boolean;
};

export class bsRule implements bsRuleType {
	constructor(
		public format?: string | null,
		public value?: (string | number | boolean)[],
		public formatValue?: string | null,
		public formatTrue?: string | null,
		public formatFalse?: string | null,
		public shared: boolean = false
	) {}
}
const db = {
	userSelect: new bsRule("user-select-$1", bsType.userSelect.concat(), null, null, null, true),
	pointerEvent: new bsRule("pe-$1", bsType.pointerEvent.concat()),
	position: new bsRule("position-$1", bsType.position.concat(), null, null, null, true),
	overflow: new bsRule("overflow-$1", bsType.overflow.concat(), null, null, null, true),

	textAlign: new bsRule("text-$1", bsType.textAlign.concat(), null, null, null, true),
	verticalAlign: new bsRule("align-$1", bsType.verticalAlign.concat(), null, null, null, true),

	opacity: new bsRule("opacity-$1", bsType.opacity.concat(), null, null, null, true),
	bgOpacity: new bsRule("bg-opacity-$1", bsType.bgOpacity.concat()),
	textOpacity: new bsRule("text-opacity-$1", bsType.textOpacity.concat()),

	btnColor: new bsRule("btn-$1", bsType.btnColor.concat()),
	btnOutlineColor: new bsRule("btn-outline-$1", bsType.btnOutlineColor.concat()),
	alertColor: new bsRule("alert-$1", bsType.alertColor.concat()),

	textBgColor: new bsRule("text-bg-$1", bsType.textBgColor.concat()),
	textColor: new bsRule("text-$1", bsType.textColor.concat()),
	linkColor: new bsRule("link-$1", bsType.linkColor.concat()),
	bgColor: new bsRule("bg-$1", bsType.bgColor.concat()),

	textTransform: new bsRule("text-$1", bsType.textTransform.concat(), null, null, null, true),
	textDecoration: new bsRule("text-decoration-$1", bsType.textDecoration.concat(), null, null, null, true),
	lineHeight: new bsRule("lh-$1", bsType.lineHeight.concat(), null, null, null, true),

	fontSize: new bsRule("fs-$1", bsType.fontSize.concat(), null, null, null, true),
	fontWeight: new bsRule("fw-$1", bsType.fontWeight.concat(), null, null, null, true),

	top: new bsRule("top-$1", bsType.top.concat(), null, null, null, true),
	bottom: new bsRule("bottom-$1", bsType.bottom.concat(), null, null, null, true),
	start: new bsRule("start-$1", bsType.start.concat()),
	end: new bsRule("end-$1", bsType.end.concat()),
	tMiddle: new bsRule("translate-middle-$1", bsType.tMiddle.concat(), null, "translate-middle"),

	height: new bsRule("h-$1", bsType.height.concat(), null, null, null, true),
	width: new bsRule("w-$1", bsType.width.concat(), null, null, null, true),
	maxHeight: new bsRule("mh-$1", bsType.maxHeight.concat(), null, null, null, true),
	maxWidth: new bsRule("mw-$1", bsType.maxWidth.concat(), null, null, null, true),
	minViewHeight: new bsRule("min-vh-$1", bsType.minViewHeight.concat()),
	minViewWidth: new bsRule("min-vw-$1", bsType.minViewWidth.concat()),
	viewHeight: new bsRule("vh-$1", bsType.viewHeight.concat()),
	viewWidth: new bsRule("vw-$1", bsType.viewWidth.concat()),

	placeholder: new bsRule(null, bsType.placeholder.concat(), null, "placeholder"),
	placeholderAnimation: new bsRule("placeholder-$1", bsType.placeholderAnimation.concat()),
	placeholderWeight: new bsRule("placeholder-$1", bsType.placeholderWeight.concat(), "placeholder $1"),

	shadow: new bsRule("shadow-$1", bsType.shadow.concat(), null, "shadow", "shadow-none"),

	border: new bsRule("border-$1", bsType.border.concat(), null, "border", "border-0", true),
	borderNone: new bsRule("border border-$1-0", bsType.borderNone.concat(), null, "border-0"),
	borderColor: new bsRule("border-$1", bsType.borderColor.concat(), "border", null, null, true),
	borderOpacity: new bsRule("border-opacity-$1", bsType.borderOpacity.concat(), "border"),
	borderWidth: new bsRule("border-$1", bsType.borderWidth.concat(), "border", null, null, true),

	rounded: new bsRule("rounded-$1", bsType.rounded.concat(), null, "rounded", "rounded-0"),
	roundedNone: new bsRule("rounded-$1-0", bsType.roundedNone.concat(), "rounded", "rounded", "rounded-0"),
	roundedSize: new bsRule("rounded-$1", bsType.roundedSize.concat(), "rounded"),

	padding: new bsRule("p-$1", bsType.padding.concat(), null, null, null, true),
	paddingX: new bsRule("px-$1", bsType.paddingX.concat()),
	paddingY: new bsRule("py-$1", bsType.paddingY.concat()),
	paddingTop: new bsRule("pt-$1", bsType.paddingTop.concat(), null, null, null, true),
	paddingBottom: new bsRule("pb-$1", bsType.paddingBottom.concat(), null, null, null, true),
	paddingStart: new bsRule("ps-$1", bsType.paddingStart.concat()),
	paddingEnd: new bsRule("pe-$1", bsType.paddingEnd.concat()),

	margin: new bsRule("m-$1", bsType.margin.concat(), null, null, null, true),
	marginX: new bsRule("mx-$1", bsType.marginX.concat()),
	marginY: new bsRule("my-$1", bsType.marginY.concat()),
	marginTop: new bsRule("mt-$1", bsType.marginTop.concat(), null, null, null, true),
	marginBottom: new bsRule("mb-$1", bsType.marginBottom.concat(), null, null, null, true),
	marginStart: new bsRule("ms-$1", bsType.marginStart.concat()),
	marginEnd: new bsRule("me-$1", bsType.marginEnd.concat()),

	gap: new bsRule("gap-$1", bsType.gap.concat()),
	gutter: new bsRule("g-$1", bsType.gutter.concat()),
	gutterX: new bsRule("gx-$1", bsType.gutterX.concat()),
	gutterY: new bsRule("gy-$1", bsType.gutterY.concat()),

	display: new bsRule("d-$1", bsType.display.concat(), null, null, null, true),
	print: new bsRule("d-print-$1", bsType.print.concat()),
	container: new bsRule("container-$1", bsType.container.concat(), null, "container"),

	flex: new bsRule("flex-$1", bsType.flex.concat(), null, null, null, true),
	float: new bsRule("float-$1", bsType.float.concat()),
	order: new bsRule("order-$1", bsType.order.concat(), null, null, null, true),
	offset: new bsRule("offset-$1", bsType.offset.concat()),

	alignContent: new bsRule("align-content-$1", bsType.alignContent.concat(), null, null, null, true),
	justifyContent: new bsRule("justify-content-$1", bsType.justifyContent.concat(), null, null, null, true),
	alignItem: new bsRule("align-items-$1", bsType.alignItem.concat(), null, null, null, true),
	alignSelf: new bsRule("align-self-$1", bsType.alignSelf.concat(), null, null, null, true),

	visible: new bsRule(null, bsType.visible.concat(), null, "visible", "invisible"),
	textWrap: new bsRule(null, bsType.textWrap.concat(), null, "text-wrap", "text-nowrap"),
	fontItalic: new bsRule(null, bsType.fontItalic.concat(), null, "fst-italic", "fst-normal"),

	bgGradient: new bsRule(null, bsType.bgGradient.concat(), null, "bg-gradient"),
	wordBreak: new bsRule(null, bsType.wordBreak.concat(), null, "text-break", null, true),
	monospace: new bsRule(null, bsType.monospace.concat(), null, "font-monospace"),

	row: new bsRule(null, bsType.row.concat(), null, "row"),
	col: new bsRule("col-$1", bsType.col.concat(), null, "col"),
	rowCol: new bsRule("row-cols-$1", bsType.rowCol.concat()),
};

let allowProp: (string | undefined)[] = [];

const allow = (key: string): string | null => {
	if (allowProp.length === 0) {
		let t = Object.keys(db);
		allowProp = [
			...t,
			...t
				.map((i) => {
					let j = camel2Dash(i);
					if (j !== i) {
						return j;
					}
				})
				.filter(Boolean),
		];
	}

	if (allowProp.indexOf(key) > -1) {
		let k = dash2Camel(key);
		if (k !== key) {
			return k;
		} else {
			return key;
		}
	}

	return null;
};

export const attachBootstrap: attachFn = (key, elem, attr) => {
	let a_key = allow(key);
	if (a_key !== null) {
		let k = keyOfType(key, attr);
		let a = keyOfType(a_key, db);

		if (!Array.isArray(attr[k])) {
			let i = attr[k];
			if (db[a].value!.findIndex((j) => i === j) > -1) {
				if (db[a].formatValue) {
					elem = addIntoClassList(elem, db[a].formatValue!);
				}

				if (i === true) {
					if (db[a].formatTrue) {
						elem = addIntoClassList(elem, db[a].formatTrue!);
					}
				} else if (i === false) {
					if (db[a].formatFalse) {
						elem = addIntoClassList(elem, db[a].formatFalse!);
					}
				} else {
					if (db[a].format) {
						elem = addIntoClassList(elem, db[a].format!.replace(/\$1/g, i!.toString()));
					}
				}

				delete attr[k];
			} else {
				if (setting.DEBUG) console.warn(`${a}:"${i}" is not supported value for bootstrap property`);
			}
		} else {
			let delAttr = false;
			(attr[k] as (string | number | boolean)[]).forEach((i) => {
				if (db[a].value!.findIndex((j) => i === j) > -1) {
					if (db[a].formatValue) {
						elem = addIntoClassList(elem, db[a].formatValue!);
					}

					if (i === true) {
						if (db[a].formatTrue) {
							elem = addIntoClassList(elem, db[a].formatTrue!);
						}
					} else if (i === false) {
						if (db[a].formatFalse) {
							elem = addIntoClassList(elem, db[a].formatFalse!);
						}
					} else {
						if (db[a].format) {
							elem = addIntoClassList(elem, db[a].format!.replace(/\$1/g, i.toString()));
						}
					}

					delAttr = true;
				} else {
					delAttr = false;
					if (setting.DEBUG) console.warn(`${a}:"${i}" is not supported value for bootstrap property`);
				}
			});

			if (delAttr) {
				delete attr[k];
			}
		}
	}

	return { attr, elem };
};

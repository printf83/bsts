import { mergeObject } from "./mergeObject.js";
import { IAttr, isAttr } from "./tag.js";

export namespace bootstrapBase {
	const base5 = [0, 1, 2, 3, 4, 5] as const;
	const truefalse = [true, false] as const;
	const trueonly = [true] as const;
	const hundred = [100] as const;

	export const theme = ["dark", "light", "auto"] as const;

	export const viewport = ["sm", "md", "lg", "xl", "xxl"] as const;

	export const baseGrid = [
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

	export const offset = baseGrid;

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
		// "sm",
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
		// "md",
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
		// "lg",
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
		// "xl",
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
		// "xxl",
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

	export const colorEmphasis = [
		"primary-emphasis",
		"secondary-emphasis",
		"success-emphasis",
		"danger-emphasis",
		"warning-emphasis",
		"info-emphasis",
		"light-emphasis",
		"dark-emphasis",
	] as const;

	export const colorSubtle = [
		"primary-subtle",
		"secondary-subtle",
		"success-subtle",
		"danger-subtle",
		"warning-subtle",
		"info-subtle",
		"light-subtle",
		"dark-subtle",
	] as const;

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
	export const textBreak = trueonly;
	export const monospace = trueonly;
	export const loadingPlaceholder = trueonly;

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
		"sm",
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
		"md",
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
		"lg",
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
		"xl",
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
		"xxl",
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
	export const position = ["static", "relative", "absolute", "fixed", "sticky"] as const;
	export const overflow = ["auto", "hidden", "scroll", "visible"] as const;

	export const textAlign = positionView;
	export const verticalAlign = ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"] as const;

	export const opacity = [0, 25, 50, 75, 100] as const;
	export const bgOpacity = [10, 25, 50, 75, 100] as const;
	export const textOpacity = [25, 50, 75, 100] as const;

	export const btnColor = color;
	export const btnOutlineColor = color;
	export const alertColor = color;

	export const focusRing = [...color, true] as const;

	export const textBgColor = color;
	export const textColor = [
		...color,
		...colorEmphasis,
		"body",
		"body-emphasis",
		"body-secondary",
		"body-tertiary",
		"white",
		"black",
		"dark",
		"reset",
		"muted" /** @deprecated text-muted utility has been deprecated as of v5.3.0 */,
	] as const;

	export const bgColor = [
		...color,
		...colorSubtle,
		"body",
		"body-secondary",
		"body-tertiary",
		"black",
		"white",
		"transparent",
	] as const;
	export const linkColor = [...color, "body-emphasis"] as const;
	export const linkUnderlineColor = linkColor;
	export const linkOffset = [1, 2, 3] as const;
	export const linkOffsetHover = linkOffset;
	export const linkOpacity = [10, 25, 50, 75, 100] as const;
	export const linkUnderline = trueonly;
	export const linkUnderlineOpacity = [0, 10, 25, 50, 75, 100] as const;
	export const linkUnderlineOpacityHover = linkUnderlineOpacity;
	export const linkOpacityHover = linkOpacity;
	export const linkIcon = [true, "hover"] as const;

	export const dropdownDirection = ["up", "start", "end"] as const;

	export const textTransform = ["lowercase", "uppercase", "capitalize"] as const;
	export const textDecoration = ["underline", "line-through", "none"] as const;
	export const lineHeight = [1, "sm", "base", "lg"] as const;

	export const fontSize = [1, 2, 3, 4, 5, 6] as const;
	export const fontDisplay = fontSize;
	export const fontWeight = ["bold", "bolder", "semibold", "medium", "normal", "light", "lighter"] as const;

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

	export const loadingPlaceholderAnimation = ["glow", "wave"] as const;
	export const loadingPlaceholderWeight = ["lg", "sm", "xs"] as const;

	export const shadow = [true, false, "none", "sm", "lg", "inset"] as const;
	export const borderNone = [true, "top", "end", "bottom", "start"] as const;
	export const border = [true, false, "top", "end", "bottom", "start"] as const;

	export const borderColor = [...color, ...colorSubtle, "black", "white"] as const;
	export const borderOpacity = [10, 25, 50, 75] as const;
	export const borderWidth = base5;
	export const roundedNone = [true, false, "top", "end", "bottom", "start"] as const;
	export const rounded = [
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

		"top-circle",
		"end-circle",
		"bottom-circle",
		"start-circle",

		"top-pill",
		"end-pill",
		"bottom-pill",
		"start-pill",

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
	] as const;
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
	export const container = [true, "xs", ...viewport, "fluid"] as const;

	export const zindex = [0, 1, 2, 3, "n1"] as const;
	export const objectFit = [
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
	] as const;

	export const ratio = ["1x1", "4x3", "16x9", "21x9"] as const;
	export const fixed = ["top", "bottom"] as const;
	export const sticky = [
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
	export const clearfix = trueonly;
	export const truncate = trueonly;
	export const vstack = trueonly;
	export const hstack = trueonly;
	export const visually = ["hidden", "hidden-focusable"] as const;
	export const h = [1, 2, 3, 4, 5, 6];
	export const small = truefalse;
}

export namespace bootstrapType {
	export type theme = typeof bootstrapBase.theme;

	export type viewport = typeof bootstrapBase.viewport;
	export type spacer = typeof bootstrapBase.spacer;
	export type display = typeof bootstrapBase.display;
	export type flex = typeof bootstrapBase.flex;
	export type justifyContent = typeof bootstrapBase.justifyContent;
	export type align = typeof bootstrapBase.align;
	export type alignContent = typeof bootstrapBase.alignContent;
	export type alignItem = typeof bootstrapBase.align;
	export type alignSelf = typeof bootstrapBase.align;
	export type order = typeof bootstrapBase.order;
	export type baseGrid = typeof bootstrapBase.baseGrid;
	export type offset = typeof bootstrapBase.baseGrid;
	export type rowCol = typeof bootstrapBase.rowCol;
	export type float = typeof bootstrapBase.float;
	export type color = typeof bootstrapBase.color;
	export type positionView = typeof bootstrapBase.positionView;

	export type visible = typeof bootstrapBase.visible;
	export type textWrap = typeof bootstrapBase.textWrap;
	export type fontItalic = typeof bootstrapBase.fontItalic;
	export type bgGradient = typeof bootstrapBase.bgGradient;
	export type textBreak = typeof bootstrapBase.textBreak;
	export type monospace = typeof bootstrapBase.monospace;
	export type loadingPlaceholder = typeof bootstrapBase.loadingPlaceholder;
	export type row = typeof bootstrapBase.row;
	export type col = typeof bootstrapBase.col;

	export type userSelect = typeof bootstrapBase.userSelect;
	export type pointerEvent = typeof bootstrapBase.pointerEvent;
	export type position = typeof bootstrapBase.position;
	export type overflow = typeof bootstrapBase.overflow;

	export type textAlign = typeof bootstrapBase.textAlign;
	export type verticalAlign = typeof bootstrapBase.verticalAlign;

	export type opacity = typeof bootstrapBase.opacity;
	export type bgOpacity = typeof bootstrapBase.bgOpacity;
	export type textOpacity = typeof bootstrapBase.textOpacity;

	export type textBgColor = typeof bootstrapBase.textBgColor;
	export type textColor = typeof bootstrapBase.textColor;
	export type bgColor = typeof bootstrapBase.bgColor;

	export type linkColor = typeof bootstrapBase.linkColor;
	export type linkUnderlineColor = typeof bootstrapBase.linkUnderlineColor;
	export type linkOffset = typeof bootstrapBase.linkOffset;
	export type linkOffsetHover = typeof bootstrapBase.linkOffsetHover;
	export type linkOpacity = typeof bootstrapBase.linkOpacity;
	export type linkUnderline = typeof bootstrapBase.linkUnderline;
	export type linkUnderlineOpacity = typeof bootstrapBase.linkUnderlineOpacity;
	export type linkUnderlineOpacityHover = typeof bootstrapBase.linkUnderlineOpacityHover;
	export type linkOpacityHover = typeof bootstrapBase.linkOpacityHover;
	export type linkIcon = typeof bootstrapBase.linkIcon;

	export type textTransform = typeof bootstrapBase.textTransform;
	export type textDecoration = typeof bootstrapBase.textDecoration;
	export type lineHeight = typeof bootstrapBase.lineHeight;

	export type fontSize = typeof bootstrapBase.fontSize;
	export type fontDisplay = typeof bootstrapBase.fontDisplay;
	export type fontWeight = typeof bootstrapBase.fontWeight;

	export type top = typeof bootstrapBase.top;
	export type bottom = typeof bootstrapBase.bottom;
	export type start = typeof bootstrapBase.start;
	export type end = typeof bootstrapBase.end;
	export type tMiddle = typeof bootstrapBase.tMiddle;

	export type height = typeof bootstrapBase.height;
	export type width = typeof bootstrapBase.width;
	export type maxHeight = typeof bootstrapBase.maxHeight;
	export type maxWidth = typeof bootstrapBase.maxWidth;
	export type minViewHeight = typeof bootstrapBase.minViewHeight;
	export type minViewWidth = typeof bootstrapBase.minViewWidth;
	export type viewHeight = typeof bootstrapBase.viewHeight;
	export type viewWidth = typeof bootstrapBase.viewWidth;

	export type loadingPlaceholderAnimation = typeof bootstrapBase.loadingPlaceholderAnimation;
	export type loadingPlaceholderWeight = typeof bootstrapBase.loadingPlaceholderWeight;

	export type shadow = typeof bootstrapBase.shadow;
	export type borderNone = typeof bootstrapBase.borderNone;
	export type border = typeof bootstrapBase.border;

	export type borderColor = typeof bootstrapBase.borderColor;
	export type borderOpacity = typeof bootstrapBase.borderOpacity;
	export type borderWidth = typeof bootstrapBase.borderWidth;
	export type roundedNone = typeof bootstrapBase.roundedNone;
	export type rounded = typeof bootstrapBase.rounded;
	export type roundedSize = typeof bootstrapBase.roundedSize;

	export type padding = typeof bootstrapBase.padding;
	export type paddingX = typeof bootstrapBase.paddingX;
	export type paddingY = typeof bootstrapBase.paddingY;
	export type paddingTop = typeof bootstrapBase.paddingTop;
	export type paddingBottom = typeof bootstrapBase.paddingBottom;
	export type paddingStart = typeof bootstrapBase.paddingStart;
	export type paddingEnd = typeof bootstrapBase.paddingEnd;

	export type margin = typeof bootstrapBase.margin;
	export type marginX = typeof bootstrapBase.marginX;
	export type marginY = typeof bootstrapBase.marginY;
	export type marginTop = typeof bootstrapBase.marginTop;
	export type marginBottom = typeof bootstrapBase.marginBottom;
	export type marginStart = typeof bootstrapBase.marginStart;
	export type marginEnd = typeof bootstrapBase.marginEnd;

	export type gap = typeof bootstrapBase.gap;
	export type gutter = typeof bootstrapBase.gutter;
	export type gutterX = typeof bootstrapBase.gutterX;
	export type gutterY = typeof bootstrapBase.gutterY;

	export type print = typeof bootstrapBase.print;
	export type container = typeof bootstrapBase.container;

	export type zindex = typeof bootstrapBase.zindex;
	export type objectFit = typeof bootstrapBase.objectFit;
	export type ratio = typeof bootstrapBase.ratio;
	export type fixed = typeof bootstrapBase.fixed;
	export type sticky = typeof bootstrapBase.sticky;
	export type clearfix = typeof bootstrapBase.clearfix;
	export type truncate = typeof bootstrapBase.truncate;
	export type visually = typeof bootstrapBase.visually;
	export type vstack = typeof bootstrapBase.vstack;
	export type hstack = typeof bootstrapBase.hstack;
	export type h = typeof bootstrapBase.h;
	export type small = typeof bootstrapBase.small;
	export type focusRing = typeof bootstrapBase.focusRing;
}

export interface IBootstrapAttachRule {
	format?: string;
	value?: (string | number | boolean)[];
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;
	shared?: boolean;
}

export class bootstrapAttachRule implements IBootstrapAttachRule {
	format?: string;
	value?: (string | number | boolean)[];
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;
	shared?: boolean;

	constructor(d: IBootstrapAttachRule) {
		this.format = d.format;
		this.value = d.value;
		this.formatValue = d.formatValue;
		this.formatTrue = d.formatTrue;
		this.formatFalse = d.formatFalse;
		this.shared = d.shared;
	}
}

export interface bootstrapRuleDB {
	[key: string]: bootstrapAttachRule;
}

export const isBootstrapType = <T extends string | number | boolean>(
	valueToCheck: string | number | boolean,
	listOfPossible: (string | number | boolean)[]
): valueToCheck is T => {
	if (listOfPossible && listOfPossible.length > 0) {
		return listOfPossible.indexOf(valueToCheck) > -1;
	}
	return false;
};

export const bsConsNoElemArg = <T extends IAttr>(fn: <T extends IAttr>(attr: T) => IAttr, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			return fn(arg[0] as T);
		} else {
			return fn({});
		}
	} else {
		return fn({});
	}
};

export const bsConstArg = <T extends IAttr>(prop: string, fn: <T extends IAttr>(attr: T) => IAttr, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return fn(arg[0] as T);
			} else {
				return fn({ [prop]: arg[0] } as T);
			}
		} else if (arg.length === 2) {
			return fn(mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T));
		} else {
			return fn({} as T);
		}
	} else {
		return fn({} as T);
	}
};

export const bsConstArgTag = <T extends IAttr>(
	prop: string,
	t1: string,
	t2: string,
	fn: (i: T) => boolean,
	arg?: any[]
) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return fn(arg[0]) ? t2 : t1;
			} else {
				return t1;
			}
		} else if (arg.length === 2) {
			return fn(mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T)) ? t2 : t1;
		} else {
			return t1;
		}
	} else {
		return t1;
	}
};

// export const bsConstArgTag = <T extends IAttr>(t1: string, t2: string, fn: (i: T) => boolean, arg?: any[]) => {
// 	if (arg) {
// 		if (arg.length === 1) {
// 			if (isAttr<T>(arg[0])) {
// 				return fn(arg[0]) ? t2 : t1;
// 			} else {
// 				return t1;
// 			}
// 		} else if (arg.length === 2) {
// 			return fn(arg[0]) ? t2 : t1;
// 		} else {
// 			return t1;
// 		}
// 	} else {
// 		return t1;
// 	}};

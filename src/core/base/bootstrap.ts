// export namespace bootstrapLTBase {
// 	type base5 = 0 | 1 | 2 | 3 | 4 | 5;
// 	type base12 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
// 	type truefalse = true | false;
// 	type trueonly = true;
// 	type hundred = 100;

// 	type viewportPosition = "sm" | "md" | "lg" | "xl";
// 	type viewport = viewportPosition | "xxl";
// 	type baseFlex =
// 		| "row"
// 		| "row-reverse"
// 		| "column"
// 		| "column-reverse"
// 		| "wrap"
// 		| "wrap-reverse"
// 		| "nowrap"
// 		| "fill"
// 		| "shrink-0"
// 		| "shrink-1"
// 		| "grow-0"
// 		| "grow-1";

// 	type baseFloat = "start" | "end" | "none";
// 	type baseOrder = "first" | base12 | "last";
// 	type baseAlign = "start" | "end" | "center" | "baseline" | "stretch";
// 	type baseAlignContent = "start" | "end" | "center" | "between" | "around" | "stretch";
// 	type baseJustifyContent = "start" | "end" | "center" | "between" | "around" | "evenly";
// 	type baseSpacer = "auto" | base5;
// 	type baseDisplay =
// 		| "none"
// 		| "inline"
// 		| "inline-block"
// 		| "block"
// 		| "grid"
// 		| "table"
// 		| "table-cell"
// 		| "table-row"
// 		| "flex"
// 		| "inline-flex";
// 	type baseRowCol = "auto" | base12;
// 	type baseColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

// 	type baseUserSelect = "all" | "auto" | "none";
// 	type basePointerEvent = "auto" | "none";
// 	type basePosition = "static" | "relative";
// 	type baseOverflow = "auto" | "hidden" | "scroll";
// 	type baseVerticalAlign = "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom";
// 	type baseOpacity = 0 | 25 | 50 | 75 | 100;
// 	type baseBgOpacity = 10 | 25 | 50 | 75 | 100;
// 	type baseTextOpacity = 25 | 50 | 75 | 100;

// 	export type grid = base12 | `${viewport}-${base12}`;
// 	export type flex = baseFlex | `${viewport}-${baseFlex}`;
// 	export type float = baseFloat | `${viewport}-${baseFloat}`;
// 	export type order = baseOrder | `${viewport}-${baseOrder}`;
// 	export type offset = grid;
// 	export type align = baseAlign | `${viewport}-${baseAlign}`;
// 	export type alignContent = baseAlignContent | `${viewport}-${baseAlignContent}`;
// 	export type justifyContent = baseJustifyContent | `${viewport}-${baseJustifyContent}`;
// 	export type alignItem = align;
// 	export type alignSelf = align;
// 	export type spacer = baseSpacer | `${viewport}-${baseSpacer}`;
// 	export type display = baseDisplay | `${viewport}-${baseDisplay}`;
// 	export type rowCol = baseRowCol | `${viewport}-${baseRowCol}`;
// 	export type color = baseColor;
// 	export type positionView = baseFloat | `${viewportPosition}-${baseFloat}`;
// 	export type visible = truefalse;
// 	export type textWrap = truefalse;
// 	export type fontItalic = truefalse;

// 	export type bgGradient = trueonly;
// 	export type wordBreak = trueonly;
// 	export type monospace = trueonly;
// 	export type placeholder = trueonly;

// 	export type row = truefalse;
// 	export type col = true | baseRowCol | `${viewport}-${baseRowCol}`;
// 	export type userSelect = baseUserSelect;
// 	export type pointerEvent = basePointerEvent;
// 	export type position = basePosition;
// 	export type overflow = baseOverflow;

// 	export type textAlign = positionView;
// 	export type verticalAlign = baseVerticalAlign;

// 	export type opacity = baseOpacity;
// 	export type bgOpacity = baseBgOpacity;
// 	export type textOpacity = baseTextOpacity;

// 	export type btnColor = color;
// 	export type btnOutlineColor = color;
// 	export type alertColor = color;

// 	export type textBgColor = color;
// 	export type textColor = color;
// 	export type linkColor = color;
// 	export type bgColor = color;

// 	export type textTransform = "lowercase" | "uppercase" | "capitalize";
// 	export type textDecoration = "underline" | "line-through" | "none";
// 	export type lineHeight = 1 | "sm" | "base" | "lg";

// 	export type fontSize = 1 | 2 | 3 | 4 | 5 | 6;
// 	export type fontDisplay = fontSize;
// 	export type fontWeight = "bold" | "bolder" | "normal" | "light" | "lighter";

// 	export type top = 0 | 50 | 100;
// 	export type bottom = top;
// 	export type start = top;
// 	export type end = top;
// 	export type tMiddle = true | "x" | "y";

// 	export type height = "auto" | 25 | 50 | 75 | 100;
// 	export type width = height;

// 	export type maxHeight = hundred;
// 	export type maxWidth = hundred;
// 	export type minViewHeight = hundred;
// 	export type minViewWidth = hundred;
// 	export type viewHeight = hundred;
// 	export type viewWidth = hundred;

// 	export type placeholderAnimation = "glow" | "wave";
// 	export type placeholderWeight = "lg" | "sm" | "xs";

// 	export type shadow = true | false | "none" | "sm" | "lg" | "inset";
// 	export type borderNone = true | "top" | "end" | "bottom" | "start";
// 	export type border = false | borderNone;

// 	export type borderColor = color;
// 	export type borderOpacity = 10 | 25 | 50 | 75;
// 	export type borderWidth = base5;
// 	export type roundedNone = border;
// 	export type rounded = roundedNone | "circle" | "pill";
// 	export type roundedSize = base5;

// 	export type padding = spacer;
// 	export type paddingX = spacer;
// 	export type paddingY = spacer;
// 	export type paddingTop = spacer;
// 	export type paddingBottom = spacer;
// 	export type paddingStart = spacer;
// 	export type paddingEnd = spacer;

// 	export type margin = spacer;
// 	export type marginX = spacer;
// 	export type marginY = spacer;
// 	export type marginTop = spacer;
// 	export type marginBottom = spacer;
// 	export type marginStart = spacer;
// 	export type marginEnd = spacer;

// 	export type gap = spacer;
// 	export type gutter = spacer;
// 	export type gutterX = spacer;
// 	export type gutterY = spacer;

// 	export type print = display;
// 	export type container = true | "xs" | viewport | "fluid";
// }

export namespace bootstrapBase {
	const base5 = [0, 1, 2, 3, 4, 5] as const;
	const truefalse = [true, false] as const;
	const trueonly = [true] as const;
	const hundred = [100] as const;

	export const viewport = ["sm", "md", "lg", "xl", "xxl"] as const;

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

	export const color = [
		"primary",
		"secondary",
		"success",
		"danger",
		"warning",
		"info",
		"light",
		"dark",
		"link",
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
	export const fontDisplay = fontSize;
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

export namespace bootstrapType {
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
	export type grid = typeof bootstrapBase.grid;
	export type offset = typeof bootstrapBase.grid;
	export type rowCol = typeof bootstrapBase.rowCol;
	export type float = typeof bootstrapBase.float;
	export type color = typeof bootstrapBase.color;
	export type positionView = typeof bootstrapBase.positionView;

	export type visible = typeof bootstrapBase.visible;
	export type textWrap = typeof bootstrapBase.textWrap;
	export type fontItalic = typeof bootstrapBase.fontItalic;
	export type bgGradient = typeof bootstrapBase.bgGradient;
	export type wordBreak = typeof bootstrapBase.wordBreak;
	export type monospace = typeof bootstrapBase.monospace;
	export type placeholder = typeof bootstrapBase.placeholder;
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
	export type linkColor = typeof bootstrapBase.linkColor;
	export type bgColor = typeof bootstrapBase.bgColor;

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

	export type placeholderAnimation = typeof bootstrapBase.placeholderAnimation;
	export type placeholderWeight = typeof bootstrapBase.placeholderWeight;

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
}

export interface IBootstrapAttachRule {
	format?: string | null;
	value?: (string | number | boolean)[] | null;
	formatValue?: string | null;
	formatTrue?: string | null;
	formatFalse?: string | null;
	shared?: boolean;
}

export class bootstrapAttachRule implements IBootstrapAttachRule {
	constructor(
		public format?: string | null,
		public value?: (string | number | boolean)[],
		public formatValue?: string | null,
		public formatTrue?: string | null,
		public formatFalse?: string | null,
		public shared: boolean = false
	) {}
}

export interface bootstrapRuleDB {
	[key: string]: bootstrapAttachRule;
}

export const isBootstrapType = (value: string | number | boolean, type: any[]): boolean => {
	let listOfPossible = type.concat();
	if (listOfPossible && listOfPossible.length > 0) {
		return listOfPossible.includes(value);
	}
	return false;
};

import { mergeObject } from "./mergeObject.js";
import { IAttr, isAttr } from "./tag.js";
import { addClassIntoElement } from "./addClassIntoElement.js";
import { IAttachFn } from "./attach/_index.js";
import { keyOfType } from "./keyOfType.js";

export namespace bootstrapType {
	type VIEWPORT = "sm" | "md" | "lg" | "xl" | "xxl";
	type SPACER = "auto" | 0 | 1 | 2 | 3 | 4 | 5;
	type GRID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	type ROWCOL = "auto" | GRID;
	type FLEX =
		| "row"
		| "row-reverse"
		| "column"
		| "column-reverse"
		| "wrap"
		| "wrap-reverse"
		| "nowrap"
		| "fill"
		| "shrink-0"
		| "shrink-1"
		| "grow-0"
		| "grow-1";
	type FLOAT = "start" | "end" | "none";
	type ORDER = "first" | "last" | GRID;
	type ALIGN = "start" | "end" | "center" | "baseline" | "stretch";
	type ALIGNCONTENT = "start" | "end" | "center" | "between" | "around" | "stretch";
	type JUSTIFYCONTENT = "start" | "end" | "center" | "between" | "around" | "evenly";
	type DISPLAY =
		| "none"
		| "inline"
		| "inline-block"
		| "block"
		| "grid"
		| "table"
		| "table-cell"
		| "table-row"
		| "flex"
		| "inline-flex";
	type POSITIONVIEW = "start" | "center" | "end";

	type COLOR = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
	type COLOREMPHASIS = `${COLOR}-emphasis`;
	type COLORSUBTLE = `${COLOR}-subtle`;
	type BODYCOLOR = "body" | "body-secondary" | "body-tertiary";
	type OTHERCOLOR = "white" | "black";
	type BODYTEXTCOLOR = BODYCOLOR | OTHERCOLOR | "body-emphasis";
	type OPACITY = 0 | 25 | 50 | 75 | 100;
	type BGOPACITY = 10 | 25 | 50 | 75 | 100;
	type TEXTOPACITY = 25 | 50 | 75 | 100;
	type BORDEROPACITY = 10 | 25 | 50 | 75;
	type LINKOFFSET = 1 | 2 | 3;
	type LINKOPACITY = BGOPACITY;
	type LINKUNDERLINEOPACITY = 0 | LINKOPACITY;
	type FONTSIZE = 1 | 2 | 3 | 4 | 5 | 6;
	type TOP = 0 | 50 | 100;
	type HEIGHT = "auto" | 25 | 50 | 75 | 100;
	type BORDERWIDTH = 0 | 1 | 2 | 3 | 4 | 5;
	type ZINDEX = 0 | 1 | 2 | 3 | "n1";
	type OBJECTFIT = "contain" | "cover" | "fill" | "scale" | "none";
	type STICKY = "top" | "bottom";

	type ROUNDED = "top" | "end" | "bottom" | "start";
	type ROUNDEDSIZE = BORDERWIDTH;
	type ROUNDEDSTYLE = "pill" | "circle";

	type _grid = GRID | `${GRID}` | `${VIEWPORT}-${GRID}`;
	type _spacer = SPACER | `${SPACER}` | `${VIEWPORT}-${SPACER}`;
	type _align = ALIGN | `${VIEWPORT}-${ALIGN}`;
	type _positionView = POSITIONVIEW | `${VIEWPORT}-${POSITIONVIEW}`;

	//use by component and handle by component rule
	export type color = COLOR;
	export type viewport = VIEWPORT;

	//attribute
	export type theme = "light" | "dark" | "auto";
	export type pointer = true;
	export type label = string;
	export type labelledby = string;
	export type ownby = string;
	export type describedby = string;
	export type controlfor = string;

	//class
	export type flex = FLEX | `${VIEWPORT}-${FLEX}`;
	export type float = FLOAT | `${VIEWPORT}-${FLOAT}`;
	export type order = ORDER | `${ORDER}` | `${VIEWPORT}-${ORDER}`;
	export type offset = _grid;

	export type alignContent = ALIGNCONTENT | `${VIEWPORT}-${ALIGNCONTENT}`;
	export type justifyContent = JUSTIFYCONTENT | `${VIEWPORT}-${JUSTIFYCONTENT}`;
	export type alignItem = _align;
	export type alignSelf = _align;
	export type display = DISPLAY | `${VIEWPORT}-${DISPLAY}`;
	export type rowCol = ROWCOL | `${ROWCOL}` | `${VIEWPORT}-${ROWCOL}`;

	export type visible = boolean;
	export type textWrap = boolean;
	export type fontItalic = boolean;
	export type bgGradient = true;
	export type textBreak = true;
	export type monospace = true;

	export type loadingPlaceholder = true;
	export type loadingPlaceholderAnimation = "glow" | "wave";
	export type loadingPlaceholderWeight = "lg" | "sm" | "xs";

	export type row = true;
	export type col = true | ROWCOL | `${ROWCOL}` | VIEWPORT | `${VIEWPORT}-${ROWCOL}`;

	export type userSelect = "all" | "auto" | "none";
	export type pointerEvent = "auto" | "none";
	export type position = "static" | "relative" | "absolute" | "fixed" | "sticky";
	export type overflow = "auto" | "hidden" | "scroll" | "visible";
	export type overflowX = overflow;
	export type overflowY = overflow;

	export type textAlign = _positionView;
	export type verticalAlign = "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom";

	export type opacity = OPACITY | `${OPACITY}`;
	export type bgOpacity = BGOPACITY | `${BGOPACITY}`;
	export type textOpacity = TEXTOPACITY | `${TEXTOPACITY}`;

	export type focusRing = true | COLOR;
	export type textBgColor = COLOR;
	export type textColor = COLOR | COLOREMPHASIS | BODYCOLOR | BODYTEXTCOLOR | OTHERCOLOR | "reset";
	export type bgColor = COLOR | COLORSUBTLE | BODYCOLOR | OTHERCOLOR | "transparent";

	export type iconLink = true | "hover";

	export type textTransform = "lowercase" | "uppercase" | "capitalize";
	export type textDecoration = "underline" | "line-through" | "none";
	export type lineHeight = 1 | "1" | "sm" | "base" | "lg";

	export type fontSize = FONTSIZE | `${FONTSIZE}`;
	export type fontDisplay = fontSize;
	export type fontWeight = "bold" | "bolder" | "semibold" | "medium" | "normal" | "light" | "lighter";

	export type top = TOP | `${TOP}`;
	export type bottom = top;
	export type start = top;
	export type end = top;
	export type tMiddle = true | "x" | "y";

	export type height = HEIGHT | `${HEIGHT}`;
	export type width = height;

	export type maxHeight = 100 | "100";
	export type maxWidth = 100 | "100";
	export type minViewHeight = 100 | "100";
	export type minViewWidth = 100 | "100";
	export type viewHeight = 100 | "100";
	export type viewWidth = 100 | "100";

	export type shadow = boolean | "none" | "sm" | "lg" | "inset";

	export type borderNone = true | "top" | "end" | "bottom" | "start";
	export type border = false | borderNone;
	export type borderColor = COLOR | COLORSUBTLE | OTHERCOLOR;
	export type borderOpacity = BORDEROPACITY | `${BORDEROPACITY}`;
	export type borderWidth = BORDERWIDTH | `${BORDERWIDTH}`;

	export type roundedNone = border;
	export type rounded =
		| boolean
		| ROUNDEDSIZE
		| `${ROUNDEDSIZE}`
		| ROUNDED
		| ROUNDEDSTYLE
		| `${ROUNDED}-${ROUNDEDSTYLE}`
		| `${ROUNDED}-${ROUNDEDSIZE}`
		| `${ROUNDEDSTYLE}-${ROUNDEDSIZE}`;
	export type roundedSize = ROUNDEDSIZE | `${ROUNDEDSIZE}`;

	export type padding = _spacer;
	export type paddingX = _spacer;
	export type paddingY = _spacer;
	export type paddingTop = _spacer;
	export type paddingBottom = _spacer;
	export type paddingStart = _spacer;
	export type paddingEnd = _spacer;

	export type margin = _spacer;
	export type marginX = _spacer;
	export type marginY = _spacer;
	export type marginTop = _spacer;
	export type marginBottom = _spacer;
	export type marginStart = _spacer;
	export type marginEnd = _spacer;

	export type gap = _spacer;
	export type gutter = _spacer;
	export type gutterX = _spacer;
	export type gutterY = _spacer;

	export type print = display;
	export type container = true | VIEWPORT | "fluid" | "xs";

	export type zIndex = ZINDEX | `${ZINDEX}`;
	export type objectFit = OBJECTFIT | `${VIEWPORT}-${OBJECTFIT}`;

	export type ratio = true | "1x1" | "4x3" | "16x9" | "21x9";
	export type fixed = STICKY;
	export type sticky = STICKY | `${VIEWPORT}-${STICKY}`;

	export type clearfix = true;
	export type textTruncate = true;
	export type vstack = true;
	export type hstack = true;
	export type visually = "hidden" | "hidden-focusable";
	export type h = fontDisplay;
	export type small = true;

	//specific component only
	export type linkColor = COLOR | BODYTEXTCOLOR;
	export type linkUnderlineColor = linkColor;
	export type linkOffset = LINKOFFSET | `${LINKOFFSET}`;
	export type linkOffsetHover = linkOffset;
	export type linkOpacity = LINKOPACITY | `${LINKOPACITY}`;
	export type linkOpacityHover = linkOpacity;
	export type linkUnderline = true;
	export type linkUnderlineOpacity = LINKUNDERLINEOPACITY | `${LINKUNDERLINEOPACITY}`;
	export type linkUnderlineOpacityHover = linkUnderlineOpacity;

	export type btnColor = COLOR | "link" | "transparent";
	export type btnOutlineColor = COLOR;
	export type alertColor = COLOR;
	export type alertDismissible = true;
	export type dropdownDirection = "up" | "start" | "end";
	export type dropdownMenuPositionView = _positionView;
}

namespace bootstrapTypeA {
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
	export const flex = [...FLEX, ...VIEWPORT.map((i) => FLEX.map((j) => `${i}-${j}`)).flat()];
	export const float = [...FLOAT, ...VIEWPORT.map((i) => FLOAT.map((j) => `${i}-${j}`)).flat()];
	export const order = [
		...ORDER,
		...ORDER.map((i) => `${i}`),
		...VIEWPORT.map((i) => ORDER.map((j) => `${i}-${j}`)).flat(),
	];
	export const offset = _grid;

	export const alignContent = [...ALIGNCONTENT, ...VIEWPORT.map((i) => ALIGNCONTENT.map((j) => `${i}-${j}`)).flat()];
	export const justifyContent = [
		...JUSTIFYCONTENT,
		...VIEWPORT.map((i) => JUSTIFYCONTENT.map((j) => `${i}-${j}`)).flat(),
	];
	export const alignItem = _align;
	export const alignSelf = _align;
	export const display = [...DISPLAY, ...VIEWPORT.map((i) => DISPLAY.map((j) => `${i}-${j}`)).flat()];
	export const rowCol = [
		...ROWCOL,
		...ROWCOL.map((i) => `${i}`),
		...VIEWPORT.map((i) => ROWCOL.map((j) => `${i}-${j}`)).flat(),
	];

	export const visible = [true, false];
	export const textWrap = [true, false];
	export const fontItalic = [true, false];
	export const bgGradient = [true];
	export const textBreak = [true];
	export const monospace = [true];

	export const loadingPlaceholder = [true];
	export const loadingPlaceholderAnimation = ["glow", "wave"];
	export const loadingPlaceholderWeight = ["lg", "sm", "xs"];

	export const row = [true];
	export const col = [
		true,
		...ROWCOL,
		...ROWCOL.map((i) => `${i}`),
		...VIEWPORT,
		...VIEWPORT.map((i) => ROWCOL.map((j) => `${i}-${j}`)).flat(),
	];

	export const userSelect = ["all", "auto", "none"];
	export const pointerEvent = ["auto", "none"];
	export const position = ["static", "relative", "absolute", "fixed", "sticky"];
	export const overflow = ["auto", "hidden", "scroll", "visible"];
	export const overflowX = overflow;
	export const overflowY = overflow;

	export const textAlign = _positionView;
	export const verticalAlign = ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"];

	export const opacity = [...OPACITY, ...OPACITY.map((i) => `${i}`)];
	export const bgOpacity = [...BGOPACITY, ...BGOPACITY.map((i) => `${i}`)];
	export const textOpacity = [...TEXTOPACITY, ...TEXTOPACITY.map((i) => `${i}`)];

	export const focusRing = [true, ...COLOR];
	export const textBgColor = COLOR;
	export const textColor = [...COLOR, ...COLOREMPHASIS, ...BODYCOLOR, ...BODYTEXTCOLOR, ...OTHERCOLOR, "reset"];
	export const bgColor = [...COLOR, ...COLORSUBTLE, ...BODYCOLOR, ...OTHERCOLOR, "transparent"];

	export const iconLink = [true, "hover"];

	export const textTransform = ["lowercase", "uppercase", "capitalize"];
	export const textDecoration = ["underline", "line-through", "none"];
	export const lineHeight = [1, "1", "sm", "base", "lg"];

	export const fontSize = [...FONTSIZE, ...FONTSIZE.map((i) => `${i}`)];
	export const fontDisplay = fontSize;
	export const fontWeight = ["bold", "bolder", "semibold", "medium", "normal", "light", "lighter"];

	export const top = [...TOP, ...TOP.map((i) => `${i}`)];
	export const bottom = top;
	export const start = top;
	export const end = top;
	export const tMiddle = [true, "x", "y"];

	export const height = [...HEIGHT, ...HEIGHT.map((i) => `${i}`)];
	export const width = height;

	export const maxHeight = [100, "100"];
	export const maxWidth = [100, "100"];
	export const minViewHeight = [100, "100"];
	export const minViewWidth = [100, "100"];
	export const viewHeight = [100, "100"];
	export const viewWidth = [100, "100"];

	export const shadow = [true, false, "none", "sm", "lg", "inset"];

	export const borderNone = [true, "top", "end", "bottom", "start"];
	export const border = [false, ...borderNone];
	export const borderColor = [...COLOR, ...COLORSUBTLE, ...OTHERCOLOR];
	export const borderOpacity = [...BORDEROPACITY, ...BORDEROPACITY.map((i) => `${i}`)];
	export const borderWidth = [...BORDERWIDTH, ...BORDERWIDTH.map((i) => `${i}`)];

	export const roundedNone = border;
	export const rounded = [
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
	export const roundedSize = [...ROUNDEDSIZE, ...ROUNDEDSIZE.map((i) => `${i}`)];

	export const padding = _spacer;
	export const paddingX = _spacer;
	export const paddingY = _spacer;
	export const paddingTop = _spacer;
	export const paddingBottom = _spacer;
	export const paddingStart = _spacer;
	export const paddingEnd = _spacer;

	export const margin = _spacer;
	export const marginX = _spacer;
	export const marginY = _spacer;
	export const marginTop = _spacer;
	export const marginBottom = _spacer;
	export const marginStart = _spacer;
	export const marginEnd = _spacer;

	export const gap = _spacer;
	export const gutter = _spacer;
	export const gutterX = _spacer;
	export const gutterY = _spacer;

	export const print = display;
	export const container = [true, ...VIEWPORT, "fluid", "xs"];

	export const zIndex = [...ZINDEX, ...ZINDEX.map((i) => `${i}`)];
	export const objectFit = [...OBJECTFIT, ...VIEWPORT.map((i) => OBJECTFIT.map((j) => `${i}-${j}`)).flat()];

	export const ratio = [true, "1x1", "4x3", "16x9", "21x9"];
	export const fixed = STICKY;
	export const sticky = [...STICKY, ...VIEWPORT.map((i) => STICKY.map((j) => `${i}-${j}`)).flat()];

	export const clearfix = [true];
	export const textTruncate = [true];
	export const vstack = [true];
	export const hstack = [true];
	export const visually = ["hidden", "hidden-focusable"];
	export const h = fontDisplay;
	export const small = [true];

	//specific component only
	export const linkColor = [...COLOR, ...BODYTEXTCOLOR];
	export const linkUnderlineColor = linkColor;
	export const linkOffset = [...LINKOFFSET, ...LINKOFFSET.map((i) => `${i}`)];
	export const linkOffsetHover = linkOffset;
	export const linkOpacity = [...LINKOPACITY, ...LINKOPACITY.map((i) => `${i}`)];
	export const linkOpacityHover = linkOpacity;
	export const linkUnderline = [true];
	export const linkUnderlineOpacity = [...LINKUNDERLINEOPACITY, ...LINKUNDERLINEOPACITY.map((i) => `${i}`)];
	export const linkUnderlineOpacityHover = linkUnderlineOpacity;

	export const btnColor = COLOR;
	export const btnOutlineColor = COLOR;
	export const alertColor = COLOR;
	export const alertDismissible = [true];
	export const dropdownDirection = ["up", "start", "end"];
	export const dropdownMenuPositionView = _positionView;
}

interface ClassFormatter {
	shared?: boolean;
	value?: (string | number | boolean)[];

	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;
}

class bsClassFormatterRule implements ClassFormatter {
	shared?: boolean;
	value?: (string | number | boolean)[];
	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;

	constructor(d: ClassFormatter) {
		this.shared = d.shared;
		this.value = d.value;
		this.format = d.format;
		this.formatValue = d.formatValue;
		this.formatTrue = d.formatTrue;
		this.formatFalse = d.formatFalse;
	}
}

const bsClassFormatterDB: {
	[key: string]: bsClassFormatterRule;
} = {
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

type AttrFormatter = (elem: Element, data: string | number | boolean) => Element;

const attrFormatterDB: {
	[key: string]: AttrFormatter;
} = {
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
};

export interface Attr {
	theme?: bootstrapType.theme; //[bs-theme="<theme>"]
	pointer?: bootstrapType.pointer; //[role="button"]
	label?: string;
	labelledby?: string;
	ownby?: string;
	describedby?: string;
	controlfor?: string;
}

export interface Class {
	//---------------------
	// viewport and color handle by component
	//---------------------

	flex?: bootstrapType.flex | bootstrapType.flex[];
	float?: bootstrapType.float | bootstrapType.float[];
	order?: bootstrapType.order | bootstrapType.order[];
	offset?: bootstrapType.offset | bootstrapType.offset[];

	//---------------------

	alignContent?: bootstrapType.alignContent | bootstrapType.alignContent[];
	justifyContent?: bootstrapType.justifyContent | bootstrapType.justifyContent[];
	alignItem?: bootstrapType.alignItem | bootstrapType.alignItem[];
	alignSelf?: bootstrapType.alignSelf | bootstrapType.alignSelf[];
	display?: bootstrapType.display | bootstrapType.display[];
	rowCol?: bootstrapType.rowCol | bootstrapType.rowCol[];

	//---------------------

	visible?: bootstrapType.visible;
	textWrap?: bootstrapType.textWrap;
	fontItalic?: bootstrapType.fontItalic;
	bgGradient?: bootstrapType.bgGradient;
	textBreak?: bootstrapType.textBreak;
	monospace?: bootstrapType.monospace;

	//---------------------

	loadingPlaceholder?: bootstrapType.loadingPlaceholder;
	loadingPlaceholderAnimation?: bootstrapType.loadingPlaceholderAnimation;
	loadingPlaceholderWeight?: bootstrapType.loadingPlaceholderWeight;

	//---------------------

	row?: bootstrapType.row;
	col?: bootstrapType.col | bootstrapType.col[];

	//---------------------

	userSelect?: bootstrapType.userSelect;
	pointerEvent?: bootstrapType.pointerEvent;
	position?: bootstrapType.position;
	overflow?: bootstrapType.overflow;
	overflowX?: bootstrapType.overflow;
	overflowY?: bootstrapType.overflow;

	//---------------------

	textAlign?: bootstrapType.textAlign;
	verticalAlign?: bootstrapType.verticalAlign;

	//---------------------
	opacity?: bootstrapType.opacity;
	bgOpacity?: bootstrapType.bgOpacity;
	textOpacity?: bootstrapType.textOpacity;

	//---------------------

	focusRing?: bootstrapType.focusRing;
	textBgColor?: bootstrapType.textBgColor;
	textColor?: bootstrapType.textColor;
	bgColor?: bootstrapType.bgColor;

	//---------------------

	textTransform?: bootstrapType.textTransform;
	textDecoration?: bootstrapType.textDecoration;
	lineHeight?: bootstrapType.lineHeight;

	//---------------------

	fontSize?: bootstrapType.fontSize;
	fontDisplay?: bootstrapType.fontDisplay;
	fontWeight?: bootstrapType.fontWeight;

	//---------------------

	top?: bootstrapType.top;
	bottom?: bootstrapType.bottom;
	start?: bootstrapType.start;
	end?: bootstrapType.end;
	tMiddle?: bootstrapType.tMiddle;

	//---------------------

	height?: bootstrapType.height;
	width?: bootstrapType.width;
	maxHeight?: bootstrapType.maxHeight;
	maxWidth?: bootstrapType.maxWidth;
	minViewHeight?: bootstrapType.minViewHeight;
	minViewWidth?: bootstrapType.minViewWidth;
	viewHeight?: bootstrapType.viewHeight;
	viewWidth?: bootstrapType.viewWidth;

	//---------------------

	shadow?: bootstrapType.shadow;

	//---------------------

	border?: bootstrapType.border | bootstrapType.border[];
	borderNone?: bootstrapType.borderNone | bootstrapType.borderNone[];
	borderColor?: bootstrapType.borderColor;
	borderOpacity?: bootstrapType.borderOpacity;
	borderWidth?: bootstrapType.borderWidth;

	//---------------------

	rounded?: bootstrapType.rounded;
	roundedNone?: bootstrapType.roundedNone;
	roundedSize?: bootstrapType.roundedSize;

	//---------------------

	padding?: bootstrapType.padding | bootstrapType.padding[];
	paddingX?: bootstrapType.paddingX | bootstrapType.paddingX[];
	paddingY?: bootstrapType.paddingY | bootstrapType.paddingY[];
	paddingTop?: bootstrapType.paddingTop | bootstrapType.paddingTop[];
	paddingBottom?: bootstrapType.paddingBottom | bootstrapType.paddingBottom[];
	paddingStart?: bootstrapType.paddingStart | bootstrapType.paddingStart[];
	paddingEnd?: bootstrapType.paddingEnd | bootstrapType.paddingEnd[];

	//---------------------

	margin?: bootstrapType.margin | bootstrapType.margin[];
	marginX?: bootstrapType.marginX | bootstrapType.marginX[];
	marginY?: bootstrapType.marginY | bootstrapType.marginY[];
	marginTop?: bootstrapType.marginTop | bootstrapType.marginTop[];
	marginBottom?: bootstrapType.marginBottom | bootstrapType.marginBottom[];
	marginStart?: bootstrapType.marginStart | bootstrapType.marginStart[];
	marginEnd?: bootstrapType.marginEnd | bootstrapType.marginEnd[];

	//---------------------

	gap?: bootstrapType.gap | bootstrapType.gap[];
	gutter?: bootstrapType.gutter | bootstrapType.gutter[];
	gutterX?: bootstrapType.gutterX | bootstrapType.gutterX[];
	gutterY?: bootstrapType.gutterY | bootstrapType.gutterY[];

	//---------------------

	print?: bootstrapType.print | bootstrapType.print;
	container?: bootstrapType.container;

	//---------------------

	zIndex?: bootstrapType.zIndex;
	objectFit?: bootstrapType.objectFit | bootstrapType.objectFit[];
	ratio?: bootstrapType.ratio;
	fixed?: bootstrapType.fixed;
	sticky?: bootstrapType.sticky | bootstrapType.sticky[];
	clearfix?: bootstrapType.clearfix;
	textTruncate?: bootstrapType.textTruncate;
	visually?: bootstrapType.visually;
	vstack?: bootstrapType.vstack;
	hstack?: bootstrapType.hstack;
	h?: bootstrapType.h;
	small?: bootstrapType.small;

	//---------------------

	iconLink?: bootstrapType.iconLink;
}

let allowClassProp: (string | undefined)[] = [];

export namespace attachBSClass {
	const allowValue = <T extends string | number | boolean>(
		valueToCheck: string | number | boolean,
		listOfPossible: (string | number | boolean)[]
	): valueToCheck is T => {
		if (listOfPossible && listOfPossible.length > 0) {
			return listOfPossible.indexOf(valueToCheck) > -1;
		}
		return false;
	};

	const allowProp = (key: string) => {
		if (allowClassProp.length === 0) {
			allowClassProp = Object.keys(bsClassFormatterDB);
		}

		if (allowClassProp.indexOf(key) > -1) {
			return key;
		}

		return null;
	};

	const addClass = (rule: ClassFormatter, data: string | number | boolean, elem: Element) => {
		if (rule.value && allowValue(data, rule.value)) {
			if (rule.formatValue) {
				elem = addClassIntoElement(elem, rule.formatValue!);
			}

			if (data === true && rule.formatTrue) {
				elem = addClassIntoElement(elem, rule.formatTrue!);
			} else if (data === false && rule.formatFalse) {
				elem = addClassIntoElement(elem, rule.formatFalse!);
			} else if (rule.format) {
				elem = addClassIntoElement(elem, rule.format!.replace(/\$1/g, data.toString()));
			}
		}

		return elem;
	};

	export const attach: IAttachFn = (key, elem, attr) => {
		let allowKey = allowProp(key);
		if (allowKey) {
			let a = keyOfType(key, attr);
			let b = keyOfType(allowKey, bsClassFormatterDB);
			let data: (string | number | boolean)[] = [];

			if (!Array.isArray(attr[a])) {
				data = [attr[a] as string | number | boolean];
			} else {
				data = attr[a] as (string | number | boolean)[];
			}

			data.forEach((i) => {
				elem = addClass(bsClassFormatterDB[b], i, elem);
			});

			delete attr[a];
		}

		return { attr, elem };
	};
}

let allowAttrProp: (string | undefined)[] = [];

export namespace attachBSAttr {
	const allow = (key: string) => {
		if (allowAttrProp.length === 0) {
			allowAttrProp = Object.keys(attrFormatterDB);
		}

		if (allowAttrProp.indexOf(key) > -1) {
			return key;
		}

		return null;
	};

	const addAttr = (rule: AttrFormatter, data: string | number | boolean, elem: Element) => {
		elem = rule(elem, data);

		return elem;
	};

	export const attach: IAttachFn = (key, elem, attr) => {
		let allowKey = allow(key);
		if (allowKey) {
			let a = keyOfType(key, attr);
			let b = keyOfType(allowKey, attrFormatterDB);
			let data: (string | number | boolean)[] = [];

			if (!Array.isArray(attr[a])) {
				data = [attr[a] as string | number | boolean];
			} else {
				data = attr[a] as (string | number | boolean)[];
			}

			data.forEach((i) => {
				elem = addAttr(attrFormatterDB[b], i, elem);
			});

			delete attr[a];
		}

		return { attr, elem };
	};
}

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

export const bsConstArg = <T extends IAttr>(prop: string, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return arg[0] as T;
			} else {
				return { [prop]: arg[0] } as T;
			}
		} else if (arg.length === 2) {
			return mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T);
		} else {
			return {} as T;
		}
	} else {
		return {} as T;
	}
};

// export const bsConstArg = <T extends IAttr>(prop: string, fn: <T extends IAttr>(attr: T) => IAttr, arg?: any[]) => {
// 	if (arg) {
// 		if (arg.length === 1) {
// 			if (isAttr<T>(arg[0])) {
// 				return fn(arg[0] as T);
// 			} else {
// 				return fn({ [prop]: arg[0] } as T);
// 			}
// 		} else if (arg.length === 2) {
// 			return fn(mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T));
// 		} else {
// 			return fn({} as T);
// 		}
// 	} else {
// 		return fn({} as T);
// 	}
// };

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

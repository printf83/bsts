import { addClassIntoElement } from "./addClassIntoElement.js";
import { IAttachFn } from "./attach/_index.js";
import { keyOfType } from "./keyOfType.js";

export namespace bs {
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

	//attribute
	export type theme = "light" | "dark" | "auto";
	export type pointer = true;

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

	export type placeholder = true;
	export type placeholderAnimation = "glow" | "wave";
	export type placeholderWeight = "lg" | "sm" | "xs";

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
	export type translateMiddle = true | "x" | "y";

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

	export type btnColor = COLOR;
	export type btnOutlineColor = COLOR;
	export type alertColor = COLOR;
	export type dropdownDirection = "up" | "start" | "end";
}

export namespace bsArr {
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

	//attribute
	export const theme = ["light", "dark", "auto"];
	export const pointer = [true];

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

	export const placeholder = [true];
	export const placeholderAnimation = ["glow", "wave"];
	export const placeholderWeight = ["lg", "sm", "xs"];

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
	export const translateMiddle = [true, "x", "y"];

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
	export const dropdownDirection = ["up", "start", "end"];
}

interface IBsClassFormatter {
	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;
}

class bsClassFormatterRule implements IBsClassFormatter {
	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;

	constructor(d: IBsClassFormatter) {
		this.format = d.format;
		this.formatValue = d.formatValue;
		this.formatTrue = d.formatTrue;
		this.formatFalse = d.formatFalse;
	}
}

const bsClassFormatterDB: {
	[key: string]: bsClassFormatterRule;
} = {
	flex: new bsClassFormatterRule({
		format: "flex-$1",
	}),
	float: new bsClassFormatterRule({
		format: "float-$1",
	}),
	order: new bsClassFormatterRule({
		format: "order-$1",
	}),
	offset: new bsClassFormatterRule({
		format: "offset-$1",
	}),

	//---------------------

	alignContent: new bsClassFormatterRule({
		format: "align-content-$1",
	}),
	justifyContent: new bsClassFormatterRule({
		format: "justify-content-$1",
	}),
	alignItem: new bsClassFormatterRule({
		format: "align-items-$1",
	}),
	alignSelf: new bsClassFormatterRule({
		format: "align-self-$1",
	}),
	display: new bsClassFormatterRule({
		format: "d-$1",
	}),
	rowCol: new bsClassFormatterRule({
		format: "row-cols-$1",
	}),

	//---------------------

	visible: new bsClassFormatterRule({
		formatTrue: "visible",
		formatFalse: "invisible",
	}),
	textWrap: new bsClassFormatterRule({
		formatTrue: "text-wrap",
		formatFalse: "text-nowrap",
	}),
	fontItalic: new bsClassFormatterRule({
		formatTrue: "fst-italic",
		formatFalse: "fst-normal",
	}),
	bgGradient: new bsClassFormatterRule({
		formatTrue: "bg-gradient",
	}),
	textBreak: new bsClassFormatterRule({
		formatTrue: "text-break",
	}),
	monospace: new bsClassFormatterRule({
		formatTrue: "font-monospace",
	}),

	//---------------------

	placeholder: new bsClassFormatterRule({
		formatTrue: "placeholder",
	}),
	placeholderAnimation: new bsClassFormatterRule({
		format: "placeholder-$1",
	}),
	placeholderWeight: new bsClassFormatterRule({
		format: "placeholder-$1",
		formatValue: "placeholder $1",
	}),

	//---------------------

	row: new bsClassFormatterRule({
		formatTrue: "row",
	}),
	col: new bsClassFormatterRule({
		format: "col-$1",
		formatTrue: "col",
	}),

	//---------------------

	userSelect: new bsClassFormatterRule({
		format: "user-select-$1",
	}),
	pointerEvent: new bsClassFormatterRule({
		format: "pe-$1",
	}),
	position: new bsClassFormatterRule({
		format: "position-$1",
	}),
	overflow: new bsClassFormatterRule({
		format: "overflow-$1",
	}),
	overflowX: new bsClassFormatterRule({
		format: "overflow-x-$1",
	}),
	overflowY: new bsClassFormatterRule({
		format: "overflow-y-$1",
	}),

	//---------------------

	textAlign: new bsClassFormatterRule({
		format: "text-$1",
	}),
	verticalAlign: new bsClassFormatterRule({
		format: "align-$1",
	}),

	//---------------------

	opacity: new bsClassFormatterRule({
		format: "opacity-$1",
	}),
	bgOpacity: new bsClassFormatterRule({
		format: "bg-opacity-$1",
	}),
	textOpacity: new bsClassFormatterRule({
		format: "text-opacity-$1",
	}),

	//---------------------

	focusRing: new bsClassFormatterRule({
		format: "focus-ring-$1",
		formatValue: "focus-ring",
	}),
	textBgColor: new bsClassFormatterRule({
		format: "text-bg-$1",
	}),
	textColor: new bsClassFormatterRule({
		format: "text-$1",
	}),
	bgColor: new bsClassFormatterRule({
		format: "bg-$1",
	}),

	//---------------------

	iconLink: new bsClassFormatterRule({
		format: "icon-link-$1",
		formatValue: "icon-link",
		formatTrue: "icon-link",
	}),

	//---------------------

	textTransform: new bsClassFormatterRule({
		format: "text-$1",
	}),
	textDecoration: new bsClassFormatterRule({
		format: "text-decoration-$1",
	}),
	lineHeight: new bsClassFormatterRule({
		format: "lh-$1",
	}),

	//---------------------

	fontSize: new bsClassFormatterRule({
		format: "fs-$1",
	}),
	fontDisplay: new bsClassFormatterRule({
		format: "display-$1",
	}),
	fontWeight: new bsClassFormatterRule({
		format: "fw-$1",
	}),

	//---------------------

	top: new bsClassFormatterRule({
		format: "top-$1",
	}),
	bottom: new bsClassFormatterRule({
		format: "bottom-$1",
	}),
	start: new bsClassFormatterRule({
		format: "start-$1",
	}),
	end: new bsClassFormatterRule({
		format: "end-$1",
	}),
	translateMiddle: new bsClassFormatterRule({
		format: "translate-middle-$1",
		formatTrue: "translate-middle",
	}),

	//---------------------

	height: new bsClassFormatterRule({
		format: "h-$1",
	}),
	width: new bsClassFormatterRule({
		format: "w-$1",
	}),

	//---------------------

	maxHeight: new bsClassFormatterRule({
		format: "mh-$1",
	}),
	maxWidth: new bsClassFormatterRule({
		format: "mw-$1",
	}),
	minViewHeight: new bsClassFormatterRule({
		format: "min-vh-$1",
	}),
	minViewWidth: new bsClassFormatterRule({
		format: "min-vw-$1",
	}),
	viewHeight: new bsClassFormatterRule({
		format: "vh-$1",
	}),
	viewWidth: new bsClassFormatterRule({
		format: "vw-$1",
	}),

	//---------------------

	shadow: new bsClassFormatterRule({
		format: "shadow-$1",
		formatValue: "shadow",
		formatFalse: "shadow-none",
	}),

	//---------------------

	borderNone: new bsClassFormatterRule({
		format: "border-$1-0",
		formatTrue: "border-0",
		formatFalse: "border",
	}),
	border: new bsClassFormatterRule({
		format: "border-$1",
		formatTrue: "border",
		formatFalse: "border-0",
	}),
	borderColor: new bsClassFormatterRule({
		format: "border-$1",
	}),
	borderOpacity: new bsClassFormatterRule({
		format: "border-opacity-$1",
	}),
	borderWidth: new bsClassFormatterRule({
		format: "border-$1",
	}),

	//---------------------

	roundedNone: new bsClassFormatterRule({
		format: "rounded-$1-0",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
	}),
	rounded: new bsClassFormatterRule({
		format: "rounded-$1",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
	}),
	roundedSize: new bsClassFormatterRule({
		format: "rounded-$1",
	}),

	//---------------------

	padding: new bsClassFormatterRule({
		format: "p-$1",
	}),
	paddingX: new bsClassFormatterRule({
		format: "px-$1",
	}),
	paddingY: new bsClassFormatterRule({
		format: "py-$1",
	}),
	paddingTop: new bsClassFormatterRule({
		format: "pt-$1",
	}),
	paddingBottom: new bsClassFormatterRule({
		format: "pb-$1",
	}),
	paddingStart: new bsClassFormatterRule({
		format: "ps-$1",
	}),
	paddingEnd: new bsClassFormatterRule({
		format: "pe-$1",
	}),

	//---------------------

	margin: new bsClassFormatterRule({
		format: "m-$1",
	}),
	marginX: new bsClassFormatterRule({
		format: "mx-$1",
	}),
	marginY: new bsClassFormatterRule({
		format: "my-$1",
	}),
	marginTop: new bsClassFormatterRule({
		format: "mt-$1",
	}),
	marginBottom: new bsClassFormatterRule({
		format: "mb-$1",
	}),
	marginStart: new bsClassFormatterRule({
		format: "ms-$1",
	}),
	marginEnd: new bsClassFormatterRule({
		format: "me-$1",
	}),

	//---------------------

	gap: new bsClassFormatterRule({
		format: "gap-$1",
	}),
	gutter: new bsClassFormatterRule({
		format: "g-$1",
	}),
	gutterX: new bsClassFormatterRule({
		format: "gx-$1",
	}),
	gutterY: new bsClassFormatterRule({
		format: "gy-$1",
	}),

	//---------------------

	print: new bsClassFormatterRule({
		format: "d-print-$1",
	}),
	container: new bsClassFormatterRule({
		format: "container-$1",
		formatTrue: "container",
	}),

	//---------------------

	zIndex: new bsClassFormatterRule({
		format: "z-$1",
	}),
	objectFit: new bsClassFormatterRule({
		format: "object-fit-$1",
	}),

	//---------------------

	ratio: new bsClassFormatterRule({
		format: "ratio-$1",
		formatValue: "ratio",
		formatTrue: "ratio",
	}),
	fixed: new bsClassFormatterRule({
		format: "fixed-$1",
	}),
	sticky: new bsClassFormatterRule({
		format: "sticky-$1",
	}),

	//---------------------

	clearfix: new bsClassFormatterRule({
		formatTrue: "clearfix",
	}),
	textTruncate: new bsClassFormatterRule({
		formatTrue: "text-truncate",
	}),

	vstack: new bsClassFormatterRule({
		formatTrue: "vstack",
	}),
	hstack: new bsClassFormatterRule({
		formatTrue: "hstack",
	}),
	visually: new bsClassFormatterRule({
		format: "visually-$1",
	}),
	h: new bsClassFormatterRule({
		format: "h$1",
	}),
	small: new bsClassFormatterRule({
		formatTrue: "small",
	}),

	//---------------------

	linkColor: new bsClassFormatterRule({
		format: "link-$1",
	}),
	linkUnderlineColor: new bsClassFormatterRule({
		format: "link-underline-$1",
	}),
	linkOffset: new bsClassFormatterRule({
		format: "link-offset-$1",
	}),
	linkOffsetHover: new bsClassFormatterRule({
		format: "link-offset-$1-hover",
	}),
	linkOpacity: new bsClassFormatterRule({
		format: "link-opacity-$1",
	}),
	linkOpacityHover: new bsClassFormatterRule({
		format: "link-opacity-$1-hover",
	}),
	linkUnderline: new bsClassFormatterRule({
		formatTrue: "link-underline",
	}),
	linkUnderlineOpacity: new bsClassFormatterRule({
		format: "link-underline-opacity-$1",
	}),
	linkUnderlineOpacityHover: new bsClassFormatterRule({
		format: "link-underline-opacity-$1-hover",
	}),

	//---------------------

	btnColor: new bsClassFormatterRule({
		format: "btn-$1",
		formatValue: "btn",
	}),
	btnOutlineColor: new bsClassFormatterRule({
		format: "btn-outline-$1",
		formatValue: "btn",
	}),
	alertColor: new bsClassFormatterRule({
		format: "alert-$1",
	}),
	dropdownDirection: new bsClassFormatterRule({
		format: "drop$1",
	}),
};

type IBsAttrFormatter = (elem: HTMLElement, data: string | number | boolean) => HTMLElement;

const attrFormatterDB: {
	[key: string]: IBsAttrFormatter;
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
};

export interface IBsAttr {
	theme?: bs.theme; //[bs-theme="<theme>"]
	pointer?: bs.pointer; //[role="button"]
}

export interface IBsClass {
	flex?: bs.flex | bs.flex[];
	float?: bs.float | bs.float[];
	order?: bs.order | bs.order[];
	offset?: bs.offset | bs.offset[];

	//---------------------

	alignContent?: bs.alignContent | bs.alignContent[];
	justifyContent?: bs.justifyContent | bs.justifyContent[];
	alignItem?: bs.alignItem | bs.alignItem[];
	alignSelf?: bs.alignSelf | bs.alignSelf[];
	display?: bs.display | bs.display[];
	rowCol?: bs.rowCol | bs.rowCol[];

	//---------------------

	visible?: bs.visible;
	textWrap?: bs.textWrap;
	fontItalic?: bs.fontItalic;
	bgGradient?: bs.bgGradient;
	textBreak?: bs.textBreak;
	monospace?: bs.monospace;

	//---------------------

	placeholder?: bs.placeholder;
	placeholderAnimation?: bs.placeholderAnimation;
	placeholderWeight?: bs.placeholderWeight;

	//---------------------

	row?: bs.row;
	col?: bs.col | bs.col[];

	//---------------------

	bsUserSelect?: bs.userSelect;
	pointerEvent?: bs.pointerEvent;
	position?: bs.position;
	overflow?: bs.overflow;
	overflowX?: bs.overflow;
	overflowY?: bs.overflow;

	//---------------------

	textAlign?: bs.textAlign;
	verticalAlign?: bs.verticalAlign;

	//---------------------
	opacity?: bs.opacity;
	bgOpacity?: bs.bgOpacity;
	textOpacity?: bs.textOpacity;

	//---------------------

	focusRing?: bs.focusRing;
	textBgColor?: bs.textBgColor;
	textColor?: bs.textColor;
	bgColor?: bs.bgColor;

	//---------------------

	textTransform?: bs.textTransform;
	textDecoration?: bs.textDecoration;
	lineHeight?: bs.lineHeight;

	//---------------------

	fontSize?: bs.fontSize;
	fontDisplay?: bs.fontDisplay;
	fontWeight?: bs.fontWeight;

	//---------------------

	top?: bs.top;
	bottom?: bs.bottom;
	start?: bs.start;
	end?: bs.end;
	translateMiddle?: bs.translateMiddle;

	//---------------------

	height?: bs.height;
	width?: bs.width;
	maxHeight?: bs.maxHeight;
	maxWidth?: bs.maxWidth;
	minViewHeight?: bs.minViewHeight;
	minViewWidth?: bs.minViewWidth;
	viewHeight?: bs.viewHeight;
	viewWidth?: bs.viewWidth;

	//---------------------

	shadow?: bs.shadow;

	//---------------------

	border?: bs.border | bs.border[];
	borderNone?: bs.borderNone | bs.borderNone[];
	borderColor?: bs.borderColor;
	borderOpacity?: bs.borderOpacity;
	borderWidth?: bs.borderWidth;

	//---------------------

	rounded?: bs.rounded;
	roundedNone?: bs.roundedNone;
	roundedSize?: bs.roundedSize;

	//---------------------

	padding?: bs.padding | bs.padding[];
	paddingX?: bs.paddingX | bs.paddingX[];
	paddingY?: bs.paddingY | bs.paddingY[];
	paddingTop?: bs.paddingTop | bs.paddingTop[];
	paddingBottom?: bs.paddingBottom | bs.paddingBottom[];
	paddingStart?: bs.paddingStart | bs.paddingStart[];
	paddingEnd?: bs.paddingEnd | bs.paddingEnd[];

	//---------------------

	margin?: bs.margin | bs.margin[];
	marginX?: bs.marginX | bs.marginX[];
	marginY?: bs.marginY | bs.marginY[];
	marginTop?: bs.marginTop | bs.marginTop[];
	marginBottom?: bs.marginBottom | bs.marginBottom[];
	marginStart?: bs.marginStart | bs.marginStart[];
	marginEnd?: bs.marginEnd | bs.marginEnd[];

	//---------------------

	gap?: bs.gap | bs.gap[];
	gutter?: bs.gutter | bs.gutter[];
	gutterX?: bs.gutterX | bs.gutterX[];
	gutterY?: bs.gutterY | bs.gutterY[];

	//---------------------

	print?: bs.print | bs.print;
	container?: bs.container;

	//---------------------

	zIndex?: bs.zIndex;
	objectFit?: bs.objectFit | bs.objectFit[];
	ratio?: bs.ratio;
	fixed?: bs.fixed;
	sticky?: bs.sticky | bs.sticky[];
	clearfix?: bs.clearfix;
	textTruncate?: bs.textTruncate;
	visually?: bs.visually;
	vstack?: bs.vstack;
	hstack?: bs.hstack;
	h?: bs.h;
	small?: bs.small;

	//---------------------

	iconLink?: bs.iconLink;
}

let allowClassProp: (string | undefined)[] = [];

export namespace attachBSClass {
	const allow = (key: string) => {
		if (allowClassProp.length === 0) {
			allowClassProp = Object.keys(bsClassFormatterDB);
		}

		if (allowClassProp.indexOf(key) > -1) {
			return key;
		}

		return null;
	};

	const addClass = (rule: IBsClassFormatter, data: string | number | boolean, elem: HTMLElement) => {
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

		return elem;
	};

	export const attach: IAttachFn = (key, elem, attr) => {
		let allowKey = allow(key);
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

	const addAttr = (rule: IBsAttrFormatter, data: string | number | boolean, elem: HTMLElement) => {
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

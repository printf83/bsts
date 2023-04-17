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

export interface IBsClassFormatter {
	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;
}

export class bsClassFormatterRule implements IBsClassFormatter {
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

export const bsFormatterDB: {
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

export interface IBsAttr {
	theme?: bs.theme; //[bs-theme="<thene>"]
	pointer?: bs.pointer; //[role="button"]
}

export interface IBsClass {
	bsFlex?: bs.flex | bs.flex[];
	bsFloat?: bs.float | bs.float[];
	bsOrder?: bs.order | bs.order[];
	bsOffset?: bs.offset | bs.offset[];

	//---------------------

	bsAlignContent?: bs.alignContent | bs.alignContent[];
	bsJustifyContent?: bs.justifyContent | bs.justifyContent[];
	bsAlignItem?: bs.alignItem | bs.alignItem[];
	bsAlignSelf?: bs.alignSelf | bs.alignSelf[];
	bsDisplay?: bs.display | bs.display[];
	bsRowCol?: bs.rowCol | bs.rowCol[];

	//---------------------

	bsVisible?: bs.visible;
	bsTextWrap?: bs.textWrap;
	bsFontItalic?: bs.fontItalic;
	bsBgGradient?: bs.bgGradient;
	bsTextBreak?: bs.textBreak;
	bsMonospace?: bs.monospace;

	//---------------------

	bsPlaceholder?: bs.placeholder;
	bsPlaceholderAnimation?: bs.placeholderAnimation;
	bsPlaceholderWeight?: bs.placeholderWeight;

	//---------------------

	bsRow?: bs.row;
	bsCol?: bs.col | bs.col[];

	//---------------------

	bsUserSelect?: bs.userSelect;
	bsPointerEvent?: bs.pointerEvent;
	bsPosition?: bs.position;
	bsOverflow?: bs.overflow;
	bsOverflowX?: bs.overflow;
	bsOverflowY?: bs.overflow;

	//---------------------

	bsTextAlign?: bs.textAlign;
	bsVerticalAlign?: bs.verticalAlign;

	//---------------------
	bsOpacity?: bs.opacity;
	bsBgOpacity?: bs.bgOpacity;
	bsTextOpacity?: bs.textOpacity;

	//---------------------

	bsFocusRing?: bs.focusRing;
	bsTextBgColor?: bs.textBgColor;
	bsTextColor?: bs.textColor;
	bsBgColor?: bs.bgColor;

	//---------------------

	bsTextTransform?: bs.textTransform;
	bsTextDecoration?: bs.textDecoration;
	bsLineHeight?: bs.lineHeight;

	//---------------------

	bsFontSize?: bs.fontSize;
	bsFontDisplay?: bs.fontDisplay;
	bsFontWeight?: bs.fontWeight;

	//---------------------

	bsTop?: bs.top;
	bsBottom?: bs.bottom;
	bsStart?: bs.start;
	bsEnd?: bs.end;
	bsTranslateMiddle?: bs.translateMiddle;

	//---------------------

	bsHeight?: bs.height;
	bsWidth?: bs.width;
	bsMaxHeight?: bs.maxHeight;
	bsMaxWidth?: bs.maxWidth;
	bsMinViewHeight?: bs.minViewHeight;
	bsMinViewWidth?: bs.minViewWidth;
	bsViewHeight?: bs.viewHeight;
	bsViewWidth?: bs.viewWidth;

	//---------------------

	bsShadow?: bs.shadow;

	//---------------------

	bsBorder?: bs.border | bs.border[];
	bsBorderNone?: bs.borderNone | bs.borderNone[];
	bsBorderColor?: bs.borderColor;
	bsBorderOpacity?: bs.borderOpacity;
	bsBorderWidth?: bs.borderWidth;

	//---------------------

	bsRounded?: bs.rounded;
	bsRoundedNone?: bs.roundedNone;
	bsRoundedSize?: bs.roundedSize;

	//---------------------

	bsPadding?: bs.padding | bs.padding[];
	bsPaddingX?: bs.paddingX | bs.paddingX[];
	bsPaddingY?: bs.paddingY | bs.paddingY[];
	bsPaddingTop?: bs.paddingTop | bs.paddingTop[];
	bsPaddingBottom?: bs.paddingBottom | bs.paddingBottom[];
	bsPaddingStart?: bs.paddingStart | bs.paddingStart[];
	bsPaddingEnd?: bs.paddingEnd | bs.paddingEnd[];

	//---------------------

	bsMargin?: bs.margin | bs.margin[];
	bsMarginX?: bs.marginX | bs.marginX[];
	bsMarginY?: bs.marginY | bs.marginY[];
	bsMarginTop?: bs.marginTop | bs.marginTop[];
	bsMarginBottom?: bs.marginBottom | bs.marginBottom[];
	bsMarginStart?: bs.marginStart | bs.marginStart[];
	bsMarginEnd?: bs.marginEnd | bs.marginEnd[];

	//---------------------

	bsGap?: bs.gap | bs.gap[];
	bsGutter?: bs.gutter | bs.gutter[];
	bsGutterX?: bs.gutterX | bs.gutterX[];
	bsGutterY?: bs.gutterY | bs.gutterY[];

	//---------------------

	bsPrint?: bs.print | bs.print;
	bsContainer?: bs.container;

	//---------------------

	bsZIndex?: bs.zIndex;
	bsObjectFit?: bs.objectFit | bs.objectFit[];
	bsRatio?: bs.ratio;
	bsFixed?: bs.fixed;
	bsSticky?: bs.sticky | bs.sticky[];
	bsClearfix?: bs.clearfix;
	bsTextTruncate?: bs.textTruncate;
	bsVisually?: bs.visually;
	bsVstack?: bs.vstack;
	bsHstack?: bs.hstack;
	bsH?: bs.h;
	bsSmall?: bs.small;

	//---------------------

	bsIconLink?: bs.iconLink;
}

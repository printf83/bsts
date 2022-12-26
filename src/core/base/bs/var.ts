let base12: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
let base5: 0 | 1 | 2 | 3 | 4 | 5;
let baseColumn: "auto" | typeof base5;
let baseViewPort: "sm" | "md" | "lg" | "xl" | "xxl";
let baseDisplay: "none"|"inline"|"inline-block"|"block"|"grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"
let baseFlex: "row"|"row-reverse"|"column"|"column-reverse"|"wrap"|"wrap-reverse"|"nowrap"|"fill"|"shrink-0"|"shrink-1"|"grow-0"|"grow-1"
let baseJustifyContent :"start"|"end"|"center"|"between"|"around"|"evenly"
let baseAlign: "start" | "end" | "center" | "baseline" | "stretch";
let baseAlignContent: "start" | "end" | "center" | "between" | "stretch";
let baseOrder: "first" | typeof base12 | "last";
let baseGrid: typeof base12;
let baseRowCol: "auto" | typeof base12;
let baseFloat: "start" | "end" | "none";
let baseColor: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "muted" | "white" | "black" | "transparent" | "link"
let basePositionView: "start" | "center" | "end";

let spacer: typeof baseColumn | `${typeof baseViewPort}-${typeof baseColumn}`;
let display: typeof baseDisplay | `${typeof baseViewPort}-${typeof baseDisplay}`;
let flex: typeof baseFlex | `${typeof baseViewPort}-${typeof baseFlex}`;
let justifyContent: typeof baseJustifyContent | `${typeof baseViewPort}-${typeof baseJustifyContent}`;
let align: typeof baseAlign | `${typeof baseViewPort}-${typeof baseAlign}`;
let alignContent: typeof baseAlignContent | `${typeof baseViewPort}-${typeof baseAlignContent}`;
let alignItem: typeof align;
let alignSelf: typeof align;
let order: typeof baseOrder | `${typeof baseViewPort}-${typeof baseOrder}`;
let grid: typeof baseGrid | `${typeof baseViewPort}-${typeof baseGrid}`;
let offset: typeof grid;
let rowCol: typeof baseRowCol | `${typeof baseViewPort}-${typeof baseRowCol}`;
let float: typeof baseFloat | `${typeof baseViewPort}-${typeof baseFloat}`;
let color: typeof baseColor;
let positionView: typeof basePositionView | `${typeof baseViewPort}-${typeof basePositionView}`;
let visible: boolean;
let textWrap: boolean;
let fontItalic: boolean;
let bgGradient: true;
let wordBreak: true;
let monospace: true;
let placeholder: true;
let row: boolean;
let col: true|typeof rowCol;

let userSelect: "all" | "auto" | "none";
let pointerEvent: "auto" | "none";
let position: "static" | "relative";
let overflow: "auto" | "hidden" | "scroll";

let textAlign: typeof positionView;
let verticalAlign: "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom";

let opacity: 0 | 25 | 50 | 75 | 100;
let bgOpacity: 10 | 25 | 50 | 75 | 100;
let textOpacity: 25 | 50 | 75 | 100;

let textBgColor: typeof color;
let textColor: typeof color;
let bgColor: typeof color;

let textTransform: "lowercase" | "uppercase" | "capitalize";
let textDecoration: "underline" | "line-through" | "none";
let lineHeight: 1 | "sm" | "base" | "lg";

let fontSize: 1 | 2 | 3 | 4 | 5 | 6;
let fontWeight: "bold" | "bolder" | "normal" | "light" | "lighter";

let top: 0 | 50 | 100;
let bottom: typeof top;
let start: typeof top;
let end: typeof top;
let tMiddle: true | "x" | "y";

let height: "auto" | 25 | 50 | 75 | 100;
let width: typeof height;
let maxHeight: 100;
let maxWidth: 100;
let minViewHeight: 100;
let minViewWidth: 100;
let viewHeight: 100;
let viewWidth: 100;

let placeholderAnimation: "glow" | "wave";
let placeholderWeight: "lg" | "sm" | "xs";

let shadow: true | false | "none" | "sm" | "lg" | "inset";
let borderNone: true | "top" | "end" | "bottom" | "start";
let border: typeof borderNone | false;

let borderColor: typeof color;
let borderOpacity: 10 | 25 | 50 | 75;
let borderWidth: typeof base5;
let roundedNone:true | false | "top" | "end" | "bottom" | "start"
let rounded: typeof roundedNone | "circle" | "pill";
let roundedSize: typeof base5;

let padding: typeof spacer;
let paddingX: typeof spacer;
let paddingY: typeof spacer;
let paddingTop: typeof spacer;
let paddingBottom: typeof spacer;
let paddingStart: typeof spacer;
let paddingEnd: typeof spacer;

let margin: typeof spacer;
let marginX: typeof spacer;
let marginY: typeof spacer;
let marginTop: typeof spacer;
let marginBottom: typeof spacer;
let marginStart: typeof spacer;
let marginEnd: typeof spacer;

let gap: typeof spacer;
let gutter: typeof spacer;
let gutterX: typeof spacer;
let gutterY: typeof spacer;

let print: typeof display;
let container: true | "xs" | typeof baseViewPort | "fluid";

const decorder = {
    userSelect: { format: "user-select-$1",value: userSelect },
    pointerEvent: { format: "pe-$1",value: pointerEvent },
    position: { format: "position-$1", value:  position},
	overflow: { format: "overflow-$1", value: overflow },

	textAlign: { format: "text-$1", value: textAlign },
	verticalAlign: { format: "align-$1", value: verticalAlign },

	opacity: { format: "opacity-$1", value: opacity },
	bgOpacity: { format: "bg-opacity-$1", value: bgOpacity },
	textOpacity: { format: "text-opacity-$1", value: textOpacity },

	btnColor: { format: "btn-$1", value: color },
	btnOutlineColor: { format: "btn-outline-$1", value: color },
	alertColor: { format: "alert-$1", value: color },

	textBgColor: { format: "text-bg-$1", value: color },
	textColor: { format: "text-$1", value: color },
	linkColor: { format: "link-$1", value: color },
	bgColor: { format: "bg-$1", value: color },

	textTransform: { format: "text-$1", value: textTransform },
	textDecoration: { format: "text-decoration-$1", value: textDecoration },
	lineHeight: { format: "lh-$1", value: lineHeight },

	fontSize: { format: "fs-$1", value: fontSize },
	fontWeight: { format: "fw-$1", value: fontWeight },

	top: { format: "top-$1", value: top },
	bottom: { format: "bottom-$1", value: bottom },
	start: { format: "start-$1", value: start },
	end: { format: "end-$1", value: end },
	tMiddle: { format: "translate-middle-$1", formatTrue: "translate-middle", value: tMiddle },

    height: { format: "h-$1", value: height},
	width: { format: "w-$1", value: width },
	maxHeight: { format: "mh-$1", value: maxHeight },
	maxWidth: { format: "mw-$1", value: maxWidth },
	minViewHeight: { format: "min-vh-$1", value: minViewHeight },
	minViewWidth: { format: "min-vw-$1", value: minViewWidth },
	viewHeight: { format: "vh-$1", value: viewHeight },
    viewWeight: { format: "vw-$1", value: viewWidth },
    
    placeholderAnimation: { format: "placeholder-$1", value: placeholderAnimation},
    placeholderWeight: { format: "placeholder-$1", formatValue: "placeholder $1", value: placeholderWeight },
    
    shadow: {
		format: "shadow-$1",
		formatTrue: "shadow",
		formatFalse: "shadow-none",
		value: shadow,
	},

	border: {
		format: "border-$1",
		formatTrue: "border",
		formatFalse: "border-0",
		value: border,
	},

	borderNone: {
		format: "border border-$1-0",
		formatTrue: "border-0",
		value: borderNone,
	},

	borderColor: {
		format: "border-$1",
		formatValue: "border",
		value: borderColor,
	},

	borderOpacity: {
		format: "border-opacity-$1",
		formatValue: "border",
		value: borderOpacity,
	},

	borderWidth: {
		format: "border-$1",
		formatValue: "border",
		value: borderWidth,
	},

	rounded: {
		format: "rounded-$1",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
		value: rounded,
	},

	roundedNone: {
		format: "rounded-$1-0",
		formatTrue: "rounded-0",
		formatFalse: "rounded",
		formatValue: "rounded",
		value: roundedNone,
	},

	roundedSize: {
		format: "rounded-$1",
		formatValue: "rounded",
		value: roundedSize,
	},

	padding: { format: "p-$1", value: padding },
	paddingX: { format: "px-$1", value: paddingX },
	paddingY: { format: "py-$1", value: paddingY },
	paddingTop: { format: "pt-$1", value: paddingTop },
	paddingBottom: { format: "pb-$1", value: paddingBottom },
	paddingStart: { format: "ps-$1", value: paddingStart },
	paddingEnd: { format: "pe-$1", value: paddingEnd },

	margin: { format: "m-$1", value: margin },
	marginX: { format: "mx-$1", value: marginX },
	marginY: { format: "my-$1", value: marginY },
	marginTop: { format: "mt-$1", value: marginTop },
	marginBottom: { format: "mb-$1", value: marginBottom },
	marginStart: { format: "ms-$1", value: marginStart },
	marginEnd: { format: "me-$1", value: marginEnd },

	gap: { format: "gap-$1", value: gap },
	gutter: { format: "g-$1", value: gutter },
	gutterX: { format: "gx-$1", value: gutterX },
	gutterY: { format: "gy-$1", value: gutterY },

	display: { format: "d-$1", value: display },
	print: { format: "d-print-$1", value: print },
	container: {
		format: "container-$1",
		formatTrue: "container",
		value: container,
	},

	flex: {
		format: "flex-$1",
		value: flex,
	},

	float: {
		format: "float-$1",
		value: float,
	},

	order: {
		format: "order-$1",
		value: order,
	},

	offset: {
		format: "offset-$1",
		value: offset,
	},

	alignContent: {
		format: "align-content-$1",
		value: alignContent,
	},

	justifyContent: {
		format: "justify-content-$1",
		value: justifyContent,
	},

	alignItem: {
		format: "align-items-$1",
		value: alignItem,
	},
	alignSelf: {
		format: "align-self-$1",
		value: alignSelf,
	},

	visible: {
		formatTrue: "visible",
		formatFalse: "invisible",
		value: visible
	},
	textWrap: {
		formatTrue: "text-wrap",
		formatFalse: "text-nowrap",
		value: textWrap,
	},
	fontItalic: {
		formatTrue: "fst-italic",
		formatFalse: "fst-normal",
		value: fontItalic,
	},
	bgGradient: {
		formatTrue: "bg-gradient",
		value: bgGradient,
	},
	wordBreak: {
		formatTrue: "text-break",
		value: wordBreak
	},
	monospace: { formatTrue: "font-monospace", value: monospace},
	placeholder: {formatTrue: "placeholder", value: placeholder},
    row: { formatTrue: "row", formatFalse: null, value: row },
	col: {format: "col-$1", formatTrue: "col", value: col},
	rowCol: {format: "row-cols-$1",value: rowCol},
}
export { };

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

export type spacer = typeof spacer
export type display = typeof display
export type flex = typeof flex
export type justifyContent = typeof justifyContent
export type align = typeof align
export type alignContent = typeof alignContent
export type alignItem = typeof alignItem
export type alignSelf = typeof alignSelf
export type order = typeof order
export type grid = typeof grid
export type offset = typeof offset
export type rowCol = typeof rowCol
export type float = typeof float
export type color = typeof color
export type positionView = typeof positionView
export type visible = typeof visible
export type textWrap = typeof textWrap
export type fontItalic = typeof fontItalic
export type bgGradient = typeof bgGradient
export type spawordBreakcer = typeof wordBreak
export type monospace = typeof monospace
export type placeholder = typeof placeholder
export type row = typeof row
export type col = typeof col
export type userSelect = typeof userSelect
export type pointerEvent = typeof pointerEvent
export type position = typeof position
export type overflow = typeof overflow
export type textAlign = typeof textAlign
export type verticalAlign = typeof verticalAlign
export type opacity = typeof opacity
export type bgOpacity = typeof bgOpacity
export type textOpacity = typeof textOpacity
export type textBgColor = typeof textBgColor
export type textColor = typeof textColor
export type bgColor = typeof bgColor
export type textTransform = typeof textTransform
export type textDecoration = typeof textDecoration
export type lineHeight = typeof lineHeight
export type fontSize = typeof fontSize
export type fontWeight = typeof fontWeight
export type top = typeof top
export type bottom = typeof bottom
export type start = typeof start
export type end = typeof end
export type tMiddle = typeof tMiddle
export type height = typeof height
export type width = typeof width
export type maxHeight = typeof maxHeight
export type maxWidth = typeof maxWidth
export type minViewHeight = typeof minViewHeight
export type minViewWidth = typeof minViewWidth
export type viewHeight = typeof viewHeight
export type viewWidth = typeof viewWidth
export type placeholderAnimation = typeof placeholderAnimation
export type placeholderWeight = typeof placeholderWeight
export type shadow = typeof shadow
export type borderNone = typeof borderNone
export type border = typeof border
export type borderColor = typeof borderColor
export type borderOpacity = typeof borderOpacity
export type borderWidth = typeof borderWidth
export type roundedNone = typeof roundedNone
export type rounded = typeof rounded
export type padding = typeof padding
export type paddingX = typeof paddingX
export type paddingY = typeof paddingY
export type paddingTop = typeof paddingTop
export type paddingBottom = typeof paddingBottom
export type paddingStart = typeof paddingStart
export type paddingEnd = typeof paddingEnd
export type margin = typeof margin
export type marginX = typeof marginX
export type marginY = typeof marginY
export type marginTop = typeof marginTop
export type marginBottom = typeof marginBottom
export type marginStart = typeof marginStart
export type marginEnd = typeof marginEnd
export type gap = typeof gap
export type gutter = typeof gutter
export type gutterX = typeof gutterX
export type gutterY = typeof gutterY
export type print = typeof print
export type container = typeof container

import { bsType } from "./bsType.js";

export interface bsClass {
	//---------------------
	// viewport and color handle by component
	//---------------------

	flex?: bsType.flex | bsType.flex[];
	float?: bsType.float | bsType.float[];
	order?: bsType.order | bsType.order[];
	offset?: bsType.offset | bsType.offset[];

	//---------------------

	alignContent?: bsType.alignContent | bsType.alignContent[];
	justifyContent?: bsType.justifyContent | bsType.justifyContent[];
	alignItem?: bsType.alignItem | bsType.alignItem[];
	alignSelf?: bsType.alignSelf | bsType.alignSelf[];
	display?: bsType.display | bsType.display[];
	rowCol?: bsType.rowCol | bsType.rowCol[];

	//---------------------

	visible?: bsType.visible;
	textWrap?: bsType.textWrap;
	fontItalic?: bsType.fontItalic;
	bgGradient?: bsType.bgGradient;
	textBreak?: bsType.textBreak;
	monospace?: bsType.monospace;

	//---------------------

	loadingPlaceholder?: bsType.loadingPlaceholder;
	loadingPlaceholderAnimation?: bsType.loadingPlaceholderAnimation;
	loadingPlaceholderWeight?: bsType.loadingPlaceholderWeight;

	//---------------------

	row?: bsType.row;
	col?: bsType.col | bsType.col[];

	//---------------------

	userSelect?: bsType.userSelect;
	pointerEvent?: bsType.pointerEvent;
	position?: bsType.position;
	overflow?: bsType.overflow;
	overflowX?: bsType.overflow;
	overflowY?: bsType.overflow;

	//---------------------

	textAlign?: bsType.textAlign | bsType.textAlign[];
	verticalAlign?: bsType.verticalAlign;

	//---------------------
	opacity?: bsType.opacity;
	bgOpacity?: bsType.bgOpacity;
	textOpacity?: bsType.textOpacity;

	//---------------------

	focusRing?: bsType.focusRing;
	textBgColor?: bsType.textBgColor;
	textColor?: bsType.textColor;
	bgColor?: bsType.bgColor;

	//---------------------

	textTransform?: bsType.textTransform;
	textDecoration?: bsType.textDecoration;
	lineHeight?: bsType.lineHeight;

	//---------------------

	fontSize?: bsType.fontSize;
	fontDisplay?: bsType.fontDisplay;
	fontWeight?: bsType.fontWeight;

	//---------------------

	top?: bsType.top;
	bottom?: bsType.bottom;
	start?: bsType.start;
	end?: bsType.end;
	tMiddle?: bsType.tMiddle;

	//---------------------

	height?: bsType.height;
	width?: bsType.width;
	maxHeight?: bsType.maxHeight;
	maxWidth?: bsType.maxWidth;
	minViewHeight?: bsType.minViewHeight;
	minViewWidth?: bsType.minViewWidth;
	viewHeight?: bsType.viewHeight;
	viewWidth?: bsType.viewWidth;

	//---------------------

	shadow?: bsType.shadow;

	//---------------------

	border?: bsType.border | bsType.border[];
	borderNone?: bsType.borderNone | bsType.borderNone[];
	borderColor?: bsType.borderColor;
	borderOpacity?: bsType.borderOpacity;
	borderWidth?: bsType.borderWidth;

	//---------------------

	rounded?: bsType.rounded;
	roundedNone?: bsType.roundedNone;
	roundedSize?: bsType.roundedSize;

	//---------------------

	padding?: bsType.padding | bsType.padding[];
	paddingX?: bsType.paddingX | bsType.paddingX[];
	paddingY?: bsType.paddingY | bsType.paddingY[];
	paddingTop?: bsType.paddingTop | bsType.paddingTop[];
	paddingBottom?: bsType.paddingBottom | bsType.paddingBottom[];
	paddingStart?: bsType.paddingStart | bsType.paddingStart[];
	paddingEnd?: bsType.paddingEnd | bsType.paddingEnd[];

	//---------------------

	margin?: bsType.margin | bsType.margin[];
	marginX?: bsType.marginX | bsType.marginX[];
	marginY?: bsType.marginY | bsType.marginY[];
	marginTop?: bsType.marginTop | bsType.marginTop[];
	marginBottom?: bsType.marginBottom | bsType.marginBottom[];
	marginStart?: bsType.marginStart | bsType.marginStart[];
	marginEnd?: bsType.marginEnd | bsType.marginEnd[];

	//---------------------

	gap?: bsType.gap | bsType.gap[];
	gutter?: bsType.gutter | bsType.gutter[];
	gutterX?: bsType.gutterX | bsType.gutterX[];
	gutterY?: bsType.gutterY | bsType.gutterY[];

	//---------------------

	print?: bsType.print | bsType.print;
	container?: bsType.container;

	//---------------------

	zIndex?: bsType.zIndex;
	objectFit?: bsType.objectFit | bsType.objectFit[];
	ratio?: bsType.ratio;
	fixed?: bsType.fixed;
	sticky?: bsType.sticky | bsType.sticky[];
	clearfix?: bsType.clearfix;
	textTruncate?: bsType.textTruncate;
	visually?: bsType.visually;
	vstack?: bsType.vstack;
	hstack?: bsType.hstack;
	h?: bsType.h;
	small?: bsType.small;

	//---------------------

	iconLink?: bsType.iconLink;

	//---------------------
}

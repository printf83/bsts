import { mergeObject } from "../fn/mergeObject.js";
import { bootstrapType } from "./bootstrap.js";

export interface IStyle {
	alignContent?: string;
	alignItems?: string;
	alignSelf?: string;
	animation?: string;
	animationDelay?: string;
	animationDirection?: string;
	animationDuration?: string;
	animationFillMode?: string;
	animationIterationCount?: string;
	animationName?: string;
	animationTimingFunction?: string;
	animationPlayState?: string;
	background?: string;
	backgroundAttachment?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundPosition?: string;
	backgroundRepeat?: string;
	backgroundClip?: string;
	backgroundOrigin?: string;
	backgroundSize?: string;
	backfaceVisibility?: string;
	border?: string;
	borderBottom?: string;
	borderBottomColor?: string;
	borderBottomLeftRadius?: string;
	borderBottomRightRadius?: string;
	borderBottomStyle?: string;
	borderBottomWidth?: string;
	borderCollapse?: string;
	borderColor?: string;
	borderImage?: string;
	borderImageOutset?: string;
	borderImageRepeat?: string;
	borderImageSlice?: string;
	borderImageSource?: string;
	borderImageWidth?: string;
	borderLeft?: string;
	borderLeftColor?: string;
	borderLeftStyle?: string;
	borderLeftWidth?: string;
	borderRadius?: string;
	borderRight?: string;
	borderRightColor?: string;
	borderRightStyle?: string;
	borderRightWidth?: string;
	borderSpacing?: string;
	borderStyle?: string;
	borderTop?: string;
	borderTopColor?: string;
	borderTopLeftRadius?: string;
	borderTopRightRadius?: string;
	borderTopStyle?: string;
	borderTopWidth?: string;
	borderWidth?: string;
	bottom?: string;
	boxDecorationBreak?: string;
	boxShadow?: string;
	boxSizing?: string;
	captionSide?: string;
	caretColor?: string;
	clear?: string;
	clip?: string;
	color?: string;
	columnCount?: string;
	columnFill?: string;
	columnGap?: string;
	columnRule?: string;
	columnRuleColor?: string;
	columnRuleStyle?: string;
	columnRuleWidth?: string;
	columns?: string;
	columnSpan?: string;
	columnWidth?: string;
	content?: string;
	counterIncrement?: string;
	counterReset?: string;
	cursor?: string;
	direction?: string;
	display?: string;
	emptyCells?: string;
	filter?: string;
	flex?: string;
	flexBasis?: string;
	flexDirection?: string;
	flexFlow?: string;
	flexGrow?: string;
	flexShrink?: string;
	flexWrap?: string;
	cssFloat?: string;
	font?: string;
	fontFamily?: string;
	fontSize?: string;
	fontStyle?: string;
	fontVariant?: string;
	fontWeight?: string;
	fontSizeAdjust?: string;
	fontStretch?: string;
	hangingPunctuation?: string;
	height?: string;
	hyphens?: string;
	icon?: string;
	imageOrientation?: string;
	isolation?: string;
	justifyContent?: string;
	left?: string;
	letterSpacing?: string;
	lineHeight?: string;
	listStyle?: string;
	listStyleImage?: string;
	listStylePosition?: string;
	listStyleType?: string;
	margin?: string;
	marginBottom?: string;
	marginLeft?: string;
	marginRight?: string;
	marginTop?: string;
	maxHeight?: string;
	maxWidth?: string;
	minHeight?: string;
	minWidth?: string;
	navDown?: string;
	navIndex?: string;
	navLeft?: string;
	navRight?: string;
	navUp?: string;
	objectFit?: string;
	objectPosition?: string;
	opacity?: string;
	order?: string;
	orphans?: string;
	outline?: string;
	outlineColor?: string;
	outlineOffset?: string;
	outlineStyle?: string;
	outlineWidth?: string;
	overflow?: string;
	overflowX?: string;
	overflowY?: string;
	padding?: string;
	paddingBottom?: string;
	paddingLeft?: string;
	paddingRight?: string;
	paddingTop?: string;
	pageBreakAfter?: string;
	pageBreakBefore?: string;
	pageBreakInside?: string;
	perspective?: string;
	perspectiveOrigin?: string;
	position?: string;
	quotes?: string;
	resize?: string;
	right?: string;
	scrollBehavior?: string;
	tableLayout?: string;
	tabSize?: string;
	textAlign?: string;
	textAlignLast?: string;
	textDecoration?: string;
	textDecorationColor?: string;
	textDecorationLine?: string;
	textDecorationStyle?: string;
	textIndent?: string;
	textJustify?: string;
	textOverflow?: string;
	textShadow?: string;
	textTransform?: string;
	top?: string;
	transform?: string;
	transformOrigin?: string;
	transformStyle?: string;
	transition?: string;
	transitionProperty?: string;
	transitionDuration?: string;
	transitionTimingFunction?: string;
	transitionDelay?: string;
	unicodeBidi?: string;
	userSelect?: string;
	verticalAlign?: string;
	visibility?: string;
	whiteSpace?: string;
	width?: string;
	wordBreak?: string;
	wordSpacing?: string;
	wordWrap?: string;
	widows?: string;
	zIndex?: string;

	[key: string]: string | undefined;
}

export interface IEvent {
	afterprint?: EventListener;
	beforeprint?: EventListener;
	beforeunload?: EventListener;
	errorscript?: EventListener;
	hashchange?: EventListener;
	load?: EventListener;
	message?: EventListener;
	offline?: EventListener;
	online?: EventListener;
	pagehide?: EventListener;
	pageshow?: EventListener;
	popstate?: EventListener;
	resize?: EventListener;
	storage?: EventListener;
	unload?: EventListener;

	blur?: EventListener;
	change?: EventListener;
	contextmenu?: EventListener;
	focus?: EventListener;
	input?: EventListener;
	invalid?: EventListener;
	reset?: EventListener;
	search?: EventListener;
	select?: EventListener;
	submit?: EventListener;

	keydown?: EventListener;
	keypress?: EventListener;
	keyup?: EventListener;

	click?: EventListener;
	dblclick?: EventListener;
	mousedown?: EventListener;
	mousemove?: EventListener;
	mouseout?: EventListener;
	mouseover?: EventListener;
	mouseup?: EventListener;
	mousewheel?: EventListener;
	wheel?: EventListener;

	drag?: EventListener;
	dragend?: EventListener;
	dragenter?: EventListener;
	dragleave?: EventListener;
	dragover?: EventListener;
	dragstart?: EventListener;
	drop?: EventListener;
	scroll?: EventListener;

	copy?: EventListener;
	cut?: EventListener;
	paste?: EventListener;

	abort?: EventListener;
	canplay?: EventListener;
	canplaythrough?: EventListener;
	cuechange?: EventListener;
	durationchange?: EventListener;
	emptied?: EventListener;
	ended?: EventListener;
	error?: EventListener;
	loadeddata?: EventListener;
	loadedmetadata?: EventListener;
	loadstart?: EventListener;
	pause?: EventListener;
	play?: EventListener;
	playing?: EventListener;
	progress?: EventListener;
	ratechange?: EventListener;
	seeked?: EventListener;
	seeking?: EventListener;
	stalled?: EventListener;
	suspend?: EventListener;
	timeupdate?: EventListener;
	volumechange?: EventListener;
	waiting?: EventListener;

	toggle?: EventListener;

	[key: string]: EventListener | undefined;
}

export interface IAria {
	[key: string]: string | number | boolean | undefined;
}

export interface IData {
	[key: string]: string | number | boolean | undefined;
}

export interface IGlobal {
	id?: string;
	class?: string | (string | undefined)[];
	accesskey?: string;
	contenteditable?: "true";
	dir?: string;
	draggable?: string;
	lang?: string;
	spellcheck?: string;
	tabindex?: string;
	title?: string;
	translate?: string;

	hidden?: boolean;
	itemscope?: boolean;
	nomodule?: boolean;
	playsinline?: boolean;
	truespeed?: boolean;
}

export interface IGlobalAria {
	label?: string;
	labelledby?: string;
	ownby?: string;
	describedby?: string;
	controlby?: string;
}

export interface IBootstrap {
	theme?: bootstrapType.theme[number];

	userSelect?: bootstrapType.userSelect[number];
	pointerEvent?: bootstrapType.pointerEvent[number];
	position?: bootstrapType.position[number];
	overflow?: bootstrapType.overflow[number];

	textAlign?: bootstrapType.textAlign[number];
	verticalAlign?: bootstrapType.verticalAlign[number];

	opacity?: bootstrapType.opacity[number];
	bgOpacity?: bootstrapType.bgOpacity[number];
	textOpacity?: bootstrapType.textOpacity[number];

	textBgColor?: bootstrapType.textBgColor[number];
	textColor?: bootstrapType.textColor[number];
	linkColor?: bootstrapType.linkColor[number];
	bgColor?: bootstrapType.bgColor[number];

	textTransform?: bootstrapType.textTransform[number];
	textDecoration?: bootstrapType.textDecoration[number];
	lineHeight?: bootstrapType.lineHeight[number];

	fontSize?: bootstrapType.fontSize[number];
	fontDisplay?: bootstrapType.fontDisplay[number];
	fontWeight?: bootstrapType.fontWeight[number];

	top?: bootstrapType.top[number];
	bottom?: bootstrapType.bottom[number];
	start?: bootstrapType.start[number];
	end?: bootstrapType.end[number];
	tMiddle?: bootstrapType.tMiddle[number];

	height?: bootstrapType.height[number];
	width?: bootstrapType.width[number];
	maxHeight?: bootstrapType.maxHeight[number];
	maxWidth?: bootstrapType.maxWidth[number];
	minViewHeight?: bootstrapType.minViewHeight[number];
	minViewWidth?: bootstrapType.minViewWidth[number];
	viewHeight?: bootstrapType.viewHeight[number];
	viewWidth?: bootstrapType.viewWidth[number];

	placeholder?: bootstrapType.placeholder[number];
	placeholderAnimation?: bootstrapType.placeholderAnimation[number];
	placeholderWeight?: bootstrapType.placeholderWeight[number];

	shadow?: bootstrapType.shadow[number];

	border?: bootstrapType.border[number] | bootstrapType.border[number][];
	borderNone?: bootstrapType.borderNone[number] | bootstrapType.borderNone[number][];
	borderColor?: bootstrapType.borderColor[number];
	borderOpacity?: bootstrapType.borderOpacity[number];
	borderWidth?: bootstrapType.borderWidth[number];

	rounded?: bootstrapType.rounded[number];
	roundedNone?: bootstrapType.roundedNone[number];
	roundedSize?: bootstrapType.roundedSize[number];

	padding?: bootstrapType.padding[number] | bootstrapType.padding[number][];
	paddingX?: bootstrapType.paddingX[number] | bootstrapType.paddingX[number][];
	paddingY?: bootstrapType.paddingY[number] | bootstrapType.paddingY[number][];
	paddingTop?: bootstrapType.paddingTop[number] | bootstrapType.paddingTop[number][];
	paddingBottom?: bootstrapType.paddingBottom[number] | bootstrapType.paddingBottom[number][];
	paddingStart?: bootstrapType.paddingStart[number] | bootstrapType.paddingStart[number][];
	paddingEnd?: bootstrapType.paddingEnd[number] | bootstrapType.paddingEnd[number][];

	margin?: bootstrapType.margin[number] | bootstrapType.margin[number][];
	marginX?: bootstrapType.marginX[number] | bootstrapType.marginX[number][];
	marginY?: bootstrapType.marginY[number] | bootstrapType.marginY[number][];
	marginTop?: bootstrapType.marginTop[number] | bootstrapType.marginTop[number][];
	marginBottom?: bootstrapType.marginBottom[number] | bootstrapType.marginBottom[number][];
	marginStart?: bootstrapType.marginStart[number] | bootstrapType.marginStart[number][];
	marginEnd?: bootstrapType.marginEnd[number] | bootstrapType.marginEnd[number][];

	gap?: bootstrapType.gap[number] | bootstrapType.gap[number][];
	gutter?: bootstrapType.gutter[number] | bootstrapType.gutter[number];
	gutterX?: bootstrapType.gutterX[number] | bootstrapType.gutterX[number][];
	gutterY?: bootstrapType.gutterY[number] | bootstrapType.gutterY[number][];

	display?: bootstrapType.display[number] | bootstrapType.display[number][];
	print?: bootstrapType.print[number] | bootstrapType.print[number];
	container?: bootstrapType.container[number];

	flex?: bootstrapType.flex[number] | bootstrapType.flex[number][];
	float?: bootstrapType.float[number] | bootstrapType.float[number][];
	order?: bootstrapType.order[number] | bootstrapType.order[number][];
	offset?: bootstrapType.offset[number] | bootstrapType.offset[number][];

	alignContent?: bootstrapType.alignContent[number] | bootstrapType.alignContent[number][];
	justifyContent?: bootstrapType.justifyContent[number] | bootstrapType.justifyContent[number][];
	alignItem?: bootstrapType.alignItem[number] | bootstrapType.alignItem[number][];
	alignSelf?: bootstrapType.alignSelf[number] | bootstrapType.alignSelf[number][];

	visible?: bootstrapType.visible[number];
	textWrap?: bootstrapType.textWrap[number];
	fontItalic?: bootstrapType.fontItalic[number];
	bgGradient?: bootstrapType.bgGradient[number];
	wordBreak?: bootstrapType.wordBreak[number];
	monospace?: bootstrapType.monospace[number];
	row?: bootstrapType.row[number];
	col?: bootstrapType.col[number] | bootstrapType.col[number][];
	rowCol?: bootstrapType.rowCol[number] | bootstrapType.rowCol[number][];

	zIndex?: bootstrapType.zindex[number];
	objectFit?: bootstrapType.objectFit[number] | bootstrapType.objectFit[number][];
	ratio?: bootstrapType.ratio[number];
	fixed?: bootstrapType.fixed[number];
	sticky?: bootstrapType.sticky[number] | bootstrapType.sticky[number][];
	clearfix?: bootstrapType.clearfix[number];
	truncate?: bootstrapType.truncate[number];
	visually?: bootstrapType.visually[number];
	vstack?: bootstrapType.vstack[number];
	hstack?: bootstrapType.hstack[number];
}

export interface IAttr extends IGlobal, IGlobalAria, IBootstrap {
	data?: IData;
	aria?: IAria;
	on?: IEvent;
	style?: IStyle;
	elem?: IElem;
}

export interface ITag {
	tag: string;
	elem?: IElem;
	attr?: IAttr;
	// dom?: HTMLElement;
}

export type IElem = string | tag | (string | tag)[];

const convert = (attr: IAttr) => {
	if (attr.theme || attr.label || attr.labelledby || attr.ownby || attr.describedby || attr.controlby) {
		attr = mergeObject(
			{
				data: { "bs-theme": attr.theme },
				aria: {
					label: attr.label,
					labelledby: attr.labelledby,
					owns: attr.ownby,
					describedby: attr.describedby,
					controls: attr.controlby,
				},
			},
			attr
		);

		delete attr.theme;
		delete attr.label;
		delete attr.labelledby;
		delete attr.ownby;
		delete attr.describedby;
		delete attr.controlby;
	}

	return attr;
};

export class tag implements ITag {
	public isbsts = true;

	public tag: string = "div";
	public elem?: IElem;
	public attr?: IAttr;
	// public dom?: HTMLElement;

	constructor(); //#1
	constructor(tag: string); //#2
	constructor(tag: string, attr?: IAttr); //#3
	constructor(...arg: any[]) {
		if (arg) {
			if (arg.length === 1) {
				this.tag = arg[0];
			} else if (arg.length === 2) {
				this.tag = arg[0];

				if (arg[1]) {
					this.elem = arg[1].elem;
					delete arg[1].elem;
					this.attr = convert(arg[1]);
				}
			} else {
				this.tag = "div";
			}
		} else {
			this.tag = "div";
		}
	}
}

export const isTag = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};

export const isAttr = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj);
};

export const tagConsNoElemArg = <T extends IAttr>(arg: any[]): T => {
	if (arg.length === 1) {
		return arg[0] as T;
	} else {
		return {} as T;
	}
};

export const tagConsArg = <T extends IAttr>(prop: string, arg: any[]): T => {
	if (arg.length === 1) {
		if (isAttr<T>(arg[0])) {
			return arg[0] as T;
		} else {
			return { [prop]: arg[0] } as T;
		}
	} else if (arg.length === 2) {
		return mergeObject<T>({ [prop]: arg[1] } as T, arg[0]);
	} else {
		return {} as T;
	}
};

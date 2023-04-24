import { mergeObject } from "./mergeObject.js";
import { IBsAttr, IBsClass } from "./bootstrap.js";

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
	tabindex?: string | number;
	title?: string;
	translate?: string;

	hidden?: boolean;
	itemscope?: boolean;
	nomodule?: boolean;
	playsinline?: boolean;
	truespeed?: boolean;

	attrWidth?: string | number;
	attwHeight?: string | number;
	// role?: string;
}

export interface IAttr extends IGlobal, IBsAttr, IBsClass {
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

export type IElem = string | tag | strHtml | (string | tag | strHtml)[];

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
					this.attr = arg[1];
				}
			} else {
				this.tag = "div";
			}
		} else {
			this.tag = "div";
		}
	}
}

//now new keyword for tag
export const Tag = (Tag: string, Attr?: IAttr) => {
	return new tag(Tag, Attr);
};

export class strHtml {
	ishtml = true;
	public elem?: string;

	constructor();
	constructor(elem: string);
	constructor(...arg: any[]) {
		if (arg) {
			this.elem = arg[0];
		} else {
			this.elem = "";
		}
	}
}

//now new keyword for tag
export const StrHtml = (Html: string) => {
	return new strHtml(Html);
};

export const isTag = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "isbsts" in obj && obj["isbsts"] === true;
};

export const isHtml = <T extends strHtml>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && "ishtml" in obj && obj["ishtml"] === true;
};

export const isAttr = <T>(obj: any): obj is T => {
	return typeof obj === "object" && !Array.isArray(obj) && !("isbsts" in obj) && !("ishtml" in obj);
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

const createTag = <T extends tag>(TagClass: new (...args: any[]) => T, ...ctorArgs: any[]): T => {
	return new TagClass(...ctorArgs);
};

export const genTagClass = <T extends tag, U>(
	TagClass: new (...args: any[]) => T,
	AttrOrElem?: U | IElem,
	Elem?: IElem
) => {
	if (AttrOrElem) {
		if (isAttr<U>(AttrOrElem)) {
			if (Elem) {
				return createTag(TagClass, AttrOrElem as U, Elem) as T;
			} else {
				return createTag(TagClass, AttrOrElem as U) as T;
			}
		} else {
			return createTag(TagClass, AttrOrElem as IElem) as T;
		}
	} else {
		return createTag(TagClass) as T;
	}
};

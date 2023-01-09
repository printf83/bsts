import { attachOther } from "./attachOther.js";
import { attachHref } from "./attachHref.js";
import { attachAria } from "./attachAria.js";
import { attachData } from "./attachData.js";
import { attachBoolean } from "./attachBoolean.js";
import { attachDisabled } from "./attachDisabled.js";
import { attachActive } from "./attachActive.js";
import { setting } from "../fn/setting.js";
import { attachBootstrap } from "./attachBootstrap.js";
import { attachEvent } from "./attachEvent.js";
import { attachStyle } from "./attachStyle.js";
import { attachClass } from "./attachClass.js";
import { bs } from "./attachBootstrap.js";
import { tag } from "../../tag/index.js";
import { extend } from "../fn/extend.js";

export interface baseStyle {
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
}

export interface baseEvent {
	[key: string]: EventListener;

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
}

export interface baseAria {
	[key: string]: string | number | boolean;
}

export interface baseData {
	[key: string]: string | number | boolean;
}

export interface baseAttr {
	id?: string;
	name?: string;
	class?: string | string[];

	data?: baseData;
	aria?: baseAria;
	on?: baseEvent;
	style?: baseStyle;

	//html attribute [start]
	accept?: string;
	acceptCharset?: string;
	accesskey?: string;
	action?: string;
	alt?: string;
	autocomplete?: string;
	charset?: string;
	cite?: string;
	cols?: string;
	colspan?: string;
	content?: string;
	contenteditable?: string;
	coords?: string;
	datetime?: string;
	dir?: string;
	dirname?: string;
	download?: string;
	draggable?: string;
	enctype?: string;
	for?: string;
	form?: string;
	formaction?: string;
	headers?: string;
	high?: string;
	href?: string;
	hreflang?: string;
	httpEquiv?: string;
	kind?: string;
	label?: string;
	lang?: string;
	list?: string;
	low?: string;
	max?: string;
	maxlength?: string;
	media?: string;
	method?: string;
	min?: string;
	optimum?: string;
	pattern?: string;
	poster?: string;
	preload?: string;
	readonly?: string;
	rel?: string;
	rows?: string;
	rowspan?: string;
	sandbox?: string;
	scope?: string;
	shape?: string;
	size?: string;
	sizes?: string;
	span?: string;
	spellcheck?: string;
	src?: string;
	srcdoc?: string;
	srclang?: string;
	srcset?: string;
	step?: string;
	tabindex?: string;
	target?: string;
	title?: string;
	translate?: string;
	type?: string;
	usemap?: string;
	value?: string;
	wrap?: string;

	//bootstrap [start]
	userSelect?: bs.userSelect[number];
	pointerEvent?: bs.pointerEvent[number];
	position?: bs.position[number];
	overflow?: bs.overflow[number];

	textAlign?: bs.textAlign[number];
	verticalAlign?: bs.verticalAlign[number];

	opacity?: bs.opacity[number];
	bgOpacity?: bs.bgOpacity[number];
	textOpacity?: bs.textOpacity[number];

	btnColor?: bs.btnColor[number];
	btnOutlineColor?: bs.btnOutlineColor[number];
	alertColor?: bs.alertColor[number];

	textBgColor?: bs.textBgColor[number];
	textColor?: bs.textColor[number];
	linkColor?: bs.linkColor[number];
	bgColor?: bs.bgColor[number];

	textTransform?: bs.textTransform[number];
	textDecoration?: bs.textDecoration[number];
	lineHeight?: bs.lineHeight[number];

	fontSize?: bs.fontSize[number];
	fontWeight?: bs.fontWeight[number];

	top?: bs.top[number];
	bottom?: bs.bottom[number];
	start?: bs.start[number];
	end?: bs.end[number];
	tMiddle?: bs.tMiddle[number];

	height?: bs.height[number];
	width?: bs.width[number];
	maxHeight?: bs.maxHeight[number];
	maxWidth?: bs.maxWidth[number];
	minViewHeight?: bs.minViewHeight[number];
	minViewWidth?: bs.minViewWidth[number];
	viewHeight?: bs.viewHeight[number];
	viewWidth?: bs.viewWidth[number];

	placeholder?: bs.placeholder[number];
	placeholderAnimation?: bs.placeholderAnimation[number];
	placeholderWeight?: bs.placeholderWeight[number];

	shadow?: bs.shadow[number];

	border?: bs.border[number];
	borderNone?: bs.borderNone[number];
	borderColor?: bs.borderColor[number];
	borderOpacity?: bs.borderOpacity[number];
	borderWidth?: bs.borderWidth[number];

	rounded?: bs.rounded[number];
	roundedNone?: bs.roundedNone[number];
	roundedSize?: bs.roundedSize[number];

	padding?: bs.padding[number] | bs.padding[number][];
	paddingX?: bs.paddingX[number] | bs.paddingX[number][];
	paddingY?: bs.paddingY[number] | bs.paddingY[number][];
	paddingTop?: bs.paddingTop[number] | bs.paddingTop[number][];
	paddingBottom?: bs.paddingBottom[number] | bs.paddingBottom[number][];
	paddingStart?: bs.paddingStart[number] | bs.paddingStart[number][];
	paddingEnd?: bs.paddingEnd[number] | bs.paddingEnd[number][];

	margin?: bs.margin[number] | bs.margin[number][];
	marginX?: bs.marginX[number] | bs.marginX[number][];
	marginY?: bs.marginY[number] | bs.marginY[number][];
	marginTop?: bs.marginTop[number] | bs.marginTop[number][];
	marginBottom?: bs.marginBottom[number] | bs.marginBottom[number][];
	marginStart?: bs.marginStart[number] | bs.marginStart[number][];
	marginEnd?: bs.marginEnd[number] | bs.marginEnd[number][];

	gap?: bs.gap[number] | bs.gap[number][];
	gutter?: bs.gutter[number] | bs.gutter[number];
	gutterX?: bs.gutterX[number] | bs.gutterX[number][];
	gutterY?: bs.gutterY[number] | bs.gutterY[number][];

	display?: bs.display[number] | bs.display[number][];
	print?: bs.print[number] | bs.print[number];
	container?: bs.container[number];

	flex?: bs.flex[number] | bs.flex[number][];
	float?: bs.float[number] | bs.float[number][];
	order?: bs.order[number] | bs.order[number][];
	offset?: bs.offset[number] | bs.offset[number][];

	alignContent?: bs.alignContent[number] | bs.alignContent[number][];
	justifyContent?: bs.justifyContent[number] | bs.justifyContent[number][];
	alignItem?: bs.alignItem[number] | bs.alignItem[number][];
	alignSelf?: bs.alignSelf[number] | bs.alignSelf[number][];

	visible?: bs.visible[number];
	textWrap?: bs.textWrap[number];
	fontItalic?: bs.fontItalic[number];
	bgGradient?: bs.bgGradient[number];
	wordBreak?: bs.wordBreak[number];
	monospace?: bs.monospace[number];
	row?: bs.row[number];
	col?: bs.col[number] | bs.col[number][];
	rowCol?: bs.rowCol[number] | bs.rowCol[number][];
	//bootstrap [end]

	//boolean attr [start]
	allowfullscreen?: boolean;
	allowpaymentrequest?: boolean;
	async?: boolean;
	autofocus?: boolean;
	autoplay?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
	controls?: boolean;
	default?: boolean;
	defer?: boolean;
	disabled?: boolean;
	formnovalidate?: boolean;
	novalidate?: boolean;
	noValidate?: boolean;
	hidden?: boolean;
	ismap?: boolean;
	itemscope?: boolean;
	loop?: boolean;
	multiple?: boolean;
	muted?: boolean;
	nomodule?: boolean;
	open?: boolean;
	playsinline?: boolean;
	readOnly?: boolean;
	required?: boolean;
	reversed?: boolean;
	selected?: boolean;
	truespeed?: boolean;
	//boolean attr [end]
}

export interface baseTag {
	tag: string;
	elem?: baseElem;
	attr?: baseAttr;
	dom?: HTMLElement;
}

export type baseElem = string | tag | (string | tag)[];

export type attachFn = (
	key: string,
	elem: HTMLElement,
	attr: baseAttr
) => {
	elem: HTMLElement;
	attr: baseAttr;
};

const cleanupAttr: attachFn = (key, elem, attr) => {
	if ((attr[key] === undefined || attr[key]) === null) {
		if (setting.DEBUG) console.log(`${key}:${attr[key]} is null or undefined. Delete it`);
		delete attr[key];
	}

	return { attr, elem };
};

const attrFn: attachFn[] = [
	cleanupAttr,
	attachActive,
	attachDisabled,
	attachBoolean,
	attachData,
	attachAria,
	attachBootstrap,
	attachEvent,
	attachStyle,
	attachClass,
	attachHref,
	attachOther,
];

export const attachAttr = (elem: HTMLElement, attr: baseAttr): HTMLElement => {
	if (attr) {
		attr = extend({}, attr);

		let keys = Object.keys(attr);
		if (keys) {
			let keyLength = keys.length;
			let attrFnLength = attrFn.length;

			for (let x = 0; x < keyLength; x++) {
				for (let y = 0; y < attrFnLength; y++) {
					if (attr.hasOwnProperty(keys[x]) && attr[keys[x]] !== null && attr[keys[x]] !== undefined) {
						if (y === attrFnLength - 1) {
							if (setting.DEBUG) {
								console.log(`Treat ${keys[x]}:${attr[keys[x]]} as another attribute.`);
							}
						}

						let r = attrFn[y](keys[x], elem, attr);
						attr = r.attr;
						elem = r.elem;
					}
				}
			}
		}
	}

	return elem;
};

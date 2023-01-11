import { keyOfType } from "./../fn/keyOfType.js";
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
import { attachAlias } from "./attachAlias.js";
import { extend } from "../fn/extend.js";

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
	[key: string]: string | number | boolean;
}

export interface IData {
	[key: string]: string | number | boolean;
}

export interface IAttr {
	id?: string;
	// name?: string;
	class?: string | string[];

	data?: IData;
	aria?: IAria;
	on?: IEvent;
	style?: IStyle;

	//addtional
	active?: boolean;

	//html attribute [start]
	accesskey?: string;
	contenteditable?: "true";
	dir?: string;
	draggable?: string;
	lang?: string;
	spellcheck?: string;
	tabindex?: string;
	title?: string;
	translate?: string;
	//html attribute [end]

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
	hidden?: boolean;
	itemscope?: boolean;
	nomodule?: boolean;
	playsinline?: boolean;
	truespeed?: boolean;
}

export interface IAttrAccept extends IAttr {
	accept?: string;
}

export interface IAttrAcceptCharset extends IAttr {
	acceptCharset?: string;
}

export interface IAttrChecked extends IAttr {
	checked?: boolean;
}

export interface IAttrAction extends IAttr {
	action?: string;
}

export interface IAttrAlt extends IAttr {
	alt?: string;
}

export interface IAttrAsync extends IAttr {
	async?: boolean;
}

export interface IAttrAutocomplete extends IAttr {
	autocomplete?: string;
}

export interface IAttrAutofocus extends IAttr {
	autofocus?: boolean;
}

export interface IAttrAutoplay extends IAttr {
	autoplay?: boolean;
}

export interface IAttrCharset extends IAttr {
	charset?: string;
}

export interface IAttrCite extends IAttr {
	cite?: string;
}

export interface IAttrCols extends IAttr {
	cols?: string;
}

export interface IAttrColspan extends IAttr {
	colspan?: string;
}

export interface IAttrContent extends IAttr {
	content?: string;
}

export interface IAttrControls extends IAttr {
	controls?: boolean;
}

export interface IAttrCoords extends IAttr {
	coords?: string;
}

export interface IAttrDataText extends IAttr {
	dataText?: string;
}

export interface IAttrDatetime extends IAttr {
	datetime?: string;
}

export interface IAttrDefault extends IAttr {
	default?: boolean;
}

export interface IAttrDefer extends IAttr {
	defer?: boolean;
}

export interface IAttrDefer extends IAttr {
	defer?: boolean;
}

export interface IAttrDirname extends IAttr {
	dirname?: string;
}

export interface IAttrDisabled extends IAttr {
	disabled?: boolean;
}

export interface IAttrDownload extends IAttr {
	download?: string;
}

export interface IAttrEnctype extends IAttr {
	enctype?: string;
}

export interface IAttrFor extends IAttr {
	for?: string;
}

export interface IAttrForm extends IAttr {
	form?: string;
}

export interface IAttrFormAction extends IAttr {
	formaction?: string;
}

export interface IAttrFormnovalidate extends IAttr {
	formnovalidate?: boolean;
}

export interface IAttrHeaders extends IAttr {
	headers?: string;
}

export interface IAttrHigh extends IAttr {
	high?: string;
}

export interface IAttrHref extends IAttr {
	href?: string;
}

export interface IAttrHrefLang extends IAttr {
	hreflang?: string;
}

export interface IAttrHttpEquiv extends IAttr {
	httpEquiv?: string;
}

export interface IAttrIndeterminate extends IAttr {
	indeterminate?: boolean;
}

export interface IAttrIsmap extends IAttr {
	ismap?: boolean;
}

export interface IAttrKind extends IAttr {
	kind?: string;
}

export interface IAttrLabel extends IAttr {
	label?: string;
}

export interface IAttrList extends IAttr {
	list?: string;
}

export interface IAttrLoop extends IAttr {
	loop?: boolean;
}

export interface IAttrLow extends IAttr {
	low?: string;
}

export interface IAttrMax extends IAttr {
	max?: string;
}

export interface IAttrMaxlength extends IAttr {
	maxlength?: string;
}

export interface IAttrMedia extends IAttr {
	media?: string;
}

export interface IAttrMethod extends IAttr {
	method?: string;
}

export interface IAttrMin extends IAttr {
	min?: string;
}

export interface IAttrMultiple extends IAttr {
	multiple?: boolean;
}

export interface IAttrMuted extends IAttr {
	muted?: boolean;
}

export interface IAttrName extends IAttr {
	name?: string;
}

export interface IAttrNovalidate extends IAttr {
	novalidate?: boolean;
}

export interface IAttrOpen extends IAttr {
	open?: boolean;
}

export interface IAttrOptimum extends IAttr {
	optimum?: string;
}

export interface IAttrPattern extends IAttr {
	pattern?: string;
}

export interface IAttrPlaceholderText extends IAttr {
	placeholderText?: string;
}

export interface IAttrPoster extends IAttr {
	poster?: string;
}

export interface IAttrPreload extends IAttr {
	preload?: string;
}

export interface IAttrReadonly extends IAttr {
	readonly?: boolean;
}

export interface IAttrRel extends IAttr {
	rel?: string;
}

export interface IAttrRequired extends IAttr {
	required?: boolean;
}

export interface IAttrReversed extends IAttr {
	reversed?: boolean;
}

export interface IAttrRows extends IAttr {
	rows?: string;
}

export interface IAttrRowspan extends IAttr {
	rowspan?: string;
}

export interface IAttrSandbox extends IAttr {
	sandbox?: boolean;
}

export interface IAttrScope extends IAttr {
	scope?: string;
}

export interface IAttrSelected extends IAttr {
	selected?: boolean;
}

export interface IAttrShape extends IAttr {
	shape?: string;
}

export interface IAttrSize extends IAttr {
	size?: string;
}

export interface IAttrSizes extends IAttr {
	sizes?: string;
}

export interface IAttrSpan extends IAttr {
	span?: string;
}

export interface IAttrSrc extends IAttr {
	src?: string;
}

export interface IAttrSrcdoc extends IAttr {
	srcdoc?: string;
}

export interface IAttrSrclang extends IAttr {
	srclang?: string;
}

export interface IAttrSrcset extends IAttr {
	srcset?: string;
}

export interface IAttrStartValue extends IAttr {
	startValue?: string;
}

export interface IAttrStep extends IAttr {
	step?: string;
}

export interface IAttrTarget extends IAttr {
	target?: string;
}

export interface IAttrType extends IAttr {
	type?: string;
}

export interface IAttrUsemap extends IAttr {
	usemap?: string;
}

export interface IAttrValue extends IAttr {
	value?: string;
}

export interface IAttrWarp extends IAttr {
	wrap?: "hard";
}

export interface IAttrIframe extends IAttr {
	allowfullscreen?: boolean;
	allowpaymentrequest?: boolean;
}

export interface ITag {
	tag: string;
	elem?: IElem;
	attr?: IAttr;
	dom?: HTMLElement;
}

export type IElem = string | tag | (string | tag)[];

export type IAttachFn = (
	key: string,
	elem: HTMLElement,
	attr: IAttr
) => {
	elem: HTMLElement;
	attr: IAttr;
};

const cleanupAttr: IAttachFn = (key, elem, attr) => {
	let k = keyOfType(key, attr);

	if (attr && typeof attr[k] !== "undefined" && attr[k] === null) {
		if (setting.DEBUG) console.log(`${key}:${attr[k]} is null. Delete it`);
		delete attr[k];
	}

	return { attr, elem };
};

const attrFn: IAttachFn[] = [
	cleanupAttr,
	attachAlias,
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

export const attachAttr = (elem: HTMLElement, attr: IAttr): HTMLElement => {
	if (attr) {
		attr = extend({}, attr);

		let prop = Object.keys(attr);
		if (prop) {
			let propLength = prop.length;
			let attrFnLength = attrFn.length;

			for (let x = 0; x < propLength; x++) {
				for (let y = 0; y < attrFnLength; y++) {
					let k = keyOfType(prop[x], attr);

					if (typeof attr[k] !== "undefined" && attr[k] !== null) {
						if (y === attrFnLength - 1 && setting.DEBUG) {
							console.log(`Treat ${prop[x]}:${attr[k]} as another attribute.`);
						}

						let r = attrFn[y](prop[x], elem, attr);
						attr = r.attr;
						elem = r.elem;
					}
				}
			}
		}
	}

	return elem;
};

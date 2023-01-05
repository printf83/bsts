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
import { attachManualStyle } from "./attachManualStyle.js";
import { attachClass } from "./attachClass.js";
import { extend } from "../fn/extend.js";
import { bs } from "./attachBootstrap.js";
import { tag } from "../../tag/index.js";

export interface baseAttr {
	id?: string;
	name?: string;
	class?: string | string[];

	active?: boolean;

	//bootstrap [start]
	userSelect?: string | bs.userSelect[number];
	pointerEvent?: bs.pointerEvent[number];
	position?: string | bs.position[number];
	overflow?: string | bs.overflow[number];

	textAlign?: string | bs.textAlign[number];
	verticalAlign?: string | bs.verticalAlign[number];

	opacity?: string | bs.opacity[number];
	bgOpacity?: bs.bgOpacity[number];
	textOpacity?: bs.textOpacity[number];

	btnColor?: bs.btnColor[number];
	btnOutlineColor?: bs.btnOutlineColor[number];
	alertColor?: bs.alertColor[number];

	textBgColor?: bs.textBgColor[number];
	textColor?: bs.textColor[number];
	linkColor?: bs.linkColor[number];
	bgColor?: bs.bgColor[number];

	textTransform?: string | bs.textTransform[number];
	textDecoration?: string | bs.textDecoration[number];
	lineHeight?: string | bs.lineHeight[number];

	fontSize?: string | bs.fontSize[number];
	fontWeight?: string | bs.fontWeight[number];

	top?: string | bs.top[number];
	bottom?: string | bs.bottom[number];
	start?: bs.start[number];
	end?: bs.end[number];
	tMiddle?: bs.tMiddle[number];

	height?: string | bs.height[number];
	width?: string | bs.width[number];
	maxHeight?: string | bs.maxHeight[number];
	maxWidth?: string | bs.maxWidth[number];
	minViewHeight?: bs.minViewHeight[number];
	minViewWidth?: bs.minViewWidth[number];
	viewHeight?: bs.viewHeight[number];
	viewWidth?: bs.viewWidth[number];

	placeholder?: bs.placeholder[number];
	placeholderAnimation?: bs.placeholderAnimation[number];
	placeholderWeight?: bs.placeholderWeight[number];

	shadow?: bs.shadow[number];

	border?: string | bs.border[number];
	borderNone?: bs.borderNone[number];
	borderColor?: string | bs.borderColor[number];
	borderOpacity?: bs.borderOpacity[number];
	borderWidth?: string | bs.borderWidth[number];

	rounded?: bs.rounded[number];
	roundedNone?: bs.roundedNone[number];
	roundedSize?: bs.roundedSize[number];

	padding?: string | bs.padding[number];
	paddingX?: bs.paddingX[number];
	paddingY?: bs.paddingY[number];
	paddingTop?: string | bs.paddingTop[number];
	paddingBottom?: string | bs.paddingBottom[number];
	paddingStart?: bs.paddingStart[number];
	paddingEnd?: bs.paddingEnd[number];

	margin?: string | bs.margin[number];
	marginX?: bs.marginX[number];
	marginY?: bs.marginY[number];
	marginTop?: string | bs.marginTop[number];
	marginBottom?: string | bs.marginBottom[number];
	marginStart?: bs.marginStart[number];
	marginEnd?: bs.marginEnd[number];

	gap?: bs.gap[number];
	gutter?: bs.gutter[number];
	gutterX?: bs.gutterX[number];
	gutterY?: bs.gutterY[number];

	display?: string | bs.display[number];
	print?: bs.print[number];
	container?: bs.container[number];

	flex?: string | bs.flex[number];
	float?: bs.float[number];
	order?: string | bs.order[number];
	offset?: bs.offset[number];

	alignContent?: string | bs.alignContent[number];
	justifyContent?: string | bs.justifyContent[number];
	alignItem?: string | bs.alignItem[number];
	alignSelf?: string | bs.alignSelf[number];

	visible?: bs.visible[number];
	textWrap?: bs.textWrap[number];
	fontItalic?: bs.fontItalic[number];
	bgGradient?: bs.bgGradient[number];
	wordBreak?: string | bs.wordBreak[number];
	monospace?: bs.monospace[number];
	row?: bs.row[number];
	col?: bs.col[number];
	rowCol?: bs.rowCol[number];
	//bootstrap [end]

	//style [start]
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
	borderBottom?: string;
	borderBottomColor?: string;
	borderBottomLeftRadius?: string;
	borderBottomRightRadius?: string;
	borderBottomStyle?: string;
	borderBottomWidth?: string;
	borderCollapse?: string;
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
	emptyCells?: string;
	filter?: string;
	flexBasis?: string;
	flexDirection?: string;
	flexFlow?: string;
	flexGrow?: string;
	flexShrink?: string;
	flexWrap?: string;
	cssFloat?: string;
	font?: string;
	fontFamily?: string;
	fontStyle?: string;
	fontVariant?: string;
	fontSizeAdjust?: string;
	fontStretch?: string;
	hangingPunctuation?: string;
	hyphens?: string;
	icon?: string;
	imageOrientation?: string;
	isolation?: string;
	left?: string;
	letterSpacing?: string;
	listStyle?: string;
	listStyleImage?: string;
	listStylePosition?: string;
	listStyleType?: string;
	marginLeft?: string;
	marginRight?: string;
	minHeight?: string;
	minWidth?: string;
	navDown?: string;
	navIndex?: string;
	navLeft?: string;
	navRight?: string;
	navUp?: string;
	objectFit?: string;
	objectPosition?: string;
	orphans?: string;
	outline?: string;
	outlineColor?: string;
	outlineOffset?: string;
	outlineStyle?: string;
	outlineWidth?: string;
	overflowX?: string;
	overflowY?: string;
	paddingLeft?: string;
	paddingRight?: string;
	pageBreakAfter?: string;
	pageBreakBefore?: string;
	pageBreakInside?: string;
	perspective?: string;
	perspectiveOrigin?: string;
	quotes?: string;
	resize?: string;
	right?: string;
	scrollBehavior?: string;
	tableLayout?: string;
	tabSize?: string;
	textAlignLast?: string;
	textDecorationColor?: string;
	textDecorationLine?: string;
	textDecorationStyle?: string;
	textIndent?: string;
	textJustify?: string;
	textOverflow?: string;
	textShadow?: string;
	transform?: string;
	transformOrigin?: string;
	transformStyle?: string;
	transition?: string;
	transitionProperty?: string;
	transitionDuration?: string;
	transitionTimingFunction?: string;
	transitionDelay?: string;
	unicodeBidi?: string;
	visibility?: string;
	whiteSpace?: string;
	wordSpacing?: string;
	wordWrap?: string;
	widows?: string;
	zIndex?: string;
	//style [end]

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

	[key: string]: string | number | boolean | EventListener | (string | number | boolean)[] | undefined;
}

export interface baseTag {
	tag: string;
	elem?: string | tag | (string | tag)[];
	attr?: baseAttr;
	dom?: HTMLElement;
}

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
	attachManualStyle,
	attachClass,
	attachHref,
	attachOther,
];

export const attachAttr = (elem: HTMLElement, attr: baseAttr): HTMLElement => {
	if (attr) {
		attr = extend(attr);

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

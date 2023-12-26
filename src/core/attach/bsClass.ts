import { bsClassFormatter } from "../../interface/core/bsClassFormatter.js";
import { bsTypeA } from "../../interface/core/bsTypeA.js";
import { addClassIntoElement } from "../util/addClassIntoElement.js";
import { keyOfType } from "../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

class formatter implements bsClassFormatter {
	shared?: boolean;
	value?: (string | number | boolean)[];
	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;

	constructor(d: bsClassFormatter) {
		this.shared = d.shared;
		this.value = d.value;
		this.format = d.format;
		this.formatValue = d.formatValue;
		this.formatTrue = d.formatTrue;
		this.formatFalse = d.formatFalse;
	}
}

const formatDB: {
	[key: string]: formatter;
} = {
	//---------------------
	// viewport & color handle by component
	//---------------------

	flex: new formatter({
		format: "flex-$1",
		value: bsTypeA.flex,
	}),
	float: new formatter({
		format: "float-$1",
		value: bsTypeA.float,
	}),
	order: new formatter({
		format: "order-$1",
		value: bsTypeA.order,
	}),
	offset: new formatter({
		format: "offset-$1",
		value: bsTypeA.offset,
	}),

	//---------------------

	alignContent: new formatter({
		format: "align-content-$1",
		value: bsTypeA.alignContent,
	}),
	justifyContent: new formatter({
		format: "justify-content-$1",
		value: bsTypeA.justifyContent,
	}),
	alignItem: new formatter({
		format: "align-items-$1",
		value: bsTypeA.alignItem,
	}),
	alignSelf: new formatter({
		format: "align-self-$1",
		value: bsTypeA.alignSelf,
	}),
	display: new formatter({
		format: "d-$1",
		value: bsTypeA.display,
	}),
	rowCol: new formatter({
		format: "row-cols-$1",
		value: bsTypeA.rowCol,
	}),

	//---------------------

	visible: new formatter({
		formatTrue: "visible",
		formatFalse: "invisible",
		value: bsTypeA.visible,
	}),
	textWrap: new formatter({
		formatTrue: "text-wrap",
		formatFalse: "text-nowrap",
		value: bsTypeA.textWrap,
	}),
	fontItalic: new formatter({
		formatTrue: "fst-italic",
		formatFalse: "fst-normal",
		value: bsTypeA.fontItalic,
	}),
	bgGradient: new formatter({
		formatTrue: "bg-gradient",
		value: bsTypeA.bgGradient,
	}),
	textBreak: new formatter({
		formatTrue: "text-break",
		value: bsTypeA.textBreak,
	}),
	monospace: new formatter({
		formatTrue: "font-monospace",
		value: bsTypeA.monospace,
	}),

	//---------------------

	loadingPlaceholder: new formatter({
		formatTrue: "placeholder",
		value: bsTypeA.loadingPlaceholder,
	}),
	loadingPlaceholderAnimation: new formatter({
		format: "placeholder-$1",
		value: bsTypeA.loadingPlaceholderAnimation,
	}),
	loadingPlaceholderWeight: new formatter({
		format: "placeholder-$1",
		formatValue: "placeholder $1",
		value: bsTypeA.loadingPlaceholderWeight,
	}),

	//---------------------

	row: new formatter({
		formatTrue: "row",
		value: bsTypeA.row,
	}),
	col: new formatter({
		format: "col-$1",
		formatTrue: "col",
		value: bsTypeA.col,
	}),

	//---------------------

	userSelect: new formatter({
		format: "user-select-$1",
		value: bsTypeA.userSelect,
	}),
	pointerEvent: new formatter({
		format: "pe-$1",
		value: bsTypeA.pointerEvent,
	}),
	position: new formatter({
		format: "position-$1",
		value: bsTypeA.position,
	}),
	overflow: new formatter({
		format: "overflow-$1",
		value: bsTypeA.overflow,
	}),
	overflowX: new formatter({
		format: "overflow-x-$1",
		value: bsTypeA.overflowX,
	}),
	overflowY: new formatter({
		format: "overflow-y-$1",
		value: bsTypeA.overflowY,
	}),

	//---------------------

	textAlign: new formatter({
		format: "text-$1",
		value: bsTypeA.textAlign,
	}),
	verticalAlign: new formatter({
		format: "align-$1",
		value: bsTypeA.verticalAlign,
	}),

	//---------------------

	opacity: new formatter({
		format: "opacity-$1",
		value: bsTypeA.opacity,
	}),
	bgOpacity: new formatter({
		format: "bg-opacity-$1",
		value: bsTypeA.bgOpacity,
	}),
	textOpacity: new formatter({
		format: "text-opacity-$1",
		value: bsTypeA.textOpacity,
	}),

	//---------------------

	focusRing: new formatter({
		format: "focus-ring-$1",
		formatValue: "focus-ring",
		value: bsTypeA.focusRing,
	}),
	textBgColor: new formatter({
		format: "text-bg-$1",
		value: bsTypeA.textBgColor,
	}),
	textColor: new formatter({
		format: "text-$1",
		value: bsTypeA.textColor,
	}),
	bgColor: new formatter({
		format: "bg-$1",
		value: bsTypeA.bgColor,
	}),

	//---------------------

	iconLink: new formatter({
		format: "icon-link-$1",
		formatValue: "icon-link",
		formatTrue: "icon-link",
		value: bsTypeA.iconLink,
	}),

	//---------------------

	textTransform: new formatter({
		format: "text-$1",
		value: bsTypeA.textTransform,
	}),
	textDecoration: new formatter({
		format: "text-decoration-$1",
		value: bsTypeA.textDecoration,
	}),
	lineHeight: new formatter({
		format: "lh-$1",
		value: bsTypeA.lineHeight,
	}),

	//---------------------

	fontSize: new formatter({
		format: "fs-$1",
		value: bsTypeA.fontSize,
	}),
	fontDisplay: new formatter({
		format: "display-$1",
		value: bsTypeA.fontDisplay,
	}),
	fontWeight: new formatter({
		format: "fw-$1",
		value: bsTypeA.fontWeight,
	}),

	//---------------------

	top: new formatter({
		format: "top-$1",
		value: bsTypeA.top,
	}),
	bottom: new formatter({
		format: "bottom-$1",
		value: bsTypeA.bottom,
	}),
	start: new formatter({
		format: "start-$1",
		value: bsTypeA.start,
	}),
	end: new formatter({
		format: "end-$1",
		value: bsTypeA.end,
	}),
	tMiddle: new formatter({
		format: "translate-middle-$1",
		formatTrue: "translate-middle",
		value: bsTypeA.tMiddle,
	}),

	//---------------------

	height: new formatter({
		format: "h-$1",
		value: bsTypeA.height,
		shared: true,
	}),
	width: new formatter({
		format: "w-$1",
		value: bsTypeA.width,
		shared: true,
	}),

	//---------------------

	maxHeight: new formatter({
		format: "mh-$1",
		value: bsTypeA.maxHeight,
	}),
	maxWidth: new formatter({
		format: "mw-$1",
		value: bsTypeA.maxWidth,
	}),
	minViewHeight: new formatter({
		format: "min-vh-$1",
		value: bsTypeA.minViewHeight,
	}),
	minViewWidth: new formatter({
		format: "min-vw-$1",
		value: bsTypeA.minViewWidth,
	}),
	viewHeight: new formatter({
		format: "vh-$1",
		value: bsTypeA.viewHeight,
	}),
	viewWidth: new formatter({
		format: "vw-$1",
		value: bsTypeA.viewWidth,
	}),

	//---------------------

	shadow: new formatter({
		format: "shadow-$1",
		formatTrue: "shadow",
		formatValue: "shadow",
		formatFalse: "shadow-none",
		value: bsTypeA.shadow,
	}),

	//---------------------

	borderNone: new formatter({
		format: "border-$1-0",
		formatTrue: "border-0",
		formatFalse: "border",
		value: bsTypeA.borderNone,
	}),
	border: new formatter({
		format: "border-$1",
		formatTrue: "border",
		formatFalse: "border-0",
		value: bsTypeA.border,
	}),
	borderColor: new formatter({
		format: "border-$1",
		value: bsTypeA.borderColor,
	}),
	borderOpacity: new formatter({
		format: "border-opacity-$1",
		value: bsTypeA.borderOpacity,
	}),
	borderWidth: new formatter({
		format: "border-$1",
		value: bsTypeA.borderWidth,
	}),

	//---------------------

	roundedNone: new formatter({
		format: "rounded-$1-0",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
		value: bsTypeA.roundedNone,
	}),
	rounded: new formatter({
		format: "rounded-$1",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
		value: bsTypeA.rounded,
	}),
	roundedSize: new formatter({
		format: "rounded-$1",
		value: bsTypeA.roundedSize,
	}),

	//---------------------

	padding: new formatter({
		format: "p-$1",
		value: bsTypeA.padding,
	}),
	paddingX: new formatter({
		format: "px-$1",
		value: bsTypeA.paddingX,
	}),
	paddingY: new formatter({
		format: "py-$1",
		value: bsTypeA.paddingY,
	}),
	paddingTop: new formatter({
		format: "pt-$1",
		value: bsTypeA.paddingTop,
	}),
	paddingBottom: new formatter({
		format: "pb-$1",
		value: bsTypeA.paddingBottom,
	}),
	paddingStart: new formatter({
		format: "ps-$1",
		value: bsTypeA.paddingStart,
	}),
	paddingEnd: new formatter({
		format: "pe-$1",
		value: bsTypeA.paddingEnd,
	}),

	//---------------------

	margin: new formatter({
		format: "m-$1",
		value: bsTypeA.margin,
	}),
	marginX: new formatter({
		format: "mx-$1",
		value: bsTypeA.marginX,
	}),
	marginY: new formatter({
		format: "my-$1",
		value: bsTypeA.marginY,
	}),
	marginTop: new formatter({
		format: "mt-$1",
		value: bsTypeA.marginTop,
	}),
	marginBottom: new formatter({
		format: "mb-$1",
		value: bsTypeA.marginBottom,
	}),
	marginStart: new formatter({
		format: "ms-$1",
		value: bsTypeA.marginStart,
	}),
	marginEnd: new formatter({
		format: "me-$1",
		value: bsTypeA.marginEnd,
	}),

	//---------------------

	gap: new formatter({
		format: "gap-$1",
		value: bsTypeA.gap,
	}),
	gutter: new formatter({
		format: "g-$1",
		value: bsTypeA.gutter,
	}),
	gutterX: new formatter({
		format: "gx-$1",
		value: bsTypeA.gutterX,
	}),
	gutterY: new formatter({
		format: "gy-$1",
		value: bsTypeA.gutterY,
	}),

	//---------------------

	print: new formatter({
		format: "d-print-$1",
		value: bsTypeA.print,
	}),
	container: new formatter({
		format: "container-$1",
		formatTrue: "container",
		value: bsTypeA.container,
	}),

	//---------------------

	zIndex: new formatter({
		format: "z-$1",
		value: bsTypeA.zIndex,
	}),
	objectFit: new formatter({
		format: "object-fit-$1",
		value: bsTypeA.objectFit,
	}),

	//---------------------

	ratio: new formatter({
		format: "ratio-$1",
		formatValue: "ratio",
		formatTrue: "ratio",
		value: bsTypeA.ratio,
	}),
	fixed: new formatter({
		format: "fixed-$1",
		value: bsTypeA.fixed,
	}),
	sticky: new formatter({
		format: "sticky-$1",
		value: bsTypeA.sticky,
	}),

	//---------------------

	clearfix: new formatter({
		formatTrue: "clearfix",
		value: bsTypeA.clearfix,
	}),
	textTruncate: new formatter({
		formatTrue: "text-truncate",
		value: bsTypeA.textTruncate,
	}),

	vstack: new formatter({
		formatTrue: "vstack",
		value: bsTypeA.vstack,
	}),
	hstack: new formatter({
		formatTrue: "hstack",
		value: bsTypeA.hstack,
	}),
	visually: new formatter({
		format: "visually-$1",
		value: bsTypeA.visually,
	}),
	h: new formatter({
		format: "h$1",
		value: bsTypeA.h,
	}),
	small: new formatter({
		formatTrue: "small",
		value: bsTypeA.small,
	}),

	//---------------------

	linkColor: new formatter({
		format: "link-$1",
		value: bsTypeA.linkColor,
	}),
	linkUnderlineColor: new formatter({
		format: "link-underline-$1",
		value: bsTypeA.linkUnderlineColor,
	}),
	linkOffset: new formatter({
		format: "link-offset-$1",
		value: bsTypeA.linkOffset,
	}),
	linkOffsetHover: new formatter({
		format: "link-offset-$1-hover",
		value: bsTypeA.linkOffsetHover,
	}),
	linkOpacity: new formatter({
		format: "link-opacity-$1",
		value: bsTypeA.linkOpacity,
	}),
	linkOpacityHover: new formatter({
		format: "link-opacity-$1-hover",
		value: bsTypeA.linkOpacityHover,
	}),
	linkUnderline: new formatter({
		formatTrue: "link-underline",
		value: bsTypeA.linkUnderline,
	}),
	linkUnderlineOpacity: new formatter({
		format: "link-underline-opacity-$1",
		value: bsTypeA.linkUnderlineOpacity,
	}),
	linkUnderlineOpacityHover: new formatter({
		format: "link-underline-opacity-$1-hover",
		value: bsTypeA.linkUnderlineOpacityHover,
	}),

	//---------------------

	btnColor: new formatter({
		format: "btn-$1",
		formatValue: "btn",
		value: bsTypeA.btnColor,
	}),
	btnOutlineColor: new formatter({
		format: "btn-outline-$1",
		formatValue: "btn",
		value: bsTypeA.btnOutlineColor,
	}),
	alertColor: new formatter({
		format: "alert-$1",
		value: bsTypeA.alertColor,
	}),
	alertDismissible: new formatter({
		formatTrue: "alert-dismissible",
		value: bsTypeA.alertDismissible,
	}),
	dropdownDirection: new formatter({
		format: "drop$1",
		value: bsTypeA.dropdownDirection,
	}),
	dropdownMenuPositionView: new formatter({
		format: "dropdown-menu-$1",
		value: bsTypeA.dropdownMenuPositionView,
	}),
};

let allowPropDB: (string | undefined)[] = [];

/**
 * Checks if a given value matches one of the allowed values.
 *
 * @param valueToCheck - The value to check.
 * @param listOfPossible - The list of allowed values.
 * @returns True if the value matches one of the allowed values, false otherwise.
 */
function allowValue<T extends string | number | boolean>(
	valueToCheck: string | number | boolean,
	listOfPossible: (string | number | boolean)[]
): valueToCheck is T {
	if (listOfPossible && listOfPossible.length > 0) {
		return listOfPossible.indexOf(valueToCheck) > -1;
	}
	return false;
}

/**
 * Checks if the given key is allowed to be used for formatting.
 *
 * @param key - The key to check.
 * @returns The key if it is allowed, null otherwise.
 */
function allowProp(key?: string) {
	if (key) {
		if (allowPropDB.length === 0) {
			allowPropDB = Object.keys(formatDB);
		}

		if (allowPropDB.indexOf(key) > -1) {
			return key;
		}
	}

	return null;
}

/**
 * Adds a class to the provided element based on the given rule and data value.
 *
 * @param rule - The formatting rule to use.
 * @param data - The data value to check.
 * @param elem - The element to add the class to.
 */
function addClass(rule: bsClassFormatter | undefined, data: string | number | boolean, elem: Element) {
	if (rule && rule.value && allowValue(data, rule.value)) {
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
	}

	return elem;
}

/**
 * Attaches formatting classes to the provided element based on the given attribute key and value(s).
 * Checks that the key is allowed, gets the matching formatter, checks if value matches formatter rules,
 * and adds appropriate classes to the element. Removes handled attributes from the attr object.
 * Returns object with updated attr, elem, and changed flag.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	let allowKey = allowProp(key);
	if (allowKey) {
		let a = keyOfType(key, attr);
		let b = keyOfType(allowKey, formatDB);
		let data: (string | number | boolean)[] = [];

		if (!Array.isArray(attr[a])) {
			data = [attr[a] as string | number | boolean];
		} else {
			data = attr[a] as (string | number | boolean)[];
		}

		data.forEach((i) => {
			elem = addClass(formatDB[b], i, elem);
		});

		delete attr[a];
		changed = true;
	}

	return { attr, elem, changed };
};

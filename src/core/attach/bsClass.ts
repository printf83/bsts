import { bsTypeA } from "../../interface/core/bsTypeA.js";
import { keyOfType } from "../util/keyOfType.js";
import { IAttachFn } from "./_index.js";
import { Formatter, applyClassFormatter, getAttrValues, getAllowedKey } from "./attachHelpers.js";

const formatDB: {
	[key: string]: Formatter;
} = {
	//---------------------
	// viewport & color handle by component
	//---------------------

	flex: new Formatter({
		format: "flex-$1",
		formatValue: "d-flex",
		value: bsTypeA.flex,
	}),
	float: new Formatter({
		format: "float-$1",
		value: bsTypeA.float,
	}),
	order: new Formatter({
		format: "order-$1",
		value: bsTypeA.order,
	}),
	offset: new Formatter({
		format: "offset-$1",
		value: bsTypeA.offset,
	}),

	//---------------------

	alignContent: new Formatter({
		format: "align-content-$1",
		value: bsTypeA.alignContent,
	}),
	justifyContent: new Formatter({
		format: "justify-content-$1",
		value: bsTypeA.justifyContent,
	}),
	alignItem: new Formatter({
		format: "align-items-$1",
		value: bsTypeA.alignItem,
	}),
	alignSelf: new Formatter({
		format: "align-self-$1",
		value: bsTypeA.alignSelf,
	}),
	display: new Formatter({
		format: "d-$1",
		value: bsTypeA.display,
	}),
	rowCol: new Formatter({
		format: "row-cols-$1",
		value: bsTypeA.rowCol,
	}),

	//---------------------

	visible: new Formatter({
		formatTrue: "visible",
		formatFalse: "invisible",
		value: bsTypeA.visible,
	}),
	textWrap: new Formatter({
		formatTrue: "text-wrap",
		formatFalse: "text-nowrap",
		value: bsTypeA.textWrap,
	}),
	fontItalic: new Formatter({
		formatTrue: "fst-italic",
		formatFalse: "fst-normal",
		value: bsTypeA.fontItalic,
	}),
	bgGradient: new Formatter({
		formatTrue: "bg-gradient",
		value: bsTypeA.bgGradient,
	}),
	textBreak: new Formatter({
		formatTrue: "text-break",
		value: bsTypeA.textBreak,
	}),
	monospace: new Formatter({
		formatTrue: "font-monospace",
		value: bsTypeA.monospace,
	}),

	//---------------------

	loadingPlaceholder: new Formatter({
		formatTrue: "placeholder",
		value: bsTypeA.loadingPlaceholder,
	}),
	loadingPlaceholderAnimation: new Formatter({
		format: "placeholder-$1",
		value: bsTypeA.loadingPlaceholderAnimation,
	}),
	loadingPlaceholderWeight: new Formatter({
		format: "placeholder-$1",
		formatValue: "placeholder $1",
		value: bsTypeA.loadingPlaceholderWeight,
	}),

	//---------------------

	row: new Formatter({
		formatTrue: "row",
		value: bsTypeA.row,
	}),
	col: new Formatter({
		format: "col-$1",
		formatTrue: "col",
		value: bsTypeA.col,
	}),

	//---------------------

	userSelect: new Formatter({
		format: "user-select-$1",
		value: bsTypeA.userSelect,
	}),
	pointerEvent: new Formatter({
		format: "pe-$1",
		value: bsTypeA.pointerEvent,
	}),
	position: new Formatter({
		format: "position-$1",
		value: bsTypeA.position,
	}),
	overflow: new Formatter({
		format: "overflow-$1",
		value: bsTypeA.overflow,
	}),
	overflowX: new Formatter({
		format: "overflow-x-$1",
		value: bsTypeA.overflowX,
	}),
	overflowY: new Formatter({
		format: "overflow-y-$1",
		value: bsTypeA.overflowY,
	}),

	//---------------------

	textAlign: new Formatter({
		format: "text-$1",
		value: bsTypeA.textAlign,
	}),
	verticalAlign: new Formatter({
		format: "align-$1",
		value: bsTypeA.verticalAlign,
	}),

	//---------------------

	opacity: new Formatter({
		format: "opacity-$1",
		value: bsTypeA.opacity,
	}),
	bgOpacity: new Formatter({
		format: "bg-opacity-$1",
		value: bsTypeA.bgOpacity,
	}),
	textOpacity: new Formatter({
		format: "text-opacity-$1",
		value: bsTypeA.textOpacity,
	}),

	//---------------------

	focusRing: new Formatter({
		format: "focus-ring-$1",
		formatValue: "focus-ring",
		value: bsTypeA.focusRing,
	}),
	textBgColor: new Formatter({
		format: "text-bg-$1",
		value: bsTypeA.textBgColor,
	}),
	textColor: new Formatter({
		format: "text-$1",
		value: bsTypeA.textColor,
	}),
	bgColor: new Formatter({
		format: "bg-$1",
		value: bsTypeA.bgColor,
	}),

	//---------------------

	iconLink: new Formatter({
		format: "icon-link-$1",
		formatValue: "icon-link",
		formatTrue: "icon-link",
		value: bsTypeA.iconLink,
	}),

	//---------------------

	textTransform: new Formatter({
		format: "text-$1",
		value: bsTypeA.textTransform,
	}),
	textDecoration: new Formatter({
		format: "text-decoration-$1",
		value: bsTypeA.textDecoration,
	}),
	lineHeight: new Formatter({
		format: "lh-$1",
		value: bsTypeA.lineHeight,
	}),

	//---------------------

	fontSize: new Formatter({
		format: "fs-$1",
		value: bsTypeA.fontSize,
	}),
	fontDisplay: new Formatter({
		format: "display-$1",
		value: bsTypeA.fontDisplay,
	}),
	fontWeight: new Formatter({
		format: "fw-$1",
		value: bsTypeA.fontWeight,
	}),

	//---------------------

	top: new Formatter({
		format: "top-$1",
		value: bsTypeA.top,
	}),
	bottom: new Formatter({
		format: "bottom-$1",
		value: bsTypeA.bottom,
	}),
	start: new Formatter({
		format: "start-$1",
		value: bsTypeA.start,
	}),
	end: new Formatter({
		format: "end-$1",
		value: bsTypeA.end,
	}),
	tMiddle: new Formatter({
		format: "translate-middle-$1",
		formatTrue: "translate-middle",
		value: bsTypeA.tMiddle,
	}),

	//---------------------

	height: new Formatter({
		format: "h-$1",
		value: bsTypeA.height,
		shared: true,
	}),
	width: new Formatter({
		format: "w-$1",
		value: bsTypeA.width,
		shared: true,
	}),

	//---------------------

	maxHeight: new Formatter({
		format: "mh-$1",
		value: bsTypeA.maxHeight,
	}),
	maxWidth: new Formatter({
		format: "mw-$1",
		value: bsTypeA.maxWidth,
	}),
	minViewHeight: new Formatter({
		format: "min-vh-$1",
		value: bsTypeA.minViewHeight,
	}),
	minViewWidth: new Formatter({
		format: "min-vw-$1",
		value: bsTypeA.minViewWidth,
	}),
	viewHeight: new Formatter({
		format: "vh-$1",
		value: bsTypeA.viewHeight,
	}),
	viewWidth: new Formatter({
		format: "vw-$1",
		value: bsTypeA.viewWidth,
	}),

	//---------------------

	shadow: new Formatter({
		format: "shadow-$1",
		formatTrue: "shadow",
		formatValue: "shadow",
		formatFalse: "shadow-none",
		value: bsTypeA.shadow,
	}),

	//---------------------

	borderNone: new Formatter({
		format: "border-$1-0",
		formatTrue: "border-0",
		formatFalse: "border",
		value: bsTypeA.borderNone,
	}),
	border: new Formatter({
		format: "border-$1",
		formatTrue: "border",
		formatFalse: "border-0",
		value: bsTypeA.border,
	}),
	borderColor: new Formatter({
		format: "border-$1",
		value: bsTypeA.borderColor,
	}),
	borderOpacity: new Formatter({
		format: "border-opacity-$1",
		value: bsTypeA.borderOpacity,
	}),
	borderWidth: new Formatter({
		format: "border-$1",
		value: bsTypeA.borderWidth,
	}),

	//---------------------

	roundedNone: new Formatter({
		format: "rounded-$1-0",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
		value: bsTypeA.roundedNone,
	}),
	rounded: new Formatter({
		format: "rounded-$1",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
		value: bsTypeA.rounded,
	}),
	roundedSize: new Formatter({
		format: "rounded-$1",
		value: bsTypeA.roundedSize,
	}),

	//---------------------

	padding: new Formatter({
		format: "p-$1",
		value: bsTypeA.padding,
	}),
	paddingX: new Formatter({
		format: "px-$1",
		value: bsTypeA.paddingX,
	}),
	paddingY: new Formatter({
		format: "py-$1",
		value: bsTypeA.paddingY,
	}),
	paddingTop: new Formatter({
		format: "pt-$1",
		value: bsTypeA.paddingTop,
	}),
	paddingBottom: new Formatter({
		format: "pb-$1",
		value: bsTypeA.paddingBottom,
	}),
	paddingStart: new Formatter({
		format: "ps-$1",
		value: bsTypeA.paddingStart,
	}),
	paddingEnd: new Formatter({
		format: "pe-$1",
		value: bsTypeA.paddingEnd,
	}),

	//---------------------

	margin: new Formatter({
		format: "m-$1",
		value: bsTypeA.margin,
	}),
	marginX: new Formatter({
		format: "mx-$1",
		value: bsTypeA.marginX,
	}),
	marginY: new Formatter({
		format: "my-$1",
		value: bsTypeA.marginY,
	}),
	marginTop: new Formatter({
		format: "mt-$1",
		value: bsTypeA.marginTop,
	}),
	marginBottom: new Formatter({
		format: "mb-$1",
		value: bsTypeA.marginBottom,
	}),
	marginStart: new Formatter({
		format: "ms-$1",
		value: bsTypeA.marginStart,
	}),
	marginEnd: new Formatter({
		format: "me-$1",
		value: bsTypeA.marginEnd,
	}),

	//---------------------

	gap: new Formatter({
		format: "gap-$1",
		value: bsTypeA.gap,
	}),
	gutter: new Formatter({
		format: "g-$1",
		value: bsTypeA.gutter,
	}),
	gutterX: new Formatter({
		format: "gx-$1",
		value: bsTypeA.gutterX,
	}),
	gutterY: new Formatter({
		format: "gy-$1",
		value: bsTypeA.gutterY,
	}),

	//---------------------

	print: new Formatter({
		format: "d-print-$1",
		value: bsTypeA.print,
	}),
	container: new Formatter({
		format: "container-$1",
		formatTrue: "container",
		value: bsTypeA.container,
	}),

	//---------------------

	zIndex: new Formatter({
		format: "z-$1",
		value: bsTypeA.zIndex,
	}),
	objectFit: new Formatter({
		format: "object-fit-$1",
		value: bsTypeA.objectFit,
	}),

	//---------------------

	ratio: new Formatter({
		format: "ratio-$1",
		formatValue: "ratio",
		formatTrue: "ratio",
		value: bsTypeA.ratio,
	}),
	fixed: new Formatter({
		format: "fixed-$1",
		value: bsTypeA.fixed,
	}),
	sticky: new Formatter({
		format: "sticky-$1",
		value: bsTypeA.sticky,
	}),

	//---------------------

	clearfix: new Formatter({
		formatTrue: "clearfix",
		value: bsTypeA.clearfix,
	}),
	textTruncate: new Formatter({
		formatTrue: "text-truncate",
		value: bsTypeA.textTruncate,
	}),

	vstack: new Formatter({
		formatTrue: "vstack",
		value: bsTypeA.vstack,
	}),
	hstack: new Formatter({
		formatTrue: "hstack",
		value: bsTypeA.hstack,
	}),
	visually: new Formatter({
		format: "visually-$1",
		value: bsTypeA.visually,
	}),
	h: new Formatter({
		format: "h$1",
		value: bsTypeA.h,
	}),
	small: new Formatter({
		formatTrue: "small",
		value: bsTypeA.small,
	}),

	//---------------------

	linkColor: new Formatter({
		format: "link-$1",
		value: bsTypeA.linkColor,
	}),
	linkUnderlineColor: new Formatter({
		format: "link-underline-$1",
		value: bsTypeA.linkUnderlineColor,
	}),
	linkOffset: new Formatter({
		format: "link-offset-$1",
		value: bsTypeA.linkOffset,
	}),
	linkOffsetHover: new Formatter({
		format: "link-offset-$1-hover",
		value: bsTypeA.linkOffsetHover,
	}),
	linkOpacity: new Formatter({
		format: "link-opacity-$1",
		value: bsTypeA.linkOpacity,
	}),
	linkOpacityHover: new Formatter({
		format: "link-opacity-$1-hover",
		value: bsTypeA.linkOpacityHover,
	}),
	linkUnderline: new Formatter({
		formatTrue: "link-underline",
		value: bsTypeA.linkUnderline,
	}),
	linkUnderlineOpacity: new Formatter({
		format: "link-underline-opacity-$1",
		value: bsTypeA.linkUnderlineOpacity,
	}),
	linkUnderlineOpacityHover: new Formatter({
		format: "link-underline-opacity-$1-hover",
		value: bsTypeA.linkUnderlineOpacityHover,
	}),

	//---------------------

	btnColor: new Formatter({
		format: "btn-$1",
		formatValue: "btn",
		value: bsTypeA.btnColor,
	}),
	btnOutlineColor: new Formatter({
		format: "btn-outline-$1",
		formatValue: "btn",
		value: bsTypeA.btnOutlineColor,
	}),
	alertColor: new Formatter({
		format: "alert-$1",
		value: bsTypeA.alertColor,
	}),
	alertDismissible: new Formatter({
		formatTrue: "alert-dismissible",
		value: bsTypeA.alertDismissible,
	}),
	dropdownDirection: new Formatter({
		format: "drop$1",
		value: bsTypeA.dropdownDirection,
	}),
	dropdownMenuPositionView: new Formatter({
		format: "dropdown-menu-$1",
		value: bsTypeA.dropdownMenuPositionView,
	}),
};

/**
 * Attaches formatting classes to the provided element based on the given attribute key and value(s).
 * Checks that the key is allowed, gets the matching formatter, checks if value matches formatter rules,
 * and adds appropriate classes to the element. Removes handled attributes from the attr object.
 * Returns object with updated attr, elem, and changed flag.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	const allowKey = getAllowedKey(key, formatDB);
	if (allowKey) {
		const a = keyOfType(key, attr);
		const data = getAttrValues(attr, key);

		data.forEach((i) => {
			elem = applyClassFormatter(formatDB[allowKey], i, elem);
		});

		delete attr[a];
		changed = true;
	}

	return { attr, elem, changed };
};

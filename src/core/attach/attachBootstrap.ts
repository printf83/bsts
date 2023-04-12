import { keyOfType } from "./../keyOfType.js";
import { addClassIntoElement } from "../addClassIntoElement.js";
import { IAttachFn } from "./_index.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, isBootstrapType } from "../bootstrap.js";

const dbRule: bootstrapRuleDB = {
	userSelect: new bootstrapAttachRule({
		format: "user-select-$1",
		value: bootstrapBase.userSelect.concat(),
		shared: true,
	}),
	pointerEvent: new bootstrapAttachRule({
		format: "pe-$1",
		value: bootstrapBase.pointerEvent.concat(),
	}),
	position: new bootstrapAttachRule({
		format: "position-$1",
		value: bootstrapBase.position.concat(),
		shared: true,
	}),
	overflow: new bootstrapAttachRule({
		format: "overflow-$1",
		value: bootstrapBase.overflow.concat(),
		shared: true,
	}),
	overflowX: new bootstrapAttachRule({
		format: "overflow-x-$1",
		value: bootstrapBase.overflow.concat(),
		shared: true,
	}),
	overflowY: new bootstrapAttachRule({
		format: "overflow-y-$1",
		value: bootstrapBase.overflow.concat(),
		shared: true,
	}),

	textAlign: new bootstrapAttachRule({
		format: "text-$1",
		value: bootstrapBase.textAlign.concat(),
		shared: true,
	}),
	verticalAlign: new bootstrapAttachRule({
		format: "align-$1",
		value: bootstrapBase.verticalAlign.concat(),
		shared: true,
	}),

	opacity: new bootstrapAttachRule({
		format: "opacity-$1",
		value: bootstrapBase.opacity.concat(),
		shared: true,
	}),
	bgOpacity: new bootstrapAttachRule({
		format: "bg-opacity-$1",
		value: bootstrapBase.bgOpacity.concat(),
	}),
	textOpacity: new bootstrapAttachRule({
		format: "text-opacity-$1",
		value: bootstrapBase.textOpacity.concat(),
	}),

	alertColor: new bootstrapAttachRule({
		format: "alert-$1",
		value: bootstrapBase.alertColor.concat(),
	}),

	textBgColor: new bootstrapAttachRule({
		format: "text-bg-$1",
		value: bootstrapBase.textBgColor.concat(),
	}),
	textColor: new bootstrapAttachRule({
		format: "text-$1",
		value: bootstrapBase.textColor.concat(),
	}),
	bgColor: new bootstrapAttachRule({
		format: "bg-$1",
		value: bootstrapBase.bgColor.concat(),
	}),

	linkColor: new bootstrapAttachRule({
		format: "link-$1",
		value: bootstrapBase.linkColor.concat(),
	}),
	linkUnderlineColor: new bootstrapAttachRule({
		format: "link-underline-$1",
		value: bootstrapBase.linkUnderlineColor.concat(),
	}),
	linkOffset: new bootstrapAttachRule({
		format: "link-offset-$1",
		value: bootstrapBase.linkOffset.concat(),
	}),
	linkOffsetHover: new bootstrapAttachRule({
		format: "link-offset-$1-hover",
		value: bootstrapBase.linkOffsetHover.concat(),
	}),
	linkOpacity: new bootstrapAttachRule({
		format: "link-opacity-$1",
		value: bootstrapBase.linkOpacity.concat(),
	}),
	linkUnderline: new bootstrapAttachRule({
		value: bootstrapBase.linkUnderline.concat(),
		formatTrue: "link-underline",
	}),
	linkUnderlineOpacity: new bootstrapAttachRule({
		format: "link-underline-opacity-$1",
		value: bootstrapBase.linkUnderlineOpacity.concat(),
	}),
	linkUnderlineOpacityHover: new bootstrapAttachRule({
		format: "link-underline-opacity-$1-hover",
		value: bootstrapBase.linkUnderlineOpacityHover.concat(),
	}),
	linkOpacityHover: new bootstrapAttachRule({
		format: "link-opacity-$1-hover",
		value: bootstrapBase.linkOpacityHover.concat(),
	}),

	textTransform: new bootstrapAttachRule({
		format: "text-$1",
		value: bootstrapBase.textTransform.concat(),
		shared: true,
	}),
	textDecoration: new bootstrapAttachRule({
		format: "text-decoration-$1",
		value: bootstrapBase.textDecoration.concat(),
		shared: true,
	}),
	lineHeight: new bootstrapAttachRule({
		format: "lh-$1",
		value: bootstrapBase.lineHeight.concat(),
		shared: true,
	}),

	fontSize: new bootstrapAttachRule({
		format: "fs-$1",
		value: bootstrapBase.fontSize.concat(),
		shared: true,
	}),
	fontWeight: new bootstrapAttachRule({
		format: "fw-$1",
		value: bootstrapBase.fontWeight.concat(),
		shared: true,
	}),
	fontDisplay: new bootstrapAttachRule({
		format: "display-$1",
		value: bootstrapBase.fontSize.concat(),
		shared: true,
	}),

	top: new bootstrapAttachRule({
		format: "top-$1",
		value: bootstrapBase.top.concat(),
		shared: true,
	}),
	bottom: new bootstrapAttachRule({
		format: "bottom-$1",
		value: bootstrapBase.bottom.concat(),
		shared: true,
	}),
	start: new bootstrapAttachRule({
		format: "start-$1",
		value: bootstrapBase.start.concat(),
	}),
	end: new bootstrapAttachRule({
		format: "end-$1",
		value: bootstrapBase.end.concat(),
	}),
	tMiddle: new bootstrapAttachRule({
		format: "translate-middle-$1",
		value: bootstrapBase.tMiddle.concat(),
		formatTrue: "translate-middle",
	}),

	height: new bootstrapAttachRule({
		format: "h-$1",
		value: bootstrapBase.height.concat(),
		shared: true,
	}),
	width: new bootstrapAttachRule({
		format: "w-$1",
		value: bootstrapBase.width.concat(),
		shared: true,
	}),
	maxHeight: new bootstrapAttachRule({
		format: "mh-$1",
		value: bootstrapBase.maxHeight.concat(),
		shared: true,
	}),
	maxWidth: new bootstrapAttachRule({
		format: "mw-$1",
		value: bootstrapBase.maxWidth.concat(),
		shared: true,
	}),
	minViewHeight: new bootstrapAttachRule({
		format: "min-vh-$1",
		value: bootstrapBase.minViewHeight.concat(),
	}),
	minViewWidth: new bootstrapAttachRule({
		format: "min-vw-$1",
		value: bootstrapBase.minViewWidth.concat(),
	}),
	viewHeight: new bootstrapAttachRule({
		format: "vh-$1",
		value: bootstrapBase.viewHeight.concat(),
	}),
	viewWidth: new bootstrapAttachRule({
		format: "vw-$1",
		value: bootstrapBase.viewWidth.concat(),
	}),

	loadingPlaceholder: new bootstrapAttachRule({
		value: bootstrapBase.loadingPlaceholder.concat(),
		formatTrue: "placeholder",
	}),
	loadingPlaceholderAnimation: new bootstrapAttachRule({
		format: "placeholder-$1",
		value: bootstrapBase.loadingPlaceholderAnimation.concat(),
	}),
	loadingPlaceholderWeight: new bootstrapAttachRule({
		format: "placeholder-$1",
		value: bootstrapBase.loadingPlaceholderWeight.concat(),
		formatValue: "placeholder $1",
	}),

	shadow: new bootstrapAttachRule({
		format: "shadow-$1",
		value: bootstrapBase.shadow.concat(),
		formatValue: "shadow",
		formatFalse: "shadow-none",
	}),

	border: new bootstrapAttachRule({
		format: "border-$1",
		value: bootstrapBase.border.concat(),
		formatTrue: "border",
		formatFalse: "border-0",
		shared: true,
	}),
	borderNone: new bootstrapAttachRule({
		format: "border-$1-0",
		value: bootstrapBase.borderNone.concat(),
		formatTrue: "border-0",
		formatFalse: "border",
	}),
	borderColor: new bootstrapAttachRule({
		format: "border-$1",
		value: bootstrapBase.borderColor.concat(),
		shared: true,
	}),
	borderOpacity: new bootstrapAttachRule({
		format: "border-opacity-$1",
		value: bootstrapBase.borderOpacity.concat(),
	}),
	borderWidth: new bootstrapAttachRule({
		format: "border-$1",
		value: bootstrapBase.borderWidth.concat(),
		shared: true,
	}),

	rounded: new bootstrapAttachRule({
		format: "rounded-$1",
		value: bootstrapBase.rounded.concat(),
		formatTrue: "rounded",
		formatFalse: "rounded-0",
	}),
	roundedNone: new bootstrapAttachRule({
		format: "rounded-$1-0",
		value: bootstrapBase.roundedNone.concat(),
		formatTrue: "rounded",
		formatFalse: "rounded-0",
	}),
	roundedSize: new bootstrapAttachRule({
		format: "rounded-$1",
		value: bootstrapBase.roundedSize.concat(),
	}),

	padding: new bootstrapAttachRule({
		format: "p-$1",
		value: bootstrapBase.padding.concat(),
		shared: true,
	}),
	paddingX: new bootstrapAttachRule({
		format: "px-$1",
		value: bootstrapBase.paddingX.concat(),
	}),
	paddingY: new bootstrapAttachRule({
		format: "py-$1",
		value: bootstrapBase.paddingY.concat(),
	}),
	paddingTop: new bootstrapAttachRule({
		format: "pt-$1",
		value: bootstrapBase.paddingTop.concat(),
		shared: true,
	}),
	paddingBottom: new bootstrapAttachRule({
		format: "pb-$1",
		value: bootstrapBase.paddingBottom.concat(),
		shared: true,
	}),
	paddingStart: new bootstrapAttachRule({
		format: "ps-$1",
		value: bootstrapBase.paddingStart.concat(),
	}),
	paddingEnd: new bootstrapAttachRule({
		format: "pe-$1",
		value: bootstrapBase.paddingEnd.concat(),
	}),

	margin: new bootstrapAttachRule({
		format: "m-$1",
		value: bootstrapBase.margin.concat(),
		shared: true,
	}),
	marginX: new bootstrapAttachRule({
		format: "mx-$1",
		value: bootstrapBase.marginX.concat(),
	}),
	marginY: new bootstrapAttachRule({
		format: "my-$1",
		value: bootstrapBase.marginY.concat(),
	}),
	marginTop: new bootstrapAttachRule({
		format: "mt-$1",
		value: bootstrapBase.marginTop.concat(),
		shared: true,
	}),
	marginBottom: new bootstrapAttachRule({
		format: "mb-$1",
		value: bootstrapBase.marginBottom.concat(),
		shared: true,
	}),
	marginStart: new bootstrapAttachRule({
		format: "ms-$1",
		value: bootstrapBase.marginStart.concat(),
	}),
	marginEnd: new bootstrapAttachRule({
		format: "me-$1",
		value: bootstrapBase.marginEnd.concat(),
	}),

	gap: new bootstrapAttachRule({
		format: "gap-$1",
		value: bootstrapBase.gap.concat(),
	}),
	gutter: new bootstrapAttachRule({
		format: "g-$1",
		value: bootstrapBase.gutter.concat(),
	}),
	gutterX: new bootstrapAttachRule({
		format: "gx-$1",
		value: bootstrapBase.gutterX.concat(),
	}),
	gutterY: new bootstrapAttachRule({
		format: "gy-$1",
		value: bootstrapBase.gutterY.concat(),
	}),

	display: new bootstrapAttachRule({
		format: "d-$1",
		value: bootstrapBase.display.concat(),
		shared: true,
	}),
	print: new bootstrapAttachRule({
		format: "d-print-$1",
		value: bootstrapBase.print.concat(),
	}),
	container: new bootstrapAttachRule({
		format: "container-$1",
		value: bootstrapBase.container.concat(),
		formatTrue: "container",
	}),

	flex: new bootstrapAttachRule({
		format: "flex-$1",
		value: bootstrapBase.flex.concat(),
		shared: true,
	}),
	float: new bootstrapAttachRule({
		format: "float-$1",
		value: bootstrapBase.float.concat(),
	}),
	order: new bootstrapAttachRule({
		format: "order-$1",
		value: bootstrapBase.order.concat(),
		shared: true,
	}),
	offset: new bootstrapAttachRule({
		format: "offset-$1",
		value: bootstrapBase.offset.concat(),
	}),

	alignContent: new bootstrapAttachRule({
		format: "align-content-$1",
		value: bootstrapBase.alignContent.concat(),
		shared: true,
	}),
	justifyContent: new bootstrapAttachRule({
		format: "justify-content-$1",
		value: bootstrapBase.justifyContent.concat(),
		shared: true,
	}),
	alignItem: new bootstrapAttachRule({
		format: "align-items-$1",
		value: bootstrapBase.alignItem.concat(),
		shared: true,
	}),
	alignSelf: new bootstrapAttachRule({
		format: "align-self-$1",
		value: bootstrapBase.alignSelf.concat(),
		shared: true,
	}),

	visible: new bootstrapAttachRule({
		value: bootstrapBase.visible.concat(),
		formatTrue: "visible",
		formatFalse: "invisible",
	}),
	textWrap: new bootstrapAttachRule({
		value: bootstrapBase.textWrap.concat(),
		formatTrue: "text-wrap",
		formatFalse: "text-nowrap",
	}),
	fontItalic: new bootstrapAttachRule({
		value: bootstrapBase.fontItalic.concat(),
		formatTrue: "fst-italic",
		formatFalse: "fst-normal",
	}),

	bgGradient: new bootstrapAttachRule({
		value: bootstrapBase.bgGradient.concat(),
		formatTrue: "bg-gradient",
	}),
	textBreak: new bootstrapAttachRule({
		value: bootstrapBase.textBreak.concat(),
		formatTrue: "text-break",
		shared: true,
	}),
	monospace: new bootstrapAttachRule({
		value: bootstrapBase.monospace.concat(),
		formatTrue: "font-monospace",
	}),

	row: new bootstrapAttachRule({
		value: bootstrapBase.row.concat(),
		formatTrue: "row",
	}),
	col: new bootstrapAttachRule({
		format: "col-$1",
		value: bootstrapBase.col.concat(),
		formatTrue: "col",
	}),
	rowCol: new bootstrapAttachRule({
		format: "row-cols-$1",
		value: bootstrapBase.rowCol.concat(),
	}),
	zIndex: new bootstrapAttachRule({
		format: "z-$1",
		value: bootstrapBase.zindex.concat(),
		shared: true,
	}),
	objectFit: new bootstrapAttachRule({
		format: "object-fit-$1",
		value: bootstrapBase.objectFit.concat(),
	}),
	ratio: new bootstrapAttachRule({
		format: "ratio-$1",
		value: bootstrapBase.ratio.concat(),
		formatValue: "ratio",
	}),
	fixed: new bootstrapAttachRule({
		format: "fixed-$1",
		value: bootstrapBase.fixed.concat(),
	}),
	sticky: new bootstrapAttachRule({
		format: "sticky-$1",
		value: bootstrapBase.sticky.concat(),
	}),
	clearfix: new bootstrapAttachRule({
		value: bootstrapBase.clearfix.concat(),
		formatTrue: "clearfix",
	}),
	truncate: new bootstrapAttachRule({
		value: bootstrapBase.truncate.concat(),
		formatTrue: "text-truncate",
	}),
	visually: new bootstrapAttachRule({
		format: "visually-$1",
		value: bootstrapBase.visually.concat(),
	}),
	vstack: new bootstrapAttachRule({
		value: bootstrapBase.vstack.concat(),
		formatTrue: "vstack",
	}),
	hstack: new bootstrapAttachRule({
		value: bootstrapBase.hstack.concat(),
		formatTrue: "hstack",
	}),
	small: new bootstrapAttachRule({
		value: bootstrapBase.small.concat(),
		formatTrue: "small",
	}),
	h: new bootstrapAttachRule({
		format: "h$1",
		value: bootstrapBase.h.concat(),
	}),
	focusRing: new bootstrapAttachRule({
		format: "focus-ring-$1",
		value: bootstrapBase.focusRing.concat(),
		formatValue: "focus-ring",
	}),
	linkIcon: new bootstrapAttachRule({
		format: "icon-link-$1",
		value: bootstrapBase.linkIcon.concat(),
		formatValue: "icon-link",
		formatTrue: "icon-link",
	}),
};

let allowProp: (string | undefined)[] = [];

const allow = (key: string) => {
	if (allowProp.length === 0) {
		allowProp = Object.keys(dbRule);
	}

	if (allowProp.indexOf(key) > -1) {
		return true;
	}

	return false;
};

const addBootstrapClass = (rule: bootstrapAttachRule, data: string | number | boolean, elem: HTMLElement) => {
	// if (rule.value!.findIndex((i) => data === i) > -1) {
	if (rule.value && isBootstrapType(data, rule.value)) {
		if (rule.formatValue) {
			elem = addClassIntoElement(elem, rule.formatValue!);
		}

		if (data === true) {
			if (rule.formatTrue) {
				elem = addClassIntoElement(elem, rule.formatTrue!);
			}
		} else if (data === false) {
			if (rule.formatFalse) {
				elem = addClassIntoElement(elem, rule.formatFalse!);
			}
		} else {
			if (rule.format) {
				elem = addClassIntoElement(elem, rule.format!.replace(/\$1/g, data.toString()));
			}
		}
	}

	return elem;
};

export const attachBootstrap: IAttachFn = (key, elem, attr) => {
	if (allow(key)) {
		let a = keyOfType(key, attr);
		let b = keyOfType(key, dbRule);
		let data: (string | number | boolean)[] = [];

		if (!Array.isArray(attr[a])) {
			data = [attr[a] as string | number | boolean];
		} else {
			data = attr[a] as (string | number | boolean)[];
		}

		data.forEach((i) => {
			elem = addBootstrapClass(dbRule[b], i, elem);
		});

		delete attr[a];
	}

	return { attr, elem };
};

export const genBootstrapClass = (
	rule: bootstrapAttachRule,
	value: string | number | boolean | (string | number | boolean)[]
) => {
	let result: string[] = [];

	if (value) {
		//convert to array
		let data: (string | number | boolean)[] = [];
		if (!Array.isArray(value)) {
			data = [value];
		} else {
			data = value;
		}

		data.forEach((d) => {
			// if (rule.value!.findIndex((i) => d === i) > -1) {
			if (rule.value && isBootstrapType(d, rule.value)) {
				if (rule.formatValue) {
					result.push(rule.formatValue!);
				}

				if (d === true) {
					if (rule.formatTrue) {
						result.push(rule.formatTrue!);
					}
				} else if (d === false) {
					if (rule.formatFalse) {
						result.push(rule.formatFalse!);
					}
				} else {
					if (rule.format) {
						result.push(rule.format!.replace(/\$1/g, d.toString()));
					}
				}
			}
		});
	}

	return result;
};

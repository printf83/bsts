import { keyOfType } from "./../fn/keyOfType.js";
import { addClassIntoElement } from "../fn/addClassIntoElement.js";
import { setting } from "../fn/setting.js";
import { IAttachFn } from "./_index.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB } from "../base/bootstrap.js";

const db: bootstrapRuleDB = {
	userSelect: new bootstrapAttachRule("user-select-$1", bootstrapBase.userSelect.concat(), null, null, null, true),
	pointerEvent: new bootstrapAttachRule("pe-$1", bootstrapBase.pointerEvent.concat()),
	position: new bootstrapAttachRule("position-$1", bootstrapBase.position.concat(), null, null, null, true),
	overflow: new bootstrapAttachRule("overflow-$1", bootstrapBase.overflow.concat(), null, null, null, true),

	textAlign: new bootstrapAttachRule("text-$1", bootstrapBase.textAlign.concat(), null, null, null, true),
	verticalAlign: new bootstrapAttachRule("align-$1", bootstrapBase.verticalAlign.concat(), null, null, null, true),

	opacity: new bootstrapAttachRule("opacity-$1", bootstrapBase.opacity.concat(), null, null, null, true),
	bgOpacity: new bootstrapAttachRule("bg-opacity-$1", bootstrapBase.bgOpacity.concat()),
	textOpacity: new bootstrapAttachRule("text-opacity-$1", bootstrapBase.textOpacity.concat()),

	alertColor: new bootstrapAttachRule("alert-$1", bootstrapBase.alertColor.concat()),

	textBgColor: new bootstrapAttachRule("text-bg-$1", bootstrapBase.textBgColor.concat()),
	textColor: new bootstrapAttachRule("text-$1", bootstrapBase.textColor.concat()),
	linkColor: new bootstrapAttachRule("link-$1", bootstrapBase.linkColor.concat()),
	bgColor: new bootstrapAttachRule("bg-$1", bootstrapBase.bgColor.concat()),

	textTransform: new bootstrapAttachRule("text-$1", bootstrapBase.textTransform.concat(), null, null, null, true),
	textDecoration: new bootstrapAttachRule(
		"text-decoration-$1",
		bootstrapBase.textDecoration.concat(),
		null,
		null,
		null,
		true
	),
	lineHeight: new bootstrapAttachRule("lh-$1", bootstrapBase.lineHeight.concat(), null, null, null, true),

	fontSize: new bootstrapAttachRule("fs-$1", bootstrapBase.fontSize.concat(), null, null, null, true),
	fontWeight: new bootstrapAttachRule("fw-$1", bootstrapBase.fontWeight.concat(), null, null, null, true),

	top: new bootstrapAttachRule("top-$1", bootstrapBase.top.concat(), null, null, null, true),
	bottom: new bootstrapAttachRule("bottom-$1", bootstrapBase.bottom.concat(), null, null, null, true),
	start: new bootstrapAttachRule("start-$1", bootstrapBase.start.concat()),
	end: new bootstrapAttachRule("end-$1", bootstrapBase.end.concat()),
	tMiddle: new bootstrapAttachRule("translate-middle-$1", bootstrapBase.tMiddle.concat(), null, "translate-middle"),

	height: new bootstrapAttachRule("h-$1", bootstrapBase.height.concat(), null, null, null, true),
	width: new bootstrapAttachRule("w-$1", bootstrapBase.width.concat(), null, null, null, true),
	maxHeight: new bootstrapAttachRule("mh-$1", bootstrapBase.maxHeight.concat(), null, null, null, true),
	maxWidth: new bootstrapAttachRule("mw-$1", bootstrapBase.maxWidth.concat(), null, null, null, true),
	minViewHeight: new bootstrapAttachRule("min-vh-$1", bootstrapBase.minViewHeight.concat()),
	minViewWidth: new bootstrapAttachRule("min-vw-$1", bootstrapBase.minViewWidth.concat()),
	viewHeight: new bootstrapAttachRule("vh-$1", bootstrapBase.viewHeight.concat()),
	viewWidth: new bootstrapAttachRule("vw-$1", bootstrapBase.viewWidth.concat()),

	placeholder: new bootstrapAttachRule(null, bootstrapBase.placeholder.concat(), null, "placeholder"),
	placeholderAnimation: new bootstrapAttachRule("placeholder-$1", bootstrapBase.placeholderAnimation.concat()),
	placeholderWeight: new bootstrapAttachRule(
		"placeholder-$1",
		bootstrapBase.placeholderWeight.concat(),
		"placeholder $1"
	),

	shadow: new bootstrapAttachRule("shadow-$1", bootstrapBase.shadow.concat(), null, "shadow", "shadow-none"),

	border: new bootstrapAttachRule("border-$1", bootstrapBase.border.concat(), null, "border", "border-0", true),
	borderNone: new bootstrapAttachRule("border border-$1-0", bootstrapBase.borderNone.concat(), null, "border-0"),
	borderColor: new bootstrapAttachRule("border-$1", bootstrapBase.borderColor.concat(), "border", null, null, true),
	borderOpacity: new bootstrapAttachRule("border-opacity-$1", bootstrapBase.borderOpacity.concat(), "border"),
	borderWidth: new bootstrapAttachRule("border-$1", bootstrapBase.borderWidth.concat(), "border", null, null, true),

	rounded: new bootstrapAttachRule("rounded-$1", bootstrapBase.rounded.concat(), null, "rounded", "rounded-0"),
	roundedNone: new bootstrapAttachRule(
		"rounded-$1-0",
		bootstrapBase.roundedNone.concat(),
		"rounded",
		"rounded",
		"rounded-0"
	),
	roundedSize: new bootstrapAttachRule("rounded-$1", bootstrapBase.roundedSize.concat(), "rounded"),

	padding: new bootstrapAttachRule("p-$1", bootstrapBase.padding.concat(), null, null, null, true),
	paddingX: new bootstrapAttachRule("px-$1", bootstrapBase.paddingX.concat()),
	paddingY: new bootstrapAttachRule("py-$1", bootstrapBase.paddingY.concat()),
	paddingTop: new bootstrapAttachRule("pt-$1", bootstrapBase.paddingTop.concat(), null, null, null, true),
	paddingBottom: new bootstrapAttachRule("pb-$1", bootstrapBase.paddingBottom.concat(), null, null, null, true),
	paddingStart: new bootstrapAttachRule("ps-$1", bootstrapBase.paddingStart.concat()),
	paddingEnd: new bootstrapAttachRule("pe-$1", bootstrapBase.paddingEnd.concat()),

	margin: new bootstrapAttachRule("m-$1", bootstrapBase.margin.concat(), null, null, null, true),
	marginX: new bootstrapAttachRule("mx-$1", bootstrapBase.marginX.concat()),
	marginY: new bootstrapAttachRule("my-$1", bootstrapBase.marginY.concat()),
	marginTop: new bootstrapAttachRule("mt-$1", bootstrapBase.marginTop.concat(), null, null, null, true),
	marginBottom: new bootstrapAttachRule("mb-$1", bootstrapBase.marginBottom.concat(), null, null, null, true),
	marginStart: new bootstrapAttachRule("ms-$1", bootstrapBase.marginStart.concat()),
	marginEnd: new bootstrapAttachRule("me-$1", bootstrapBase.marginEnd.concat()),

	gap: new bootstrapAttachRule("gap-$1", bootstrapBase.gap.concat()),
	gutter: new bootstrapAttachRule("g-$1", bootstrapBase.gutter.concat()),
	gutterX: new bootstrapAttachRule("gx-$1", bootstrapBase.gutterX.concat()),
	gutterY: new bootstrapAttachRule("gy-$1", bootstrapBase.gutterY.concat()),

	display: new bootstrapAttachRule("d-$1", bootstrapBase.display.concat(), null, null, null, true),
	print: new bootstrapAttachRule("d-print-$1", bootstrapBase.print.concat()),
	container: new bootstrapAttachRule("container-$1", bootstrapBase.container.concat(), null, "container"),

	flex: new bootstrapAttachRule("flex-$1", bootstrapBase.flex.concat(), null, null, null, true),
	float: new bootstrapAttachRule("float-$1", bootstrapBase.float.concat()),
	order: new bootstrapAttachRule("order-$1", bootstrapBase.order.concat(), null, null, null, true),
	offset: new bootstrapAttachRule("offset-$1", bootstrapBase.offset.concat()),

	alignContent: new bootstrapAttachRule(
		"align-content-$1",
		bootstrapBase.alignContent.concat(),
		null,
		null,
		null,
		true
	),
	justifyContent: new bootstrapAttachRule(
		"justify-content-$1",
		bootstrapBase.justifyContent.concat(),
		null,
		null,
		null,
		true
	),
	alignItem: new bootstrapAttachRule("align-items-$1", bootstrapBase.alignItem.concat(), null, null, null, true),
	alignSelf: new bootstrapAttachRule("align-self-$1", bootstrapBase.alignSelf.concat(), null, null, null, true),

	visible: new bootstrapAttachRule(null, bootstrapBase.visible.concat(), null, "visible", "invisible"),
	textWrap: new bootstrapAttachRule(null, bootstrapBase.textWrap.concat(), null, "text-wrap", "text-nowrap"),
	fontItalic: new bootstrapAttachRule(null, bootstrapBase.fontItalic.concat(), null, "fst-italic", "fst-normal"),

	bgGradient: new bootstrapAttachRule(null, bootstrapBase.bgGradient.concat(), null, "bg-gradient"),
	wordBreak: new bootstrapAttachRule(null, bootstrapBase.wordBreak.concat(), null, "text-break", null, true),
	monospace: new bootstrapAttachRule(null, bootstrapBase.monospace.concat(), null, "font-monospace"),

	row: new bootstrapAttachRule(null, bootstrapBase.row.concat(), null, "row"),
	col: new bootstrapAttachRule("col-$1", bootstrapBase.col.concat(), null, "col"),
	rowCol: new bootstrapAttachRule("row-cols-$1", bootstrapBase.rowCol.concat()),
};

let allowProp: (string | undefined)[] = [];

const allow = (key: string) => {
	if (allowProp.length === 0) {
		allowProp = Object.keys(db);
	}

	if (allowProp.indexOf(key) > -1) {
		return true;
	}

	return false;
};

const addBootstrapClass = (
	key: string,
	rule: bootstrapAttachRule,
	data: string | number | boolean,
	elem: HTMLElement
) => {
	if (rule.value!.findIndex((i) => data === i) > -1) {
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
	} else {
		if (setting.DEBUG) console.warn(`${key}:"${data}" is not supported value for bootstrap property`);
	}

	return elem;
};

export const attachBootstrap: IAttachFn = (key, elem, attr) => {
	if (allow(key)) {
		let a = keyOfType(key, attr);
		let b = keyOfType(key, db);
		let data: (string | number | boolean)[] = [];

		if (!Array.isArray(attr[a])) {
			data = [attr[a] as string | number | boolean];
		} else {
			data = attr[a] as (string | number | boolean)[];
		}

		data.forEach((i) => {
			elem = addBootstrapClass(key, db[b], i, elem);
		});

		delete attr[a];
	}

	return { attr, elem };
};

export const genBootstrapClass = (
	key: string,
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
			if (rule.value!.findIndex((i) => d === i) > -1) {
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
			} else {
				if (setting.DEBUG) console.warn(`${key}:"${d}" is not supported value for bootstrap property`);
			}
		});
	}

	return result;
};

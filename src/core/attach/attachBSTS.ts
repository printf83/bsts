import { addClassIntoElement } from "../addClassIntoElement.js";
import { IAttachFn } from "./_index.js";
import { keyOfType } from "../keyOfType.js";
import { bstsTypeA } from "../../interface/core/bstsTypeA.js";
import { bsClassFormatter } from "../../interface/core/bsClassFormatter.js";

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
	rotate: new formatter({
		format: "rotate-$1",
		value: bstsTypeA.rotate,
	}),
	flip: new formatter({
		format: "flip-$1",
		value: bstsTypeA.flip,
	}),

	//---------------------

	animate: new formatter({
		format: "animate-$1",
		value: bstsTypeA.animate,
	}),
	animateDuration: new formatter({
		format: "animate-duration-$1",
		value: bstsTypeA.animateDuration,
	}),
	animateRepeat: new formatter({
		format: "animate-repeat-$1",
		value: bstsTypeA.animateRepeat,
	}),
	animateDelay: new formatter({
		format: "animate-delay-$1",
		value: bstsTypeA.animateDelay,
	}),
	animateFill: new formatter({
		format: "animate-fill-$1",
		value: bstsTypeA.animateFill,
	}),
	animateTiming: new formatter({
		format: "animate-timing-$1",
		value: bstsTypeA.animateTiming,
	}),
	animateDirection: new formatter({
		format: "animate-direction-$1",
		value: bstsTypeA.animateDirection,
	}),

	//---------------------

	bgColorActive: new formatter({
		format: "bg-active-$1",
		value: bstsTypeA.bgColorActive,
	}),
	bgColorHover: new formatter({
		format: "bg-hover-$1",
		value: bstsTypeA.bgColorHover,
	}),
	bgColorFocus: new formatter({
		format: "bg-focus-$1",
		value: bstsTypeA.bgColorFocus,
	}),

	//---------------------

	textColorActive: new formatter({
		format: "text-active-$1",
		value: bstsTypeA.textColorActive,
	}),
	textColorHover: new formatter({
		format: "text-hover-$1",
		value: bstsTypeA.textColorHover,
	}),
	textColorFocus: new formatter({
		format: "text-focus-$1",
		value: bstsTypeA.textColorFocus,
	}),

	//---------------------

	borderColorActive: new formatter({
		format: "border-active-$1",
		value: bstsTypeA.borderColorActive,
	}),
	borderColorHover: new formatter({
		format: "border-hover-$1",
		value: bstsTypeA.borderColorHover,
	}),
	borderColorFocus: new formatter({
		format: "border-focus-$1",
		value: bstsTypeA.borderColorFocus,
	}),

	//---------------------

	fontItalicActive: new formatter({
		formatTrue: "fst-active-italic",
		formatFalse: "fst-active-normal",
		value: bstsTypeA.fontItalicActive,
	}),
	fontItalicHover: new formatter({
		formatTrue: "fst-hover-italic",
		formatFalse: "fst-hover-normal",
		value: bstsTypeA.fontItalicHover,
	}),
	fontItalicFocus: new formatter({
		formatTrue: "fst-focus-italic",
		formatFalse: "fst-focus-normal",
		value: bstsTypeA.fontItalicFocus,
	}),

	//---------------------

	textDecorationActive: new formatter({
		format: "text-decoration-active-$1",
		value: bstsTypeA.textDecorationActive,
	}),
	textDecorationHover: new formatter({
		format: "text-decoration-hover-$1",
		value: bstsTypeA.textDecorationHover,
	}),
	textDecorationFocus: new formatter({
		format: "text-decoration-focus-$1",
		value: bstsTypeA.textDecorationFocus,
	}),

	//---------------------

	borderWidthActive: new formatter({
		format: "border-active-$1",
		value: bstsTypeA.borderWidthActive,
	}),
	borderWidthHover: new formatter({
		format: "border-hover-$1",
		value: bstsTypeA.borderWidthHover,
	}),
	borderWidthFocus: new formatter({
		format: "border-focus-$1",
		value: bstsTypeA.borderWidthFocus,
	}),

	//---------------------

	fontWeightActive: new formatter({
		format: "fw-active-$1",
		value: bstsTypeA.fontWeightActive,
	}),
	fontWeightHover: new formatter({
		format: "fw-hover-$1",
		value: bstsTypeA.fontWeightHover,
	}),
	fontWeightFocus: new formatter({
		format: "fw-focus-$1",
		value: bstsTypeA.fontWeightFocus,
	}),

	//---------------------
};

let allowPropDB: (string | undefined)[] = [];

const allowValue = <T extends string | number | boolean>(
	valueToCheck: string | number | boolean,
	listOfPossible: (string | number | boolean)[]
): valueToCheck is T => {
	if (listOfPossible && listOfPossible.length > 0) {
		return listOfPossible.indexOf(valueToCheck) > -1;
	}
	return false;
};

const allowProp = (key?: string) => {
	if (key) {
		if (allowPropDB.length === 0) {
			allowPropDB = Object.keys(formatDB);
		}

		if (allowPropDB.indexOf(key) > -1) {
			return key;
		}
	}

	return null;
};

const addClass = (rule: bsClassFormatter | undefined, data: string | number | boolean, elem: Element) => {
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
};

export const attachBSTS: IAttachFn = (key, elem, attr) => {
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

import { addClassIntoElement } from "./addClassIntoElement.js";
import { IAttachFn } from "./attach/_index.js";
import { keyOfType } from "./keyOfType.js";
import { bsClassFormatterRule } from "./bootstrap.js";
import { bstsTypeA } from "../interface/core/bstsTypeA.js";
import { bsClassFormatter } from "../interface/core/bsClassFormatter.js";

const bsClassFormatterDB: {
	[key: string]: bsClassFormatterRule;
} = {
	rotate: new bsClassFormatterRule({
		format: "rotate-$1",
		value: bstsTypeA.rotate,
	}),
	flip: new bsClassFormatterRule({
		format: "flip-$1",
		value: bstsTypeA.flip,
	}),

	//---------------------

	animate: new bsClassFormatterRule({
		format: "animate-$1",
		value: bstsTypeA.animate,
	}),
	animateDuration: new bsClassFormatterRule({
		format: "animate-duration-$1",
		value: bstsTypeA.animateDuration,
	}),
	animateRepeat: new bsClassFormatterRule({
		format: "animate-repeat-$1",
		value: bstsTypeA.animateRepeat,
	}),
	animateDelay: new bsClassFormatterRule({
		format: "animate-delay-$1",
		value: bstsTypeA.animateDelay,
	}),
	animateFill: new bsClassFormatterRule({
		format: "animate-fill-$1",
		value: bstsTypeA.animateFill,
	}),
	animateTiming: new bsClassFormatterRule({
		format: "animate-timing-$1",
		value: bstsTypeA.animateTiming,
	}),
	animateDirection: new bsClassFormatterRule({
		format: "animate-direction-$1",
		value: bstsTypeA.animateDirection,
	}),

	//---------------------

	bgColorActive: new bsClassFormatterRule({
		format: "bg-active-$1",
		value: bstsTypeA.bgColorActive,
	}),
	bgColorHover: new bsClassFormatterRule({
		format: "bg-hover-$1",
		value: bstsTypeA.bgColorHover,
	}),
	bgColorFocus: new bsClassFormatterRule({
		format: "bg-focus-$1",
		value: bstsTypeA.bgColorFocus,
	}),

	//---------------------

	textColorActive: new bsClassFormatterRule({
		format: "text-active-$1",
		value: bstsTypeA.textColorActive,
	}),
	textColorHover: new bsClassFormatterRule({
		format: "text-hover-$1",
		value: bstsTypeA.textColorHover,
	}),
	textColorFocus: new bsClassFormatterRule({
		format: "text-focus-$1",
		value: bstsTypeA.textColorFocus,
	}),

	//---------------------

	borderColorActive: new bsClassFormatterRule({
		format: "border-active-$1",
		value: bstsTypeA.borderColorActive,
	}),
	borderColorHover: new bsClassFormatterRule({
		format: "border-hover-$1",
		value: bstsTypeA.borderColorHover,
	}),
	borderColorFocus: new bsClassFormatterRule({
		format: "border-focus-$1",
		value: bstsTypeA.borderColorFocus,
	}),

	//---------------------

	fontItalicActive: new bsClassFormatterRule({
		formatTrue: "fst-active-italic",
		formatFalse: "fst-active-normal",
		value: bstsTypeA.fontItalicActive,
	}),
	fontItalicHover: new bsClassFormatterRule({
		formatTrue: "fst-hover-italic",
		formatFalse: "fst-hover-normal",
		value: bstsTypeA.fontItalicHover,
	}),
	fontItalicFocus: new bsClassFormatterRule({
		formatTrue: "fst-focus-italic",
		formatFalse: "fst-focus-normal",
		value: bstsTypeA.fontItalicFocus,
	}),

	//---------------------

	textDecorationActive: new bsClassFormatterRule({
		format: "text-decoration-active-$1",
		value: bstsTypeA.textDecorationActive,
	}),
	textDecorationHover: new bsClassFormatterRule({
		format: "text-decoration-hover-$1",
		value: bstsTypeA.textDecorationHover,
	}),
	textDecorationFocus: new bsClassFormatterRule({
		format: "text-decoration-focus-$1",
		value: bstsTypeA.textDecorationFocus,
	}),

	//---------------------

	borderWidthActive: new bsClassFormatterRule({
		format: "border-active-$1",
		value: bstsTypeA.borderWidthActive,
	}),
	borderWidthHover: new bsClassFormatterRule({
		format: "border-hover-$1",
		value: bstsTypeA.borderWidthHover,
	}),
	borderWidthFocus: new bsClassFormatterRule({
		format: "border-focus-$1",
		value: bstsTypeA.borderWidthFocus,
	}),

	//---------------------

	fontWeightActive: new bsClassFormatterRule({
		format: "fw-active-$1",
		value: bstsTypeA.fontWeightActive,
	}),
	fontWeightHover: new bsClassFormatterRule({
		format: "fw-hover-$1",
		value: bstsTypeA.fontWeightHover,
	}),
	fontWeightFocus: new bsClassFormatterRule({
		format: "fw-focus-$1",
		value: bstsTypeA.fontWeightFocus,
	}),

	//---------------------
};

let allowClassProp: (string | undefined)[] = [];

export namespace attachBSTSClass {
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
			if (allowClassProp.length === 0) {
				allowClassProp = Object.keys(bsClassFormatterDB);
			}

			if (allowClassProp.indexOf(key) > -1) {
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

	export const attach: IAttachFn = (key, elem, attr) => {
		let changed = false;

		let allowKey = allowProp(key);
		if (allowKey) {
			let a = keyOfType(key, attr);
			let b = keyOfType(allowKey, bsClassFormatterDB);
			let data: (string | number | boolean)[] = [];

			if (!Array.isArray(attr[a])) {
				data = [attr[a] as string | number | boolean];
			} else {
				data = attr[a] as (string | number | boolean)[];
			}

			data.forEach((i) => {
				elem = addClass(bsClassFormatterDB[b], i, elem);
			});

			delete attr[a];
			changed = true;
		}

		return { attr, elem, changed };
	};
}

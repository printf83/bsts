import { IAttachFn } from "./_index.js";
import { keyOfType } from "../util/keyOfType.js";
import { bstsTypeA } from "../../interface/core/bstsTypeA.js";
import { Formatter, applyClassFormatter, getAttrValues, getAllowedKey } from "./attachHelpers.js";

const formatDB: {
	[key: string]: Formatter;
} = {
	rotate: new Formatter({
		format: "rotate-$1",
		value: bstsTypeA.rotate,
	}),
	flip: new Formatter({
		format: "flip-$1",
		value: bstsTypeA.flip,
	}),

	//---------------------

	animate: new Formatter({
		format: "animate-$1",
		value: bstsTypeA.animate,
	}),
	animateDuration: new Formatter({
		format: "animate-duration-$1",
		value: bstsTypeA.animateDuration,
	}),
	animateRepeat: new Formatter({
		format: "animate-repeat-$1",
		value: bstsTypeA.animateRepeat,
	}),
	animateDelay: new Formatter({
		format: "animate-delay-$1",
		value: bstsTypeA.animateDelay,
	}),
	animateFill: new Formatter({
		format: "animate-fill-$1",
		value: bstsTypeA.animateFill,
	}),
	animateTiming: new Formatter({
		format: "animate-timing-$1",
		value: bstsTypeA.animateTiming,
	}),
	animateDirection: new Formatter({
		format: "animate-direction-$1",
		value: bstsTypeA.animateDirection,
	}),

	//---------------------

	bgColorActive: new Formatter({
		format: "bg-active-$1",
		value: bstsTypeA.bgColorActive,
	}),
	bgColorHover: new Formatter({
		format: "bg-hover-$1",
		value: bstsTypeA.bgColorHover,
	}),
	bgColorFocus: new Formatter({
		format: "bg-focus-$1",
		value: bstsTypeA.bgColorFocus,
	}),

	//---------------------

	textColorActive: new Formatter({
		format: "text-active-$1",
		value: bstsTypeA.textColorActive,
	}),
	textColorHover: new Formatter({
		format: "text-hover-$1",
		value: bstsTypeA.textColorHover,
	}),
	textColorFocus: new Formatter({
		format: "text-focus-$1",
		value: bstsTypeA.textColorFocus,
	}),

	//---------------------

	borderColorActive: new Formatter({
		format: "border-active-$1",
		value: bstsTypeA.borderColorActive,
	}),
	borderColorHover: new Formatter({
		format: "border-hover-$1",
		value: bstsTypeA.borderColorHover,
	}),
	borderColorFocus: new Formatter({
		format: "border-focus-$1",
		value: bstsTypeA.borderColorFocus,
	}),

	//---------------------

	fontItalicActive: new Formatter({
		formatTrue: "fst-active-italic",
		formatFalse: "fst-active-normal",
		value: bstsTypeA.fontItalicActive,
	}),
	fontItalicHover: new Formatter({
		formatTrue: "fst-hover-italic",
		formatFalse: "fst-hover-normal",
		value: bstsTypeA.fontItalicHover,
	}),
	fontItalicFocus: new Formatter({
		formatTrue: "fst-focus-italic",
		formatFalse: "fst-focus-normal",
		value: bstsTypeA.fontItalicFocus,
	}),

	//---------------------

	textDecorationActive: new Formatter({
		format: "text-decoration-active-$1",
		value: bstsTypeA.textDecorationActive,
	}),
	textDecorationHover: new Formatter({
		format: "text-decoration-hover-$1",
		value: bstsTypeA.textDecorationHover,
	}),
	textDecorationFocus: new Formatter({
		format: "text-decoration-focus-$1",
		value: bstsTypeA.textDecorationFocus,
	}),

	//---------------------

	borderWidthActive: new Formatter({
		format: "border-active-$1",
		value: bstsTypeA.borderWidthActive,
	}),
	borderWidthHover: new Formatter({
		format: "border-hover-$1",
		value: bstsTypeA.borderWidthHover,
	}),
	borderWidthFocus: new Formatter({
		format: "border-focus-$1",
		value: bstsTypeA.borderWidthFocus,
	}),

	//---------------------

	fontWeightActive: new Formatter({
		format: "fw-active-$1",
		value: bstsTypeA.fontWeightActive,
	}),
	fontWeightHover: new Formatter({
		format: "fw-hover-$1",
		value: bstsTypeA.fontWeightHover,
	}),
	fontWeightFocus: new Formatter({
		format: "fw-focus-$1",
		value: bstsTypeA.fontWeightFocus,
	}),

	//---------------------
};

/**
 * Attaches formatting rules to the given element based on the provided
 * attribute key and value. Checks that the key is valid, gets the
 * corresponding formatting rule, checks that the value is allowed, and
 * adds classes to the element according to the rule's format strings.
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

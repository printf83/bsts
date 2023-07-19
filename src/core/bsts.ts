import { addClassIntoElement } from "./addClassIntoElement.js";
import { IAttachFn } from "./attach/_index.js";
import { keyOfType } from "./keyOfType.js";
import { ClassFormatter, bootstrapType, bootstrapTypeA, bsClassFormatterRule } from "./bootstrap.js";

export namespace bstsType {
	type ROTATE = 45 | 90 | 135 | 180 | 225 | 270 | 315;
	type REPEAT = 1 | 2 | 3 | 5 | 10 | "infinite";

	//transform
	export type rotate = ROTATE | `${ROTATE}`;
	export type flip = "horizontal" | "vertical" | "both";

	//animate
	export type animate =
		| "rotation"
		| "sidetoside"
		| "zoom-in"
		| "zoom-out"
		| "spin"
		| "pulse"
		| "shake"
		| "barrel-roll"
		| "floater"
		| "wiggle"
		| "pound"
		| "heartbeat"
		| "roller-in-right"
		| "roller-in-left"
		| "roller-out-right"
		| "roller-out-left"
		| "slide-in-bottom"
		| "slide-in-top"
		| "slide-in-left"
		| "slide-in-right"
		| "slide-out-bottom"
		| "slide-out-top"
		| "slide-out-left"
		| "slide-out-right"
		| "fade-in"
		| "fade-out"
		| "rotate-in-right"
		| "rotate-in-left"
		| "rotate-in"
		| "rotate-out-right"
		| "rotate-out-left"
		| "rotate-out"
		| "bounce-in"
		| "bounce-out";
	export type animateDuration =
		| "50ms"
		| "100ms"
		| "250ms"
		| "300ms"
		| "350ms"
		| "400ms"
		| "450ms"
		| "500ms"
		| "600ms"
		| "700ms"
		| "800ms"
		| "900ms"
		| "1s"
		| "1500ms"
		| "2s"
		| "2500ms"
		| "3s"
		| "3500ms"
		| "4s"
		| "4500ms"
		| "5s";

	export type animateRepeat = REPEAT | `${REPEAT}` | "infinite";
	export type animateDirection =
		| "normal"
		| "reverse"
		| "alternate"
		| "alternate-reverse"
		| "normal-reverse"
		| "alternate-reverse-normal";
	export type animateDelay = animateDuration;
	export type animateFill = "none" | "forwards" | "backwards" | "both" | "none-backward" | "both-foward-none";
	export type animateTiming = "ease" | "ease-in-out" | "linear" | "zoom" | "bounce";

	//extend bgColor, textColor and borderColor
	//for active, focus, hover

	//bgColor extend
	export type bgColorActive = bootstrapType.bgColor;
	export type bgColorHover = bootstrapType.bgColor;
	export type bgColorFocus = bootstrapType.bgColor;

	//textColor extend
	export type textColorActive = bootstrapType.textColor;
	export type textColorHover = bootstrapType.textColor;
	export type textColorFocus = bootstrapType.textColor;

	//borderColor extend
	export type borderColorActive = bootstrapType.borderColor;
	export type borderColorHover = bootstrapType.borderColor;
	export type borderColorFocus = bootstrapType.borderColor;
}

export namespace bstsTypeA {
	const ROTATE = [45, 90, 135, 180, 225, 270, 315];
	const REPEAT = [1, 2, 3, 5, 10];

	//transform
	export const rotate = [...ROTATE, ...ROTATE.map((i) => `${i}`)];
	export const flip = ["horizontal", "vertical", "both"];

	//animate
	export const animate = [
		"rotation",
		"sidetoside",
		"zoom-in",
		"zoom-out",
		"spin",
		"pulse",
		"shake",
		"barrel-roll",
		"floater",
		"wiggle",
		"pound",
		"heartbeat",
		"roller-in-right",
		"roller-in-left",
		"roller-out-right",
		"roller-out-left",
		"slide-in-bottom",
		"slide-in-top",
		"slide-in-left",
		"slide-in-right",
		"slide-out-bottom",
		"slide-out-top",
		"slide-out-left",
		"slide-out-right",
		"fade-in",
		"fade-out",
		"rotate-in-right",
		"rotate-in-left",
		"rotate-in",
		"rotate-out-right",
		"rotate-out-left",
		"rotate-out",
		"bounce-in",
		"bounce-out",
	];
	export const animateDuration = [
		"50ms",
		"100ms",
		"250ms",
		"300ms",
		"350ms",
		"400ms",
		"450ms",
		"500ms",
		"600ms",
		"700ms",
		"800ms",
		"900ms",
		"1s",
		"1500ms",
		"2s",
		"2500ms",
		"3s",
		"3500ms",
		"4s",
		"4500ms",
		"5s",
	];

	export const animateRepeat = [...REPEAT, ...REPEAT.map((i) => `${i}`), "infinite"];
	export const animateDirection = [
		"normal",
		"reverse",
		"alternate",
		"alternate-reverse",
		"normal-reverse",
		"alternate-reverse-normal",
	];
	export const animateDelay = [...animateDuration];
	export const animateFill = ["none", "forwards", "backwards", "both", "none-backward", "both-foward-none"];
	export const animateTiming = ["ease", "ease-in-out", "linear", "zoom", "bounce"];

	//extend bgColor, textColor and borderColor
	//for active, focus, hover

	//bgColor extend
	export const bgColorActive = bootstrapTypeA.bgColor;
	export const bgColorHover = bootstrapTypeA.bgColor;
	export const bgColorFocus = bootstrapTypeA.bgColor;

	//textColor extend
	export const textColorActive = bootstrapTypeA.textColor;
	export const textColorHover = bootstrapTypeA.textColor;
	export const textColorFocus = bootstrapTypeA.textColor;

	//borderColor extend
	export const borderColorActive = bootstrapTypeA.borderColor;
	export const borderColorHover = bootstrapTypeA.borderColor;
	export const borderColorFocus = bootstrapTypeA.borderColor;
}

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
};

export interface IBsts {
	rotate?: bstsType.rotate;
	flip?: bstsType.flip;

	animate?: bstsType.animate;
	animateDuration?: bstsType.animateDuration;
	animateRepeat?: bstsType.animateRepeat;
	animateDirection?: bstsType.animateDirection;
	animateDelay?: bstsType.animateDelay;
	animateFill?: bstsType.animateFill;
	animateTiming?: bstsType.animateTiming;

	bgColorActive?: bstsType.bgColorActive;
	bgColorHover?: bstsType.bgColorHover;
	bgColorFocus?: bstsType.bgColorFocus;
	textColorActive?: bstsType.textColorActive;
	textColorHover?: bstsType.textColorHover;
	textColorFocus?: bstsType.textColorFocus;
	borderColorActive?: bstsType.borderColorActive;
	borderColorHover?: bstsType.borderColorHover;
	borderColorFocus?: bstsType.borderColorFocus;
}

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

	const addClass = (rule: ClassFormatter | undefined, data: string | number | boolean, elem: Element) => {
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

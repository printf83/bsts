import { addClassIntoElement } from "./addClassIntoElement.js";
import { IAttachFn } from "./attach/_index.js";
import { keyOfType } from "./keyOfType.js";
import { ClassFormatter, bsClassFormatterRule } from "./bootstrap.js";

export namespace bstsType {
	type ROTATE = 45 | 90 | 135 | 180 | 225 | 270 | 315;
	type REPEAT = 1 | 2 | 3 | 5 | 10 | "infinite";

	//this from bootstrapType
	type COLOR = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
	type BODYCOLOR = "body" | "body-secondary" | "body-tertiary";
	type OTHERCOLOR = "white" | "black";
	type BODYTEXTCOLOR = BODYCOLOR | OTHERCOLOR | "body-emphasis";
	//------------------------

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
		| "roller-right"
		| "roller-left"
		| "slide-down"
		| "slide-up"
		| "slide-left"
		| "slide-right"
		| "fade-in"
		| "fade-out"
		| "rotate-in-right"
		| "rotate-in-left"
		| "rotate-in"
		| "bounce-in";
	export type animateDuration =
		| "250ms"
		| "400ms"
		| "500ms"
		| "800ms"
		| "1s"
		| "1500ms"
		| "2s"
		| "2500ms"
		| "3s"
		| "4s"
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

	//link
	export type linkNormal = COLOR | BODYTEXTCOLOR | "link" | "transparent";
	export type linkBorder = linkNormal;
	export type linkHover = linkNormal;
	export type linkActive = linkNormal;
	export type linkActiveBg = linkNormal;
	export type linkActiveBorder = linkNormal;
	export type linkBg = linkNormal;
	export type linkHoverBg = linkNormal;
	export type linkHoverBorder = linkNormal;
}

namespace bstsTypeA {
	const ROTATE = [45, 90, 135, 180, 225, 270, 315];
	const REPEAT = [1, 2, 3, 5, 10];

	//this from bootstrapA
	const COLOR = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
	const BODYCOLOR = ["body", "body-secondary", "body-tertiary"];
	const OTHERCOLOR = ["white", "black"];
	const BODYTEXTCOLOR = [...BODYCOLOR, ...OTHERCOLOR, "body-emphasis"];
	//---------------------

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
		"roller-right",
		"roller-left",
		"slide-down",
		"slide-up",
		"slide-left",
		"slide-right",
		"fade-in",
		"fade-out",
		"rotate-in-right",
		"rotate-in-left",
		"rotate-in",
		"bounce-in",
	];
	export const animateDuration = [
		"250ms",
		"400ms",
		"500ms",
		"800ms",
		"1s",
		"1500ms",
		"2s",
		"2500ms",
		"3s",
		"4s",
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

	//link
	//bsts css
	export const linkNormal = [...COLOR, ...BODYTEXTCOLOR, "link", "transparent"];
	export const linkBorder = linkNormal;
	export const linkHover = linkNormal;
	export const linkActive = linkNormal;
	export const linkActiveBg = linkNormal;
	export const linkActiveBorder = linkNormal;
	export const linkBg = linkNormal;
	export const linkHoverBg = linkNormal;
	export const linkHoverBorder = linkNormal;
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

	linkNormal: new bsClassFormatterRule({
		format: "link-normal-$1",
		value: bstsTypeA.linkNormal,
	}),
	linkBorder: new bsClassFormatterRule({
		format: "link-border-$1",
		value: bstsTypeA.linkBorder,
	}),
	linkHover: new bsClassFormatterRule({
		format: "link-hover-$1",
		value: bstsTypeA.linkHover,
	}),
	linkHoverBorder: new bsClassFormatterRule({
		format: "link-hover-border-$1",
		value: bstsTypeA.linkHoverBorder,
	}),
	linkActive: new bsClassFormatterRule({
		format: "link-active-$1",
		value: bstsTypeA.linkActive,
	}),
	linkActiveBg: new bsClassFormatterRule({
		format: "link-active-bg-$1",
		value: bstsTypeA.linkActiveBg,
	}),
	linkActiveBorder: new bsClassFormatterRule({
		format: "link-active-border-$1",
		value: bstsTypeA.linkActiveBorder,
	}),
	linkHoverBg: new bsClassFormatterRule({
		format: "link-hover-bg-$1",
		value: bstsTypeA.linkHoverBg,
	}),
	linkBg: new bsClassFormatterRule({
		format: "link-bg-$1",
		value: bstsTypeA.linkBg,
	}),

	//---------------------
};

export interface ITransform {
	rotate?: bstsType.rotate;
	flip?: bstsType.flip;
}

export interface IAnimate {
	animate?: bstsType.animate;
	animateDuration?: bstsType.animateDuration;
	animateRepeat?: bstsType.animateRepeat;
	animateDirection?: bstsType.animateDirection;
	animateDelay?: bstsType.animateDelay;
	animateFill?: bstsType.animateFill;
	animateTiming?: bstsType.animateTiming;
}

export interface ILink {
	linkNormal?: bstsType.linkNormal;
	linkBorder?: bstsType.linkBorder;
	linkHover?: bstsType.linkHover;
	linkHoverBorder?: bstsType.linkHoverBorder;
	linkActive?: bstsType.linkActive;
	linkActiveBg?: bstsType.linkActiveBg;
	linkActiveBorder?: bstsType.linkActiveBorder;
	linkBg?: bstsType.linkBg;
	linkHoverBg?: bstsType.linkHoverBg;
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

	const allowProp = (key: string) => {
		if (allowClassProp.length === 0) {
			allowClassProp = Object.keys(bsClassFormatterDB);
		}

		if (allowClassProp.indexOf(key) > -1) {
			return key;
		}

		return null;
	};

	const addClass = (rule: ClassFormatter, data: string | number | boolean, elem: Element) => {
		if (rule.value && allowValue(data, rule.value)) {
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

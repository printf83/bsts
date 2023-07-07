import { mergeObject } from "./mergeObject.js";
import { IAttr, isAttr } from "./tag.js";
import { addClassIntoElement } from "./addClassIntoElement.js";
import { IAttachFn } from "./attach/_index.js";
import { keyOfType } from "./keyOfType.js";
import { AttrFormatter, bsClassFormatterRule } from "./bootstrap.js";

export namespace bstsType {
	type ROTATE = 45 | 90 | 135 | 180 | 225 | 270 | 315;
	type REPEAT = 1 | 2 | 3 | 5 | 10 | "infinite";

	export type rotate = ROTATE | `${ROTATE}`;
	export type flip = "horizontal" | "vertical" | "both";
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
}

namespace bstsTypeA {
	const ROTATE = [45, 90, 135, 180, 225, 270, 315];
	const REPEAT = [1, 2, 3, 5, 10];

	export const rotate = [...ROTATE, ...ROTATE.map((i) => `${i}`)];

	export const flip = ["horizontal", "vertical", "both"];
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
}

const bsClassFormatterDB: {
	[key: string]: bsClassFormatterRule;
} = {
	rotate: new bsClassFormatterRule({
		format: "rotate-$1",
		value: bstsTypeA.rotate,
	}),
	flip: new bsClassFormatterRule({
		format: "fli[-$1",
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

let allowClassProp: (string | undefined)[] = [];

export namespace attachBSClass {
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

let allowAttrProp: (string | undefined)[] = [];

export namespace attachBSAttr {
	const allow = (key: string) => {
		if (allowAttrProp.length === 0) {
			allowAttrProp = Object.keys(attrFormatterDB);
		}

		if (allowAttrProp.indexOf(key) > -1) {
			return key;
		}

		return null;
	};

	const addAttr = (rule: AttrFormatter, data: string | number | boolean, elem: Element) => {
		elem = rule(elem, data);

		return elem;
	};

	export const attach: IAttachFn = (key, elem, attr) => {
		let changed = false;
		let allowKey = allow(key);
		if (allowKey) {
			let a = keyOfType(key, attr);
			let b = keyOfType(allowKey, attrFormatterDB);
			let data: (string | number | boolean)[] = [];

			if (!Array.isArray(attr[a])) {
				data = [attr[a] as string | number | boolean];
			} else {
				data = attr[a] as (string | number | boolean)[];
			}

			data.forEach((i) => {
				elem = addAttr(attrFormatterDB[b], i, elem);
			});

			delete attr[a];
			changed = true;
		}

		return { attr, elem, changed };
	};
}

export const bsConsNoElemArg = <T extends IAttr>(fn: <T extends IAttr>(attr: T) => IAttr, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			return fn(arg[0] as T);
		} else {
			return fn({});
		}
	} else {
		return fn({});
	}
};

export const bsConstArg = <T extends IAttr>(prop: string, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return arg[0] as T;
			} else {
				return { [prop]: arg[0] } as T;
			}
		} else if (arg.length === 2) {
			return mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T);
		} else {
			return {} as T;
		}
	} else {
		return {} as T;
	}
};

export const bsConstArgTag = <T extends IAttr>(
	prop: string,
	t1: string,
	t2: string,
	fn: (i: T) => boolean,
	arg?: any[]
) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return fn(arg[0]) ? t2 : t1;
			} else {
				return t1;
			}
		} else if (arg.length === 2) {
			return fn(mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T)) ? t2 : t1;
		} else {
			return t1;
		}
	} else {
		return t1;
	}
};

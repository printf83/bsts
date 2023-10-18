import { bsTypeA } from "./bsTypeA.js";

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
	export const bgColorActive = bsTypeA.bgColor;
	export const bgColorHover = bsTypeA.bgColor;
	export const bgColorFocus = bsTypeA.bgColor;

	//textColor extend
	export const textColorActive = bsTypeA.textColor;
	export const textColorHover = bsTypeA.textColor;
	export const textColorFocus = bsTypeA.textColor;

	//borderColor extend
	export const borderColorActive = bsTypeA.borderColor;
	export const borderColorHover = bsTypeA.borderColor;
	export const borderColorFocus = bsTypeA.borderColor;

	//fontItalic extend
	export const fontItalicActive = bsTypeA.fontItalic;
	export const fontItalicHover = bsTypeA.fontItalic;
	export const fontItalicFocus = bsTypeA.fontItalic;

	//textDecoration extend
	export const textDecorationActive = bsTypeA.textDecoration;
	export const textDecorationHover = bsTypeA.textDecoration;
	export const textDecorationFocus = bsTypeA.textDecoration;

	//borderWidth extend
	export const borderWidthActive = bsTypeA.borderWidth;
	export const borderWidthHover = bsTypeA.borderWidth;
	export const borderWidthFocus = bsTypeA.borderWidth;

	//fontWeight extend
	export const fontWeightActive = bsTypeA.fontWeight;
	export const fontWeightHover = bsTypeA.fontWeight;
	export const fontWeightFocus = bsTypeA.fontWeight;
}

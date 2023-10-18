import { bsType } from "./bsType.js";

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
	export type bgColorActive = bsType.bgColor;
	export type bgColorHover = bsType.bgColor;
	export type bgColorFocus = bsType.bgColor;

	//textColor extend
	export type textColorActive = bsType.textColor;
	export type textColorHover = bsType.textColor;
	export type textColorFocus = bsType.textColor;

	//borderColor extend
	export type borderColorActive = bsType.borderColor;
	export type borderColorHover = bsType.borderColor;
	export type borderColorFocus = bsType.borderColor;

	//fontItalic extend
	export type fontItalicActive = bsType.fontItalic;
	export type fontItalicHover = bsType.fontItalic;
	export type fontItalicFocus = bsType.fontItalic;

	//textDecoration extend
	export type textDecorationActive = bsType.textDecoration;
	export type textDecorationHover = bsType.textDecoration;
	export type textDecorationFocus = bsType.textDecoration;

	//borderWidth extend
	export type borderWidthActive = bsType.borderWidth;
	export type borderWidthHover = bsType.borderWidth;
	export type borderWidthFocus = bsType.borderWidth;

	//fontWeight extend
	export type fontWeightActive = bsType.fontWeight;
	export type fontWeightHover = bsType.fontWeight;
	export type fontWeightFocus = bsType.fontWeight;
}

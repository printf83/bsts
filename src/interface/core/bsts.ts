import { bstsType } from "./bstsType.js";

export interface bsts {
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

	fontItalicActive?: bstsType.fontItalicActive;
	fontItalicHover?: bstsType.fontItalicHover;
	fontItalicFocus?: bstsType.fontItalicFocus;

	textDecorationActive?: bstsType.textDecorationActive;
	textDecorationHover?: bstsType.textDecorationHover;
	textDecorationFocus?: bstsType.textDecorationFocus;

	borderWidthActive?: bstsType.borderWidthActive;
	borderWidthHover?: bstsType.borderWidthHover;
	borderWidthFocus?: bstsType.borderWidthFocus;

	fontWeightActive?: bstsType.fontWeightActive;
	fontWeightHover?: bstsType.fontWeightHover;
	fontWeightFocus?: bstsType.fontWeightFocus;
}

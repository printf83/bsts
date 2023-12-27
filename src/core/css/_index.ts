import { animation } from "./animation.js";
import { borderWidthExtend } from "./borderWidthExtend.js";
import { btnToggle } from "./btnToggle.js";
import { calendar } from "./calendar.js";
import { colorExtend } from "./colorExtend.js";
import { dropdownMenuStyle } from "./dropdownMenuStyle.js";
import { fontItalicExtend } from "./fontItalicExtend.js";
import { fontWeightExtend } from "./fontWeightExtend.js";
import { main } from "./main.js";
import { svgInLinkAndButton } from "./svgInLinkAndButton.js";
import { tableResponsive } from "./tableResponsive.js";
import { textDecorationExtend } from "./textDecorationExtend.js";
import { transform } from "./transform.js";

export const extendedBootstrapCSS = () => {
	const css = [
		btnToggle,
		dropdownMenuStyle,
		svgInLinkAndButton,
		tableResponsive("bs-title-name"),
		main,
		colorExtend(),
		borderWidthExtend(),
		fontItalicExtend(),
		textDecorationExtend(),
		fontWeightExtend(),
		calendar,
		animation(),
		transform(),
	].join("\n");

	return css.replace(/(\r\n|\n|\r)/gm, "").replace(/^\t+/gm, "");
};

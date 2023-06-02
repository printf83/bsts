import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { aColor } from "./css/aColor.js";
import { aHover } from "./css/aHover.js";
import { btnToggle } from "./css/btnToggle.js";
import { dropdownMenuStyle } from "./css/dropdownMenuStyle.js";
import { svgInLinkAndButton } from "./css/svgInLinkAndButton.js";
import { tableResponsive } from "./css/tableResponsive.js";

const setCSS = () => {
	const css = [
		btnToggle,
		dropdownMenuStyle,
		svgInLinkAndButton,
		tableResponsive("bs-title-name"),
		aHover,
		aColor(),
	].join("\n");

	if (!document.getElementById("bsts-css-container")) {
		appendChild(document.head, new style({ id: "bsts-css-container" }, css));
	}
};

export const elemReady = (doc: Document, callback: Function) => {
	if (doc.readyState != "loading") {
		callback();
	} else {
		console.error("Cannot detect readyState");
		callback();
	}
};

export const documentReady = (callback: Function) => {
	elemReady(document, () => {
		setCSS();
		callback();
	});
};

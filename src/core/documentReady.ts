import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { aColor } from "./css/aColor.js";
import { aHover } from "./css/aHover.js";
import { btnToggle } from "./css/btnToggle.js";
import { calendar } from "./css/calendar.js";
import { dropdownMenuStyle } from "./css/dropdownMenuStyle.js";
import { svgInLinkAndButton } from "./css/svgInLinkAndButton.js";
import { tableResponsive } from "./css/tableResponsive.js";
import { console } from "./console.js";

//set css on document ready
const setCSS = () => {
	const css = [
		btnToggle,
		dropdownMenuStyle,
		svgInLinkAndButton,
		tableResponsive("bs-title-name"),
		aHover,
		aColor(),
		calendar,
	].join("\n");

	if (!document.getElementById("bsts-css-container")) {
		appendChild(document.head, new style({ id: "bsts-css-container" }, css));
	}
};

//setup DOMInserted
const setupDOMWatcher = () => {
	const observer = new MutationObserver(function (m) {
		//i dont know if this is good or not
		m.forEach(function (e) {
			if (e.addedNodes && e.addedNodes.length > 0) {
				const elem = document.documentElement.querySelectorAll(".bs-build-event");
				if (elem && elem.length > 0) {
					elem.forEach((i) => {
						i.classList.remove("bs-build-event");
						i.dispatchEvent(new CustomEvent("build"));
					});
				}
			}
		});
	});

	observer.observe(document.documentElement, {
		childList: true,
		subtree: true,
	});
};

//documentReady
const elemReady = (doc: Document, callback: Function) => {
	if (doc.readyState != "loading") {
		callback();
	} else {
		console.error("Cannot detect readyState");
		callback();
	}
};

let documentReadyTrigged = false;
export const documentReady = (callback: Function) => {
	if (!documentReadyTrigged) {
		documentReadyTrigged = true;
		elemReady(document, () => {
			setupDOMWatcher();
			setCSS();
			callback();
		});
	} else {
		console.warn("documentReady sould be called once");
	}
};

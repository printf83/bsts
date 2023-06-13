import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { aColor } from "./css/aColor.js";
import { aHover } from "./css/aHover.js";
import { btnToggle } from "./css/btnToggle.js";
import { calendar } from "./css/calendar.js";
import { dropdownMenuStyle } from "./css/dropdownMenuStyle.js";
import { svgInLinkAndButton } from "./css/svgInLinkAndButton.js";
import { tableResponsive } from "./css/tableResponsive.js";

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
			for (var i = 0; i < e.addedNodes.length; i++) {
				dispactchBuildEvent(e.addedNodes[i]);
			}
		});
	});

	observer.observe(document.documentElement, { childList: true, subtree: true });
};

const dispactchBuildEvent = (node: Node) => {
	if (node.hasChildNodes()) {
		for (var j = 0; j < node.childNodes.length; j++) {
			dispactchBuildEvent(node.childNodes[j]);
		}
		node.dispatchEvent(new CustomEvent("build"));
	}

	node.dispatchEvent(new CustomEvent("build"));
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

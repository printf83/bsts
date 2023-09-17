import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { main } from "./css/main.js";
import { btnToggle } from "./css/btnToggle.js";
import { calendar } from "./css/calendar.js";
import { dropdownMenuStyle } from "./css/dropdownMenuStyle.js";
import { svgInLinkAndButton } from "./css/svgInLinkAndButton.js";
import { tableResponsive } from "./css/tableResponsive.js";
import { bstsConsole as console } from "./console.js";
import { ElementWithAbortController, removeEvent } from "./eventManager.js";
import { observeMutationObserver } from "./mutationObserverManager.js";
import { animation } from "./css/animation.js";
import { transform } from "./css/transform.js";
import { colorExtend } from "./css/colorExtend.js";
import { borderWidthExtend } from "./css/borderWidthExtend.js";
import { fontItalicExtend } from "./css/fontItalicExtend.js";
import { textDecorationExtend } from "./css/textDecorationExtend.js";
import { fontWeightExtend } from "./css/fontWeightExtend.js";

//set css on document ready
const setCSS = () => {
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

	if (!document.getElementById("bsts-css-container")) {
		appendChild(
			document.head,
			// new style({ id: "bsts-css-container" }, css.replaceAll("\n", "").replaceAll("\t", ""))
			new style({ id: "bsts-css-container" }, css.replace(/(\r\n|\n|\r)/gm, "").replace(/^\t+/gm, ""))
		);
	}
};

const dispatchDestroyEvent = (elem: Element) => {
	if (elem.nodeType !== 3) {
		if (elem.classList.contains("bs-destroy-event")) {
			elem.dispatchEvent(new CustomEvent("destroy"));
			removeEvent(elem as ElementWithAbortController);
		}
	}
};

const dispatchBuildEvent = (elem: Element) => {
	if (elem.nodeType !== 3) {
		const listOfElem = elem.getElementsByClassName("bs-build-event");
		if (listOfElem && listOfElem.length > 0) {
			Array.from(listOfElem).forEach((i) => {
				i.classList.remove("bs-build-event");
				i.dispatchEvent(new CustomEvent("build"));
			});
		}

		if (elem.classList.contains("bs-build-event")) {
			elem.classList.remove("bs-build-event");
			elem.dispatchEvent(new CustomEvent("build"));
		}
	}
};

//setup DOMInserted
const setupDOMWatcher = () => {
	observeMutationObserver(
		document.documentElement,
		function (mutation) {
			if (mutation && mutation.length > 0) {
				mutation.forEach((mutationNode) => {
					//check remove node
					if (mutationNode.removedNodes && mutationNode.removedNodes.length > 0) {
						mutationNode.removedNodes.forEach((i) => {
							dispatchDestroyEvent(i as Element);
						});
					}

					//check added node
					if (mutationNode.addedNodes && mutationNode.addedNodes.length > 0) {
						mutationNode.addedNodes.forEach((i) => {
							dispatchBuildEvent(i as Element);
						});
					}
				});
			}
		},
		{ childList: true, subtree: true }
	);
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

import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { aColor } from "./css/aColor.js";
import { aHover } from "./css/aHover.js";
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
		animation(),
		transform(),
	].join("\n");

	if (!document.getElementById("bsts-css-container")) {
		appendChild(document.head, new style({ id: "bsts-css-container" }, css));
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
	// const observer = new MutationObserver(function (m) {
	// 	if (m && m.length > 0) {
	// 		m.forEach((n) => {
	// 			//check remove node
	// 			if (n.removedNodes && n.removedNodes.length > 0) {
	// 				n.removedNodes.forEach((i) => {
	// 					dispatchDestroyEvent(i as Element);
	// 				});
	// 			}

	// 			//check added node
	// 			if (n.addedNodes && n.addedNodes.length > 0) {
	// 				n.addedNodes.forEach((i) => {
	// 					dispatchBuildEvent(i as Element);
	// 				});
	// 			}
	// 		});
	// 	}
	// });

	// observer.observe(document.documentElement, {
	// 	childList: true,
	// 	subtree: true,
	// });

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

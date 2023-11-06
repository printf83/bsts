import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { bstsConsole as console } from "./util/console.js";
import { ElementWithAbortController, removeEvent } from "./util/eventManager.js";
import { observeMutationObserver } from "./util/mutationObserverManager.js";
import { extendedBootstrapCSS } from "./css/_index.js";

//set css on document ready
const setCSS = () => {
	if (!document.getElementById("bsts-css-container")) {
		appendChild(document.head, new style({ id: "bsts-css-container" }, extendedBootstrapCSS()));
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

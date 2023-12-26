import { style } from "../html/style.js";
import { appendChild } from "./builder.js";
import { main } from "./css/main.js";
import { btnToggle } from "./css/btnToggle.js";
import { calendar } from "./css/calendar.js";
import { dropdownMenuStyle } from "./css/dropdownMenuStyle.js";
import { svgInLinkAndButton } from "./css/svgInLinkAndButton.js";
import { tableResponsive } from "./css/tableResponsive.js";
import { bstsConsole as console } from "./util/console.js";
import { ElementWithAbortController, removeEvent } from "./util/eventManager.js";
import { observeMutationObserver } from "./util/mutationObserverManager.js";
import { animation } from "./css/animation.js";
import { transform } from "./css/transform.js";
import { colorExtend } from "./css/colorExtend.js";
import { borderWidthExtend } from "./css/borderWidthExtend.js";
import { fontItalicExtend } from "./css/fontItalicExtend.js";
import { textDecorationExtend } from "./css/textDecorationExtend.js";
import { fontWeightExtend } from "./css/fontWeightExtend.js";

/**
 * Sets CSS styles on the document by concatenating an array of CSS snippets and appending them to the document head.
 *
 * Joins an array of CSS snippet functions, removes newlines, trims whitespace, and appends the resulting CSS string
 * to a style element in the document head with the ID "bsts-css-container". If that element doesn't exist yet, it will be created.
 *
 * This allows modularization and lazy-loading of CSS while bundling it efficiently into a single style element.
 */
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
			new style({ id: "bsts-css-container" }, css.replace(/(\r\n|\n|\r)/gm, "").replace(/^\t+/gm, ""))
		);
	}
};

/**
 * Dispatches a 'destroy' event on the given element if it has the 'bs-destroy-event' class.
 * Removes any event listeners added by this module from the element as well.
 *
 * @param elem - The element to dispatch the event on.
 */
const dispatchDestroyEvent = (elem: Element) => {
	if (elem.nodeType !== 3) {
		if (elem.classList.contains("bs-destroy-event")) {
			elem.dispatchEvent(new CustomEvent("destroy"));
			removeEvent(elem as ElementWithAbortController);
		}
	}
};

/**
 * Dispatches a 'build' event on the given element if it has the 'bs-build-event' class.
 * Removes the 'bs-build-event' class after dispatching the event.
 * Dispatches the event on all child elements with the 'bs-build-event' class as well.
 *
 * @param elem - The element to dispatch the event on.
 */
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
/**
 * Sets up a mutation observer on the document element to dispatch 'build' and
 * 'destroy' events on elements as they are added/removed from the DOM.
 */
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
/**
 * Checks if the provided document is loaded and ready,
 * and executes the callback function if so.
 * If not ready, logs an error and still executes callback.
 */
const elemReady = (doc: Document, callback: Function) => {
	if (doc.readyState != "loading") {
		callback();
	} else {
		console.error("Cannot detect readyState");
		callback();
	}
};

/**
 * documentReady sets up various initialization tasks to run after
 * the document has loaded. It takes a callback function to execute after
 * initialization. This exported function ensures the callback is only
 * executed once, even if called multiple times.
 */
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

import { bstsConsole as console } from "./console.js";

/**
 * Extends the HTMLElement class to include an AbortController property.
 * Allows attaching event listeners that can be aborted and removed together.
 */
export class ElementWithAbortController extends HTMLElement {
	constructor(public AbortController?: AbortController) {
		super();
	}
}

function detachEvent(elem: Element | ElementWithAbortController): void {
	if ("AbortController" in elem) {
		const AbortController = (elem as ElementWithAbortController).AbortController;
		if (AbortController) {
			console.info(`Deattach all event from $1`, elem);
			AbortController.abort();

			elem.AbortController = undefined;
			delete elem.AbortController;
		}
	}
}

/**
 * Attaches an event listener to the given element that can be aborted.
 * If elem is a string, attaches the listener to all matching elements.
 * Uses AbortController to allow removing the listener.
 * Adds class to enable bulk listener removal.
 */
export const addEvent = (name: string, elem: string | Element | ElementWithAbortController, fn: EventListener) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				addEvent(name, i, fn);
			});
		}
	} else {
		//create detachEventListener db
		if ("AbortController" in elem) {
			if (typeof elem.AbortController === "undefined") {
				elem.AbortController = new AbortController();
				elem.classList.add("bs-destroy-event");
			}

			//add event to element
			//using signal to remove listerner
			if (name === "build" || name === "destroy") {
				elem.addEventListener(name, fn, {
					signal: elem.AbortController.signal,
					once: true,
				});
			} else {
				elem.addEventListener(name, fn, {
					signal: elem.AbortController.signal,
				});
			}
		} else {
			(elem as ElementWithAbortController).AbortController = new AbortController();
			elem.classList.add("bs-destroy-event");

			//add event to element
			//using signal to remove listerner
			if (name === "build" || name === "destroy") {
				elem.addEventListener(name, fn, {
					signal: (elem as ElementWithAbortController).AbortController!.signal,
					once: true,
				});
			} else {
				elem.addEventListener(name, fn, {
					signal: (elem as ElementWithAbortController).AbortController!.signal,
				});
			}
		}

		console.info(`Attach ${name} event to $1`, elem);
	}
};

/**
 * Removes event listeners from an element and its child elements recursively.
 *
 * Accepts a string selector, Element, or ElementWithAbortController.
 *
 * For string selectors, finds matching elements and removes events from each.
 *
 * For Element and ElementWithAbortController, removes events from the element itself
 * and then recursively calls removeEvent on each child element to remove events
 * from the entire subtree.
 */
export const removeEvent = (elem: string | Element | ElementWithAbortController) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				removeEvent(i);
			});
		}
	} else {
		if (elem) {
			let c = elem?.childNodes;

			//remove event from child
			if (c?.length > 0) {
				let d = Array.from(c).map((i) => i as ElementWithAbortController);

				d.forEach((e) => {
					removeEvent(e);
				});
			}

			//detach event from elem
			detachEvent(elem);
		}
	}
};

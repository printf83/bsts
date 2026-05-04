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
const ensureAbortController = (elem: Element | ElementWithAbortController) => {
	const target = elem as ElementWithAbortController;
	if (!target.AbortController) {
		target.AbortController = new AbortController();
		elem.classList.add("bs-destroy-event");
	}
	return target.AbortController;
};

export const addEvent = (name: string, elem: string | Element | ElementWithAbortController, fn: EventListener) => {
	if (typeof elem === "string") {
		document.querySelectorAll(elem).forEach((i) => addEvent(name, i, fn));
		return;
	}

	const controller = ensureAbortController(elem);
	const options: AddEventListenerOptions = {
		signal: controller.signal,
	};
	if (name === "build" || name === "destroy") {
		options.once = true;
	}

	elem.addEventListener(name, fn, options);
	console.info(`Attach ${name} event to $1`, elem);
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
		document.querySelectorAll(elem).forEach(removeEvent);
		return;
	}

	Array.from(elem.childNodes)
		.filter((node): node is Element => node.nodeType === Node.ELEMENT_NODE)
		.forEach((child) => removeEvent(child as ElementWithAbortController));

	detachEvent(elem);
};

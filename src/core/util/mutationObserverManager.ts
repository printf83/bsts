import { bstsConsole as console } from "./console.js";

const mutationObserverMap = new WeakMap<Element, MutationObserver>();

const forEachElement = (elem: string | Element, fn: (element: Element) => void) => {
	if (typeof elem === "string") {
		document.querySelectorAll(elem).forEach(fn);
		return;
	}

	fn(elem);
};

/**
 * Class that extends HTMLElement to allow attaching a MutationObserver.
 * The MutationObserver property can be used to store a reference to a
 * MutationObserver instance for observing mutations on the element.
 */
export class ElementWithMutationObserver extends HTMLElement {
	constructor(public MutationObserver?: MutationObserver) {
		super();
	}
}

/**
 * Disconnects the MutationObserver instance from the given element,
 * if one exists. Handles string selector and Element types.
 */
export const disconnectMutationObserver = (elem: string | Element | ElementWithMutationObserver) => {
	forEachElement(elem, (element) => {
		const observer = mutationObserverMap.get(element);
		if (!observer) return;

		console.info(`Disconnect MutationObserver from $1`, element);
		observer.disconnect();
		mutationObserverMap.delete(element);
	});
};

/**
 * Attaches a MutationObserver to the given element and calls the provided
 * callback when mutations occur. Handles string selector and Element types.
 */
export const observeMutationObserver = (
	elem: string | Element | ElementWithMutationObserver,
	callback: (mutation: MutationRecord[], observer: MutationObserver, arg?: unknown[]) => void,
	options?: MutationObserverInit,
	arg?: unknown[]
) => {
	forEachElement(elem, (element) => {
		let observer = mutationObserverMap.get(element);
		if (!observer) {
			console.info(`Setup MutationObserver for $1`, element);
			observer = new MutationObserver((mutation, observerInstance) => {
				callback(mutation, observerInstance, arg);
			});
			mutationObserverMap.set(element, observer);
		}

		observer.observe(element, options);
	});
};

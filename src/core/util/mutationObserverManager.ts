import { bstsConsole as console } from "./console.js";

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
 * if one exists. Handles string selector, HTMLElement, and
 * ElementWithMutationObserver types. For selector strings, disconnects
 * observers on all matching elements. Nulls out the MutationObserver
 * property on the element(s) after disconnecting.
 */
export const disconnectMutationObserver = (elem: string | Element | ElementWithMutationObserver) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				disconnectMutationObserver(i);
			});
		}
	} else {
		if ("MutationObserver" in elem) {
			const ob = (elem as ElementWithMutationObserver).MutationObserver;
			if (ob) {
				console.info(`Disconnect MutationObserver from $1`, elem);
				ob.disconnect();

				elem.MutationObserver = undefined;
				delete elem.MutationObserver;
			}
		}
	}
};

/**
 * Attaches a MutationObserver to the given element and calls the provided
 * callback when mutations occur. Handles string selector, HTMLElement, and
 * ElementWithMutationObserver types. For selector strings, attaches observers
 * to all matching elements.
 */
export const observeMutationObserver = (
	elem: string | Element | ElementWithMutationObserver,
	callback: (mutation: MutationRecord[], observer: MutationObserver, arg?: any[]) => void,
	options?: MutationObserverInit,
	arg?: any[]
) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				observeMutationObserver(i, callback, options, arg);
			});
		}
	} else {
		if (!("MutationObserver" in elem)) {
			console.info(`Setup MutationObserver for $1`, elem);
			(elem as ElementWithMutationObserver).MutationObserver = new MutationObserver((mutation, observer) => {
				callback(mutation, observer, arg);
			});
		}

		const ob = (elem as ElementWithMutationObserver).MutationObserver;
		if (ob) {
			ob.observe(elem, options);
		}
	}
};

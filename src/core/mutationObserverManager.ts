import { bstsConsole as console } from "./console.js";

export class ElementWithMutationObserver extends HTMLElement {
	constructor(public MutationObserver?: MutationObserver) {
		super();
	}
}

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

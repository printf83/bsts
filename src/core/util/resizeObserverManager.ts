import { bstsConsole as console } from "./console.js";
import { UUID } from "./uuid.js";

/**
 * Extends HTMLElement to add a ResizeObserver property.
 * Allows associating a ResizeObserver instance with an element.
 */
export class ElementWithResizeObserver extends HTMLElement {
	constructor(public ResizeObserver?: ResizeObserver) {
		super();
	}
}

/**
 * Disconnects the ResizeObserver instance associated with the given element,
 * if one exists. For string selectors, disconnects the ResizeObserver from all
 * matching elements.
 */
export const disconnectResizeObserver = (elem: string | Element | ElementWithResizeObserver) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				disconnectResizeObserver(i);
			});
		}
	} else {
		if ("ResizeObserver" in elem) {
			const ob = (elem as ElementWithResizeObserver).ResizeObserver;
			if (ob) {
				console.info(`Disconnect ResizeObserver from $1`, elem);
				ob.disconnect();

				elem.ResizeObserver = undefined;
				delete elem.ResizeObserver;
			}
		}
	}
};

/**
 * Disconnects the ResizeObserver instance associated with the given element,
 * if one exists. For string selectors, disconnects the ResizeObserver from all
 * matching elements.
 */
export const unobserveResizeObserver = (elem: string | Element | ElementWithResizeObserver) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				unobserveResizeObserver(i);
			});
		}
	} else {
		if ("ResizeObserver" in elem) {
			const ob = (elem as ElementWithResizeObserver).ResizeObserver;
			if (ob) {
				console.info(`Unobserve resize from $1`, elem);
				ob.unobserve(elem);
			}
		}
	}
};

/**
 * Observes the given element with a ResizeObserver, invoking the callback
 * function when the element's size changes.
 *
 * For string selectors, observes all matching elements.
 *
 * @param elem The element or selector to observe
 * @param callback The callback function to invoke on size changes
 * @param options Optional ResizeObserver options
 * @param arg Optional extra arguments to pass to the callback
 */
export const observeResizeObserver = (
	elem: string | Element | ElementWithResizeObserver,
	callback: (entry: ResizeObserverEntry[], observer: ResizeObserver, arg?: any[]) => void,
	options?: ResizeObserverOptions,
	arg?: any[]
) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				observeResizeObserver(i, callback, options, arg);
			});
		}
	} else {
		if (!("ResizeObserver" in elem)) {
			console.info(`Setup ResizeObserver for $1`, elem);
			(elem as ElementWithResizeObserver).ResizeObserver = new ResizeObserver((entry, observer) => {
				if (entry && entry.length > 0) {
					let resizeId = UUID();
					elem.setAttribute("data-resize-id", resizeId);

					setTimeout(
						(
							elem: Element | ElementWithResizeObserver,
							resizeId: string,
							entry: ResizeObserverEntry[],
							observe: ResizeObserver,
							arg: any[]
						) => {
							if (elem.getAttribute("data-resize-id") === resizeId) {
								elem.removeAttribute("data-resize-id");
								callback(entry, observe, arg);
							}
						},
						300,
						elem,
						resizeId,
						entry,
						observer,
						arg
					);
				}
			});
		}

		const ob = (elem as ElementWithResizeObserver).ResizeObserver;
		if (ob) {
			ob.observe(elem, options);
		}
	}
};

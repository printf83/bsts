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

const resizeObserverMap = new WeakMap<Element, ResizeObserver>();
const resizeObserverTimeoutMap = new WeakMap<Element, number>();

const clearResizeObserverTimeout = (elem: Element) => {
	const timeoutId = resizeObserverTimeoutMap.get(elem);
	if (timeoutId !== undefined) {
		window.clearTimeout(timeoutId);
		resizeObserverTimeoutMap.delete(elem);
	}
};

const forEachElement = (elem: string | Element, fn: (element: Element) => void) => {
	if (typeof elem === "string") {
		document.querySelectorAll(elem).forEach(fn);
		return;
	}

	fn(elem);
};

const createResizeObserver = (
	target: Element,
	callback: (entry: ResizeObserverEntry[], observer: ResizeObserver, arg?: unknown[]) => void,
	arg?: unknown[]
) =>
	new ResizeObserver((entry, observerInstance) => {
		clearResizeObserverTimeout(target);
		const resizeId = UUID();
		target.setAttribute("data-resize-id", resizeId);

		const timeoutId = window.setTimeout(() => {
			if (target.getAttribute("data-resize-id") === resizeId) {
				target.removeAttribute("data-resize-id");
				callback(entry, observerInstance, arg);
			}
		}, 300);

		resizeObserverTimeoutMap.set(target, timeoutId);
	});

/**
 * Disconnects the ResizeObserver instance associated with the given element,
 * if one exists. For string selectors, disconnects the ResizeObserver from all
 * matching elements.
 */
export const disconnectResizeObserver = (elem: string | Element | ElementWithResizeObserver) => {
	forEachElement(elem, (target) => {
		const observer = resizeObserverMap.get(target);
		if (!observer) return;

		console.info(`Disconnect ResizeObserver from $1`, target);
		observer.disconnect();
		resizeObserverMap.delete(target);
		clearResizeObserverTimeout(target);
	});
};

/**
 * Stops observing the given element without disconnecting the underlying
 * ResizeObserver instance from other elements.
 */
export const unobserveResizeObserver = (elem: string | Element | ElementWithResizeObserver) => {
	forEachElement(elem, (target) => {
		const observer = resizeObserverMap.get(target);
		if (!observer) return;

		console.info(`Unobserve resize from $1`, target);
		observer.unobserve(target);
		clearResizeObserverTimeout(target);
	});
};

/**
 * Observes the given element with a ResizeObserver, invoking the callback
 * function when the element's size changes.
 *
 * For string selectors, observes all matching elements.
 */
export const observeResizeObserver = (
	elem: string | Element | ElementWithResizeObserver,
	callback: (entry: ResizeObserverEntry[], observer: ResizeObserver, arg?: unknown[]) => void,
	options?: ResizeObserverOptions,
	arg?: unknown[]
) => {
	forEachElement(elem, (target) => {
		let observer = resizeObserverMap.get(target);
		if (!observer) {
			console.info(`Setup ResizeObserver for $1`, target);
			observer = createResizeObserver(target, callback, arg);
			resizeObserverMap.set(target, observer);
		}

		observer.observe(target, options);
	});
};

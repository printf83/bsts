import { bstsConsole as console } from "./console.js";
import { UUID } from "./uuid.js";

export class ElementWithResizeObserver extends HTMLElement {
	constructor(public ResizeObserver?: ResizeObserver) {
		super();
	}
}

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

export const observeResizeObserver = (
	elem: string | Element | ElementWithResizeObserver,
	callback: ResizeObserverCallback,
	options?: ResizeObserverOptions
) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				observeResizeObserver(i, callback);
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
							observe: ResizeObserver
						) => {
							if (elem.getAttribute("data-resize-id") === resizeId) {
								elem.removeAttribute("data-resize-id");
								callback(entry, observe);
							}
						},
						300,
						elem,
						resizeId,
						entry,
						observer
					);
				}
			});
		}

		const ob = (elem as ElementWithResizeObserver).ResizeObserver;
		if (ob) {
			// console.info(`Observer resize for $1`, elem);
			ob.observe(elem, options);
		}
	}
};

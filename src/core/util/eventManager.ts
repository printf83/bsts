import { bstsConsole as console } from "./console.js";

export class ElementWithAbortController extends HTMLElement {
	constructor(public AbortController?: AbortController) {
		super();
	}
}

const detachEvent = (elem: Element | ElementWithAbortController) => {
	if ("AbortController" in elem) {
		const AbortController = (elem as ElementWithAbortController).AbortController;
		if (AbortController) {
			console.info(`Deattach all event from $1`, elem);
			AbortController.abort();

			elem.AbortController = undefined;
			delete elem.AbortController;
		}
	}
};

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
import { bstsConsole as console } from "../core/console.js";

export class ElementWithAbortController extends HTMLElement {
	constructor(public abortController?: AbortController) {
		super();
	}
}

const detachEvent = (elem: Element | ElementWithAbortController) => {
	if ("abortController" in elem) {
		console.log(`Deattach all event`, elem);
		(elem as ElementWithAbortController).abortController?.abort();
		delete elem.abortController;
	}
};

export const addEvent = (name: string, elem: string | Element | ElementWithAbortController, fn: EventListener) => {
	if (typeof elem === "string") {
		let e = document.querySelectorAll(elem);
		if (e) {
			e.forEach((i) => {
				i.classList.add("bs-destroy-event");
				addEvent(name, i, fn);
			});
		}
	} else {
		//create detachEventListener db
		if ("abortController" in elem) {
			if (typeof elem.abortController === "undefined") {
				elem.abortController = new AbortController();
				elem.classList.add("bs-destroy-event");
			}

			//add event to element
			//using signal to remove listerner
			elem.addEventListener(name, fn, {
				signal: elem.abortController.signal,
				once: name === "build" || name === "destroy" ? true : undefined,
			});
		} else {
			(elem as ElementWithAbortController).abortController = new AbortController();
			elem.classList.add("bs-destroy-event");
			//add event to element
			//using signal to remove listerner

			elem.addEventListener(name, fn, {
				signal: (elem as ElementWithAbortController).abortController!.signal,
				once: name === "build" || name === "destroy" ? true : undefined,
			});
		}

		console.log(`Attach event ${name}`, elem);
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
			if ("abortController" in elem) {
				detachEvent(elem);
			}
		}
	}
};

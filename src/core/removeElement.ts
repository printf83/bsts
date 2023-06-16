import { removeEvent, ElementWithAbortController } from "./eventManager.js";

export const removeElement = (elem: Element) => {
	dispatchDestroyEvent(elem);
	removeAllElement(elem);
};

const removeAllElement = (elem: Element) => {
	// while (elem.firstChild) {
	// 	removeAllElement(elem.firstChild as Element);
	// }

	// elem.remove();
	elem.remove();
};

const dispatchDestroyEvent = (elem: Element) => {
	if (elem.nodeType !== 3) {
		const listOfElem = elem.querySelectorAll(".bs-destroy-event");
		if (listOfElem && listOfElem.length > 0) {
			listOfElem.forEach((i) => {
				i.dispatchEvent(new CustomEvent("destroy"));
				removeEvent(i as ElementWithAbortController);
			});
		}

		if (elem.classList.contains("bs-destroy-event")) {
			elem.dispatchEvent(new CustomEvent("destroy"));
			removeEvent(elem as ElementWithAbortController);
		}
	}
};

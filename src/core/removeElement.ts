import { removeEvent, ElementWithAbortController } from "./eventManager.js";

export const removeElement = (elem: Element) => {
	dispatchDestroyEvent(elem);
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

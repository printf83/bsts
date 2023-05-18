import { removeEvent, ElementWithAbortController } from "./eventManager.js";

export const removeChildElement = (elem: Element) => {
	while (elem.firstChild) {
		removeEvent(elem.firstChild as ElementWithAbortController);
		elem.firstChild.remove();
	}
};

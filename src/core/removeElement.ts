import { removeEvent, ElementWithAbortController } from "./eventManager.js";

export const removeElement = (elem: Element) => {
	elem.dispatchEvent(new CustomEvent("destroy"));
	removeEvent(elem as ElementWithAbortController);
	elem.remove();
};

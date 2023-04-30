import { deleteEvent, ElementWithEventDB } from "./eventManager.js";

export const removeChildElement = (elem: Element) => {
	while (elem.firstChild) {
		deleteEvent(elem.firstChild as ElementWithEventDB);
		elem.firstChild.remove();
	}
};

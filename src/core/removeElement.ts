import { deleteEvent, ElementWithEventDB } from "./eventManager.js";

export const removeElement = (elem: Element) => {
	deleteEvent(elem as ElementWithEventDB);
	elem.remove();
};

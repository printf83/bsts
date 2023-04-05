import { deleteEvent, HTMLElementWithEventDB } from "./eventManager.js";

export const removeElement = (elem: HTMLElement | HTMLBodyElement) => {
	deleteEvent(elem as HTMLElementWithEventDB);
	elem.remove();
};

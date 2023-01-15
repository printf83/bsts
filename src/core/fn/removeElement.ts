import { deleteEvent, HTMLElementWithEventDB } from "./eventManager.js";

export const removeElement = (elem: HTMLElement) => {
	deleteEvent(elem as HTMLElementWithEventDB);
	elem.remove();
};

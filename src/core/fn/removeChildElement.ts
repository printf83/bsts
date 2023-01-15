import { deleteEvent, HTMLElementWithEventDB } from "./eventManager.js";

export const removeChildElement = (elem: HTMLElement) => {
	while (elem.firstChild) {
		deleteEvent(elem.firstChild as HTMLElementWithEventDB);
		elem.firstChild.remove();
	}
};

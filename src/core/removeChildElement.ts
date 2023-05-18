import { removeElement } from "./removeElement.js";

export const removeChildElement = (elem: Element) => {
	while (elem.firstChild) {
		removeElement(elem.firstChild as Element);
	}
};

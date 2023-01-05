import { detachEventListener } from "./detachEventListener.js";

export const removeElement = (elem: HTMLElement) => {
	detachEventListener(elem);
	elem.remove();
};

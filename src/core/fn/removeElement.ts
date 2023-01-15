import { detachEventListener } from "./setupEventListenerRemover.js";

export const removeElement = (elem: HTMLElement) => {
	detachEventListener(elem);
	elem.remove();
};

import { detachEventListener } from "./setupEventListenerRemover.js";

export const removeChildElement = (elem: HTMLElement) => {
	while (elem.firstChild) {
		detachEventListener(elem.firstChild as HTMLElement);
		elem.firstChild.remove();
	}
};

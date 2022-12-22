import { detachEventListener } from './detachEventListener.js';

export const removeChildElement = (elem:HTMLElement) => {
	while (elem.firstChild) {
		detachEventListener(elem.firstChild);
		elem.firstChild.remove();
	}
}
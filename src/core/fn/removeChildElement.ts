import { detachEventListener } from './detachEventListener';

export const removeChildElement = (elem:HTMLElement) => {
	while (elem.firstChild) {
		detachEventListener(elem.firstChild);
		elem.firstChild.remove();
	}
}
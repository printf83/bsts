import { detachEventListener } from "./detachEventListener";

export const removeElement = (elem:HTMLElement) => {
	detachEventListener(elem);
	elem.remove();
}
import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";

export const init = (elem: string | Element, options?: Partial<bootstrap.Offcanvas.Options>) => {
	return getOrCreateInstance(elem, options);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Offcanvas.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<bootstrap.Offcanvas.Options>) => {
	addEvent("destroy", elem, (i) => {
		const target = i.target as Element;

		const m = getInstance(target);
		if (m) {
			console.info(`Dispose bootstrap offcanvas from $1`, target);
			m.dispose();
		}
	});

	console.info(`Initialize bootstrap offcanvas to $1`, elem);
	return window.bootstrap.Offcanvas.getOrCreateInstance(elem, options);
};
export const hide = (elem: string | Element) => {
	getOrCreateInstance(elem)?.hide();
};
export const show = (elem: string | Element, relatedTarget?: HTMLElement) => {
	getOrCreateInstance(elem)?.show(relatedTarget);
};
export const toggle = (elem: string | Element, relatedTarget?: HTMLElement) => {
	getOrCreateInstance(elem)?.toggle(relatedTarget);
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

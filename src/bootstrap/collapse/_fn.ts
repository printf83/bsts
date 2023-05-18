import { addEvent } from "../../core/eventManager.js";

export const init = (elem: string | Element, options?: Partial<bootstrap.Collapse.Options>) => {
	return getOrCreateInstance(elem, options);
};

export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Collapse.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<bootstrap.Collapse.Options>) => {
	addEvent("destroy", elem, (i) => {
		console.log("Dispose collapse", i);
		dispose(i.target as Element);
	});

	return window.bootstrap.Collapse.getOrCreateInstance(elem, options);
};
export const hide = (elem: string | Element) => {
	getOrCreateInstance(elem)?.hide();
};
export const show = (elem: string | Element) => {
	getOrCreateInstance(elem)?.show();
};
export const toggle = (elem: string | Element) => {
	getOrCreateInstance(elem)?.toggle();
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

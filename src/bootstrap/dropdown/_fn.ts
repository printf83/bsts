import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";

export const init = (elem: string | Element, options?: Partial<bootstrap.Dropdown.Options>) => {
	return getOrCreateInstance(elem, options);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Dropdown.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<bootstrap.Dropdown.Options>) => {
	addEvent("destroy", elem, (i) => {
		const target = i.target as Element;
		console.info(`Dispose bootstrap dropdown from $1`, target);

		const m = getInstance(target);
		if (m) {
			m.hide();
			m.dispose();
		}
	});

	console.info(`Initialize bootstrap dropdown to $1`, elem);
	return window.bootstrap.Dropdown.getOrCreateInstance(elem, options);
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
export const update = (elem: string | Element) => {
	getOrCreateInstance(elem)?.update();
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

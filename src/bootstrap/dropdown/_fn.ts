import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Dropdown as BSDropdown } from "bootstrap";

export const init = (elem: string | Element, options?: Partial<BSDropdown.Options>) => {
	return getOrCreateInstance(elem, options);
};
export const getInstance = (elem: string | Element) => {
	return BSDropdown.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<BSDropdown.Options>) => {
	addEvent("destroy", elem, (i) => {
		const target = i.target as Element;

		const m = getInstance(target);
		if (m) {
			console.info(`Dispose bootstrap dropdown from $1`, target);
			m.hide();
			m.dispose();
		}
	});

	console.info(`Initialize bootstrap dropdown to $1`, elem);
	return BSDropdown.getOrCreateInstance(elem, options);
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

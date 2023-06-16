import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";

export const init = (elem: string | Element) => {
	return getOrCreateInstance(elem);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Tab.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element) => {
	addEvent("destroy", elem, (i) => {
		const target = i.target as Element;
		console.info(`Dispose bootstrap tab from $1`, target);

		const m = getInstance(target);
		if (m) {
			m.dispose();
		}
	});

	console.info(`Initialize bootstrap tab to $1`, elem);
	return window.bootstrap.Tab.getOrCreateInstance(elem);
};
export const show = (elem: string | Element) => {
	getOrCreateInstance(elem)?.show();
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

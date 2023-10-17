import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Alert as BSAlert } from "bootstrap";

export const init = (elem: string | Element) => {
	return getOrCreateInstance(elem);
};
export const getInstance = (elem: string | Element) => {
	return BSAlert.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element) => {
	addEvent("destroy", elem, (i) => {
		const target = i.target as Element;

		const m = getInstance(target);
		if (m) {
			console.info(`Dispose bootstrap alert from $1`, target);
			m.dispose();
		}
	});

	console.info(`Initialize bootstrap alert to $1`, elem);
	return BSAlert.getOrCreateInstance(elem);
};
export const close = (elem: string | Element) => {
	return getOrCreateInstance(elem)?.close();
};
export const dispose = (elem: string | Element) => {
	return getInstance(elem)?.dispose();
};

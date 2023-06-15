import { addEvent } from "../../core/eventManager.js";

export const init = (elem: string | Element) => {
	return getOrCreateInstance(elem);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Alert.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element) => {
	addEvent("destroy", elem, (i) => {
		// console.log("Dispose alert", i);

		const m = getInstance(i.target as Element);
		if (m) {
			m.dispose();
		}
	});

	// console.log("Attach alert", elem);
	return window.bootstrap.Alert.getOrCreateInstance(elem);
};
export const close = (elem: string | Element) => {
	return getOrCreateInstance(elem)?.close();
};
export const dispose = (elem: string | Element) => {
	return getInstance(elem)?.dispose();
};

export const init = (elem: string | Element) => {
	return new window.bootstrap.Alert(elem);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Alert.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element) => {
	return window.bootstrap.Alert.getOrCreateInstance(elem);
};
export const close = (elem: string | Element) => {
	return getOrCreateInstance(elem)?.close();
};
export const dispose = (elem: string | Element) => {
	return getInstance(elem)?.dispose();
};

export const init = (elem: string | Element) => {
	return new window.bootstrap.Tab(elem);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Tab.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element) => {
	return window.bootstrap.Tab.getOrCreateInstance(elem);
};
export const show = (elem: string | Element) => {
	getOrCreateInstance(elem)?.show();
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

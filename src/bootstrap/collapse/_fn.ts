export const init = (elem: string | Element, options?: Partial<bootstrap.Collapse.Options>) => {
	return new window.bootstrap.Collapse(elem, options);
};

export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Collapse.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<bootstrap.Collapse.Options>) => {
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

export const init = (elem: string | Element, options?: Partial<bootstrap.Dropdown.Options>) => {
	return new window.bootstrap.Dropdown(elem, options);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Dropdown.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element) => {
	return window.bootstrap.Dropdown.getOrCreateInstance(elem);
};
export const hide = (elem: string | Element) => {
	getInstance(elem)?.hide();
};
export const show = (elem: string | Element) => {
	getInstance(elem)?.show();
};
export const toggle = (elem: string | Element) => {
	getInstance(elem)?.toggle();
};
export const update = (elem: string | Element) => {
	getInstance(elem)?.update();
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

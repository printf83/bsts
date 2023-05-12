export const init = (elem: string | Element, options?: Partial<bootstrap.Offcanvas.Options>) => {
	return new window.bootstrap.Offcanvas(elem, options);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Offcanvas.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<bootstrap.Offcanvas.Options>) => {
	return window.bootstrap.Offcanvas.getOrCreateInstance(elem, options);
};
export const hide = (elem: string | Element) => {
	getOrCreateInstance(elem)?.hide();
};
export const show = (elem: string | Element, relatedTarget?: HTMLElement) => {
	getOrCreateInstance(elem)?.show(relatedTarget);
};
export const toggle = (elem: string | Element, relatedTarget?: HTMLElement) => {
	getOrCreateInstance(elem)?.toggle(relatedTarget);
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

export const init = (elem: Element | string, options?: Partial<bootstrap.Carousel.Options>) => {
	return new window.bootstrap.Carousel(elem, options);
};
export const getInstance = (elem: Element | string) => {
	return window.bootstrap.Carousel.getInstance(elem);
};
export const getOrCreateInstance = (elem: Element | string) => {
	return window.bootstrap.Carousel.getOrCreateInstance(elem);
};
export const cycle = (elem: Element | string) => {
	getOrCreateInstance(elem)?.cycle();
};
export const next = (elem: Element | string) => {
	getOrCreateInstance(elem)?.next();
};
export const nextWhenVisible = (elem: Element | string) => {
	getOrCreateInstance(elem)?.nextWhenVisible();
};
export const pause = (elem: Element | string) => {
	getOrCreateInstance(elem)?.pause();
};
export const prev = (elem: Element | string) => {
	getOrCreateInstance(elem)?.prev();
};
export const to = (elem: Element | string, index: number) => {
	getOrCreateInstance(elem)?.to(index);
};
export const dispose = (elem: Element | string) => {
	getInstance(elem)?.dispose();
};

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
	getInstance(elem)?.cycle();
};
export const dispose = (elem: Element | string) => {
	getInstance(elem)?.dispose();
};
export const next = (elem: Element | string) => {
	getInstance(elem)?.next();
};
export const nextWhenVisible = (elem: Element | string) => {
	getInstance(elem)?.nextWhenVisible();
};
export const pause = (elem: Element | string) => {
	getInstance(elem)?.pause();
};
export const prev = (elem: Element | string) => {
	getInstance(elem)?.prev();
};
export const to = (elem: Element | string, index: number) => {
	getInstance(elem)?.to(index);
};

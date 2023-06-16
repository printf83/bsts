import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";

export const init = (elem: Element | string, options?: Partial<bootstrap.Carousel.Options>) => {
	return getOrCreateInstance(elem, options);
};
export const getInstance = (elem: Element | string) => {
	return window.bootstrap.Carousel.getInstance(elem);
};
export const getOrCreateInstance = (elem: Element | string, options?: Partial<bootstrap.Carousel.Options>) => {
	addEvent("destroy", elem, (i) => {
		const target = i.target as Element;
		console.info(`Dispose bootstrap carousel from $1`, target);

		const m = getInstance(target);
		if (m) {
			m.dispose();
		}
	});

	console.info(`Initialize bootstrap carousel to $1`, elem);
	return window.bootstrap.Carousel.getOrCreateInstance(elem, options);
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
export const pause = (elem: Element | string, pauseType?: boolean | "hover") => {
	getOrCreateInstance(elem)?.pause(pauseType);
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

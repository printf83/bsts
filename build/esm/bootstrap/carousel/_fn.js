import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Carousel as BSCarousel } from "bootstrap";
export const init = (elem, options) => {
    return getOrCreateInstance(elem, options);
};
export const getInstance = (elem) => {
    return BSCarousel.getInstance(elem);
};
export const getOrCreateInstance = (elem, options) => {
    addEvent("destroy", elem, (i) => {
        const target = i.target;
        const m = getInstance(target);
        if (m) {
            console.info(`Dispose bootstrap carousel from $1`, target);
            m.dispose();
        }
    });
    console.info(`Initialize bootstrap carousel to $1`, elem);
    return BSCarousel.getOrCreateInstance(elem, options);
};
export const cycle = (elem) => {
    getOrCreateInstance(elem)?.cycle();
};
export const next = (elem) => {
    getOrCreateInstance(elem)?.next();
};
export const nextWhenVisible = (elem) => {
    getOrCreateInstance(elem)?.nextWhenVisible();
};
export const pause = (elem, pauseType) => {
    getOrCreateInstance(elem)?.pause(pauseType);
};
export const prev = (elem) => {
    getOrCreateInstance(elem)?.prev();
};
export const to = (elem, index) => {
    getOrCreateInstance(elem)?.to(index);
};
export const dispose = (elem) => {
    getInstance(elem)?.dispose();
};

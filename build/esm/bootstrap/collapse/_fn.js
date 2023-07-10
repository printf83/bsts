import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Collapse as BSCollapse } from "bootstrap";
export const init = (elem, options) => {
    return getOrCreateInstance(elem, options);
};
export const getInstance = (elem) => {
    return BSCollapse.getInstance(elem);
};
export const getOrCreateInstance = (elem, options) => {
    addEvent("destroy", elem, (i) => {
        const target = i.target;
        const m = getInstance(target);
        if (m) {
            console.info(`Dispose bootstrap collapse from $1`, target);
            m.dispose();
        }
    });
    console.info(`Initialize bootstrap collapse to $1`, elem);
    return BSCollapse.getOrCreateInstance(elem, options);
};
export const hide = (elem) => {
    getOrCreateInstance(elem)?.hide();
};
export const show = (elem) => {
    getOrCreateInstance(elem)?.show();
};
export const toggle = (elem) => {
    getOrCreateInstance(elem)?.toggle();
};
export const dispose = (elem) => {
    getInstance(elem)?.dispose();
};

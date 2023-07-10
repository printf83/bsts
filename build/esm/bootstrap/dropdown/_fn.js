import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Dropdown as BSDropdown } from "bootstrap";
export const init = (elem, options) => {
    return getOrCreateInstance(elem, options);
};
export const getInstance = (elem) => {
    return BSDropdown.getInstance(elem);
};
export const getOrCreateInstance = (elem, options) => {
    addEvent("destroy", elem, (i) => {
        const target = i.target;
        const m = getInstance(target);
        if (m) {
            console.info(`Dispose bootstrap dropdown from $1`, target);
            m.hide();
            m.dispose();
        }
    });
    console.info(`Initialize bootstrap dropdown to $1`, elem);
    return BSDropdown.getOrCreateInstance(elem, options);
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
export const update = (elem) => {
    getOrCreateInstance(elem)?.update();
};
export const dispose = (elem) => {
    getInstance(elem)?.dispose();
};

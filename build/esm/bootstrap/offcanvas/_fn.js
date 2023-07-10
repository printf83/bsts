import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Offcanvas as BSOffcanvas } from "bootstrap";
export const init = (elem, options) => {
    return getOrCreateInstance(elem, options);
};
export const getInstance = (elem) => {
    return BSOffcanvas.getInstance(elem);
};
export const getOrCreateInstance = (elem, options) => {
    addEvent("destroy", elem, (i) => {
        const target = i.target;
        const m = getInstance(target);
        if (m) {
            console.info(`Dispose bootstrap offcanvas from $1`, target);
            m.dispose();
        }
    });
    console.info(`Initialize bootstrap offcanvas to $1`, elem);
    return BSOffcanvas.getOrCreateInstance(elem, options);
};
export const hide = (elem) => {
    getOrCreateInstance(elem)?.hide();
};
export const show = (elem, relatedTarget) => {
    getOrCreateInstance(elem)?.show(relatedTarget);
};
export const toggle = (elem, relatedTarget) => {
    getOrCreateInstance(elem)?.toggle(relatedTarget);
};
export const dispose = (elem) => {
    getInstance(elem)?.dispose();
};

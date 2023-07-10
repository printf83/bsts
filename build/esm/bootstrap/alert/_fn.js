import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Alert as BSAlert } from "bootstrap";
export const init = (elem) => {
    return getOrCreateInstance(elem);
};
export const getInstance = (elem) => {
    return BSAlert.getInstance(elem);
};
export const getOrCreateInstance = (elem) => {
    addEvent("destroy", elem, (i) => {
        const target = i.target;
        const m = getInstance(target);
        if (m) {
            console.info(`Dispose bootstrap alert from $1`, target);
            m.dispose();
        }
    });
    console.info(`Initialize bootstrap alert to $1`, elem);
    return BSAlert.getOrCreateInstance(elem);
};
export const close = (elem) => {
    return getOrCreateInstance(elem)?.close();
};
export const dispose = (elem) => {
    return getInstance(elem)?.dispose();
};

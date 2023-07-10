import { addEvent } from "../../core/eventManager.js";
import { bstsConsole as console } from "../../core/console.js";
import { Tab as BSTab } from "bootstrap";
export const init = (elem) => {
    return getOrCreateInstance(elem);
};
export const getInstance = (elem) => {
    return BSTab.getInstance(elem);
};
export const getOrCreateInstance = (elem) => {
    addEvent("destroy", elem, (i) => {
        const target = i.target;
        const m = getInstance(target);
        if (m) {
            console.info(`Dispose bootstrap tab from $1`, target);
            m.dispose();
        }
    });
    console.info(`Initialize bootstrap tab to $1`, elem);
    return BSTab.getOrCreateInstance(elem);
};
export const show = (elem) => {
    getOrCreateInstance(elem)?.show();
};
export const dispose = (elem) => {
    getInstance(elem)?.dispose();
};

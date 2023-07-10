import { bstsConsole as console } from "./console.js";
export class ElementWithMutationObserver extends HTMLElement {
    MutationObserver;
    constructor(MutationObserver) {
        super();
        this.MutationObserver = MutationObserver;
    }
}
export const disconnectMutationObserver = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                disconnectMutationObserver(i);
            });
        }
    }
    else {
        if ("MutationObserver" in elem) {
            const ob = elem.MutationObserver;
            if (ob) {
                console.info(`Disconnect MutationObserver from $1`, elem);
                ob.disconnect();
                elem.MutationObserver = undefined;
                delete elem.MutationObserver;
            }
        }
    }
};
export const observeMutationObserver = (elem, callback, options, arg) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                observeMutationObserver(i, callback, options, arg);
            });
        }
    }
    else {
        if (!("MutationObserver" in elem)) {
            console.info(`Setup MutationObserver for $1`, elem);
            elem.MutationObserver = new MutationObserver((mutation, observer) => {
                callback(mutation, observer, arg);
            });
        }
        const ob = elem.MutationObserver;
        if (ob) {
            // console.info(`Observer mutation for $1`, elem);
            ob.observe(elem, options);
        }
    }
};

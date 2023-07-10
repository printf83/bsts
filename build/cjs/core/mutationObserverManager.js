"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeMutationObserver = exports.disconnectMutationObserver = exports.ElementWithMutationObserver = void 0;
const console_js_1 = require("./console.js");
class ElementWithMutationObserver extends HTMLElement {
    MutationObserver;
    constructor(MutationObserver) {
        super();
        this.MutationObserver = MutationObserver;
    }
}
exports.ElementWithMutationObserver = ElementWithMutationObserver;
const disconnectMutationObserver = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                (0, exports.disconnectMutationObserver)(i);
            });
        }
    }
    else {
        if ("MutationObserver" in elem) {
            const ob = elem.MutationObserver;
            if (ob) {
                console_js_1.bstsConsole.info(`Disconnect MutationObserver from $1`, elem);
                ob.disconnect();
                elem.MutationObserver = undefined;
                delete elem.MutationObserver;
            }
        }
    }
};
exports.disconnectMutationObserver = disconnectMutationObserver;
const observeMutationObserver = (elem, callback, options, arg) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                (0, exports.observeMutationObserver)(i, callback, options, arg);
            });
        }
    }
    else {
        if (!("MutationObserver" in elem)) {
            console_js_1.bstsConsole.info(`Setup MutationObserver for $1`, elem);
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
exports.observeMutationObserver = observeMutationObserver;

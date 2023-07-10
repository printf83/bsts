"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEvent = exports.addEvent = exports.ElementWithAbortController = void 0;
const console_js_1 = require("../core/console.js");
class ElementWithAbortController extends HTMLElement {
    AbortController;
    constructor(AbortController) {
        super();
        this.AbortController = AbortController;
    }
}
exports.ElementWithAbortController = ElementWithAbortController;
const detachEvent = (elem) => {
    if ("AbortController" in elem) {
        const AbortController = elem.AbortController;
        if (AbortController) {
            console_js_1.bstsConsole.info(`Deattach all event from $1`, elem);
            AbortController.abort();
            elem.AbortController = undefined;
            delete elem.AbortController;
        }
    }
};
const addEvent = (name, elem, fn) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                (0, exports.addEvent)(name, i, fn);
            });
        }
    }
    else {
        //create detachEventListener db
        if ("AbortController" in elem) {
            if (typeof elem.AbortController === "undefined") {
                elem.AbortController = new AbortController();
                elem.classList.add("bs-destroy-event");
            }
            //add event to element
            //using signal to remove listerner
            if (name === "build" || name === "destroy") {
                elem.addEventListener(name, fn, {
                    signal: elem.AbortController.signal,
                    once: true,
                });
            }
            else {
                elem.addEventListener(name, fn, {
                    signal: elem.AbortController.signal,
                });
            }
        }
        else {
            elem.AbortController = new AbortController();
            elem.classList.add("bs-destroy-event");
            //add event to element
            //using signal to remove listerner
            if (name === "build" || name === "destroy") {
                elem.addEventListener(name, fn, {
                    signal: elem.AbortController.signal,
                    once: true,
                });
            }
            else {
                elem.addEventListener(name, fn, {
                    signal: elem.AbortController.signal,
                });
            }
        }
        console_js_1.bstsConsole.info(`Attach ${name} event to $1`, elem);
    }
};
exports.addEvent = addEvent;
const removeEvent = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                (0, exports.removeEvent)(i);
            });
        }
    }
    else {
        if (elem) {
            let c = elem?.childNodes;
            //remove event from child
            if (c?.length > 0) {
                let d = Array.from(c).map((i) => i);
                d.forEach((e) => {
                    (0, exports.removeEvent)(e);
                });
            }
            //detach event from elem
            detachEvent(elem);
        }
    }
};
exports.removeEvent = removeEvent;

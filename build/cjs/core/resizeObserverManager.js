"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeResizeObserver = exports.unobserveResizeObserver = exports.disconnectResizeObserver = exports.ElementWithResizeObserver = void 0;
const console_js_1 = require("./console.js");
const uuid_js_1 = require("./uuid.js");
class ElementWithResizeObserver extends HTMLElement {
    ResizeObserver;
    constructor(ResizeObserver) {
        super();
        this.ResizeObserver = ResizeObserver;
    }
}
exports.ElementWithResizeObserver = ElementWithResizeObserver;
const disconnectResizeObserver = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                (0, exports.disconnectResizeObserver)(i);
            });
        }
    }
    else {
        if ("ResizeObserver" in elem) {
            const ob = elem.ResizeObserver;
            if (ob) {
                console_js_1.bstsConsole.info(`Disconnect ResizeObserver from $1`, elem);
                ob.disconnect();
                elem.ResizeObserver = undefined;
                delete elem.ResizeObserver;
            }
        }
    }
};
exports.disconnectResizeObserver = disconnectResizeObserver;
const unobserveResizeObserver = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                (0, exports.unobserveResizeObserver)(i);
            });
        }
    }
    else {
        if ("ResizeObserver" in elem) {
            const ob = elem.ResizeObserver;
            if (ob) {
                console_js_1.bstsConsole.info(`Unobserve resize from $1`, elem);
                ob.unobserve(elem);
            }
        }
    }
};
exports.unobserveResizeObserver = unobserveResizeObserver;
const observeResizeObserver = (elem, callback, options, arg) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                (0, exports.observeResizeObserver)(i, callback, options, arg);
            });
        }
    }
    else {
        if (!("ResizeObserver" in elem)) {
            console_js_1.bstsConsole.info(`Setup ResizeObserver for $1`, elem);
            elem.ResizeObserver = new ResizeObserver((entry, observer) => {
                if (entry && entry.length > 0) {
                    let resizeId = (0, uuid_js_1.UUID)();
                    elem.setAttribute("data-resize-id", resizeId);
                    setTimeout((elem, resizeId, entry, observe, arg) => {
                        if (elem.getAttribute("data-resize-id") === resizeId) {
                            elem.removeAttribute("data-resize-id");
                            callback(entry, observe, arg);
                        }
                    }, 300, elem, resizeId, entry, observer, arg);
                }
            });
        }
        const ob = elem.ResizeObserver;
        if (ob) {
            // console.info(`Observer resize for $1`, elem);
            ob.observe(elem, options);
        }
    }
};
exports.observeResizeObserver = observeResizeObserver;

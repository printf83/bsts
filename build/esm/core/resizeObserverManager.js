import { bstsConsole as console } from "./console.js";
import { UUID } from "./uuid.js";
export class ElementWithResizeObserver extends HTMLElement {
    ResizeObserver;
    constructor(ResizeObserver) {
        super();
        this.ResizeObserver = ResizeObserver;
    }
}
export const disconnectResizeObserver = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                disconnectResizeObserver(i);
            });
        }
    }
    else {
        if ("ResizeObserver" in elem) {
            const ob = elem.ResizeObserver;
            if (ob) {
                console.info(`Disconnect ResizeObserver from $1`, elem);
                ob.disconnect();
                elem.ResizeObserver = undefined;
                delete elem.ResizeObserver;
            }
        }
    }
};
export const unobserveResizeObserver = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                unobserveResizeObserver(i);
            });
        }
    }
    else {
        if ("ResizeObserver" in elem) {
            const ob = elem.ResizeObserver;
            if (ob) {
                console.info(`Unobserve resize from $1`, elem);
                ob.unobserve(elem);
            }
        }
    }
};
export const observeResizeObserver = (elem, callback, options, arg) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                observeResizeObserver(i, callback, options, arg);
            });
        }
    }
    else {
        if (!("ResizeObserver" in elem)) {
            console.info(`Setup ResizeObserver for $1`, elem);
            elem.ResizeObserver = new ResizeObserver((entry, observer) => {
                if (entry && entry.length > 0) {
                    let resizeId = UUID();
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

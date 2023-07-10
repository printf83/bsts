import { bstsConsole as console } from "../core/console.js";
export class ElementWithAbortController extends HTMLElement {
    AbortController;
    constructor(AbortController) {
        super();
        this.AbortController = AbortController;
    }
}
const detachEvent = (elem) => {
    if ("AbortController" in elem) {
        const AbortController = elem.AbortController;
        if (AbortController) {
            console.info(`Deattach all event from $1`, elem);
            AbortController.abort();
            elem.AbortController = undefined;
            delete elem.AbortController;
        }
    }
};
export const addEvent = (name, elem, fn) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                addEvent(name, i, fn);
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
        console.info(`Attach ${name} event to $1`, elem);
    }
};
export const removeEvent = (elem) => {
    if (typeof elem === "string") {
        let e = document.querySelectorAll(elem);
        if (e) {
            e.forEach((i) => {
                removeEvent(i);
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
                    removeEvent(e);
                });
            }
            //detach event from elem
            detachEvent(elem);
        }
    }
};

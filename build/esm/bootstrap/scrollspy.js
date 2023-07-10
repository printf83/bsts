import { genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";
import { addEvent } from "../core/eventManager.js";
import { bstsConsole as console } from "../core/console.js";
import { UUID } from "../core/uuid.js";
import { ScrollSpy as BSScrollSpy } from "bootstrap";
const convert = (attr) => {
    attr.initDelay ??= 1000;
    attr.id ??= UUID();
    const initDelay = attr.initDelay;
    attr = mergeObject({
        data: {
            // "bs-spy": "scroll", //manually init the scrollspy by bsts
            "bs-target": attr.target,
            "bs-smooth-scroll": attr.smooth ? "true" : undefined,
            "bs-root-margin": attr.rootMargin,
        },
        on: {
            build: (e) => {
                const target = e.target;
                const id = target.id;
                if (initDelay) {
                    setTimeout((id) => {
                        const target = document.getElementById(id);
                        if (target) {
                            scrollspy.init(target);
                        }
                    }, initDelay, id);
                }
                else {
                    scrollspy.init(document.getElementById(id));
                }
            },
        },
        tabindex: attr.tabindex || "0",
    }, attr);
    delete attr.initDelay;
    delete attr.target;
    delete attr.smooth;
    delete attr.rootMargin;
    return attr;
};
class scrollspy extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
    static init = (elem, options) => {
        return scrollspy.getOrCreateInstance(elem, options);
    };
    static getInstance = (elem) => {
        return BSScrollSpy.getInstance(elem);
    };
    static getOrCreateInstance = (elem, options) => {
        addEvent("destroy", elem, (i) => {
            const target = i.target;
            // disconnectResizeObserver(target);
            const m = scrollspy.getInstance(target);
            if (m) {
                console.info(`Dispose bootstrap scrollspy from $1`, target);
                m.dispose();
            }
        });
        // observeResizeObserver(elem, (r) => {
        // 	console.log("scrollspy.refresh", r);
        // 	scrollspy.refresh(elem);
        // });
        console.info(`Initialize bootstrap scrollspy to $1`, elem);
        return BSScrollSpy.getOrCreateInstance(elem, options);
    };
    static dispose = (elem) => {
        scrollspy.getInstance(elem)?.dispose();
    };
    static refresh = (elem) => {
        scrollspy.getInstance(elem)?.refresh();
    };
}
export { scrollspy };
export const Scrollspy = (AttrOrElem, Elem) => genTagClass(scrollspy, AttrOrElem, Elem);

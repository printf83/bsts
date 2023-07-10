"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrollspy = exports.scrollspy = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const div_js_1 = require("../html/div.js");
const eventManager_js_1 = require("../core/eventManager.js");
const console_js_1 = require("../core/console.js");
const uuid_js_1 = require("../core/uuid.js");
const bootstrap_1 = require("bootstrap");
const convert = (attr) => {
    attr.initDelay ??= 1000;
    attr.id ??= (0, uuid_js_1.UUID)();
    const initDelay = attr.initDelay;
    attr = (0, mergeObject_js_1.mergeObject)({
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
class scrollspy extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
    static init = (elem, options) => {
        return scrollspy.getOrCreateInstance(elem, options);
    };
    static getInstance = (elem) => {
        return bootstrap_1.ScrollSpy.getInstance(elem);
    };
    static getOrCreateInstance = (elem, options) => {
        (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
            const target = i.target;
            // disconnectResizeObserver(target);
            const m = scrollspy.getInstance(target);
            if (m) {
                console_js_1.bstsConsole.info(`Dispose bootstrap scrollspy from $1`, target);
                m.dispose();
            }
        });
        // observeResizeObserver(elem, (r) => {
        // 	console.log("scrollspy.refresh", r);
        // 	scrollspy.refresh(elem);
        // });
        console_js_1.bstsConsole.info(`Initialize bootstrap scrollspy to $1`, elem);
        return bootstrap_1.ScrollSpy.getOrCreateInstance(elem, options);
    };
    static dispose = (elem) => {
        scrollspy.getInstance(elem)?.dispose();
    };
    static refresh = (elem) => {
        scrollspy.getInstance(elem)?.refresh();
    };
}
exports.scrollspy = scrollspy;
const Scrollspy = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(scrollspy, AttrOrElem, Elem);
exports.Scrollspy = Scrollspy;

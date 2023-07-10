"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.button = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const tag_js_1 = require("../core/tag.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const eventManager_js_1 = require("../core/eventManager.js");
const console_js_1 = require("../core/console.js");
const bootstrap_1 = require("bootstrap");
const convert = (attr) => {
    if (attr.defColor !== false) {
        attr.color ??= "primary";
    }
    if (attr.href) {
        attr.role ??= "button";
    }
    attr.type ??= "button";
    //add btn class
    //weight,role,toggle
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            attr.color ? "btn" : undefined,
            attr.weight ? `btn-${attr.weight}` : undefined,
            attr.color && attr.outline !== true ? `btn-${attr.color}` : undefined,
            attr.color && attr.outline === true ? `btn-outline-${attr.color}` : undefined,
            attr.disabled && attr.href ? "disabled" : undefined,
            attr.active ? "active" : undefined,
            attr.stretched && attr.href ? "stretched-link" : undefined,
        ],
        role: attr.href && attr.role ? attr.role : undefined,
        data: {
            "bs-toggle": attr.toggle ? (attr.toggle === true ? "button" : attr.toggle) : undefined,
            "bs-target": attr.target,
            "bs-dismiss": attr.dismiss,
        },
        aria: {
            disabled: attr.disabled && attr.href ? "true" : undefined,
            pressed: attr.active ? "true" : undefined,
        },
        tabindex: attr.disabled && attr.href ? "-1" : undefined,
    }, attr);
    delete attr.color;
    delete attr.outline;
    delete attr.weight;
    delete attr.toggle;
    delete attr.target;
    delete attr.dismiss;
    delete attr.active;
    delete attr.defColor;
    if (attr.href) {
        if (attr.disabled) {
            delete attr.href;
        }
        delete attr.disabled;
    }
    return attr;
};
class button extends tag_js_1.tag {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConstArgTag)("elem", "button", "a", (i) => (i.href ? true : false), arg), convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
    static init = (elem) => {
        return button.getOrCreateInstance(elem);
    };
    static getInstance = (elem) => {
        return bootstrap_1.Button.getInstance(elem);
    };
    static getOrCreateInstance = (elem) => {
        (0, eventManager_js_1.addEvent)("destroy", elem, (i) => {
            const target = i.target;
            const m = button.getInstance(target);
            if (m) {
                console_js_1.bstsConsole.info(`Dispose bootstrap button from $1`, target);
                m.dispose();
            }
        });
        console_js_1.bstsConsole.info(`Initialize bootstrap button to $1`, elem);
        return bootstrap_1.Button.getOrCreateInstance(elem);
    };
    static toggle = (elem) => {
        button.getOrCreateInstance(elem)?.toggle();
    };
    static dispose = (elem) => {
        button.getInstance(elem)?.dispose();
    };
}
exports.button = button;
const Button = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(button, AttrOrElem, Elem);
exports.Button = Button;

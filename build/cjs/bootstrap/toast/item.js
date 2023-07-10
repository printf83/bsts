"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr.animation ??= true;
    attr = (0, mergeObject_js_1.mergeObject)({
        class: ["toast", attr.debug ? "debug" : undefined],
        role: attr.role,
        textBgColor: attr.color,
        border: attr.color ? false : undefined,
        aria: {
            live: attr.live,
            atomic: attr.atomic ? "true" : undefined,
        },
        data: {
            "bs-animation": attr.animation
                ? attr.animation === true
                    ? "true"
                    : undefined
                : attr.animation === false
                    ? "false"
                    : undefined,
            "bs-autohide": attr.autohide === false ? "false" : undefined,
            "bs-delay": attr.delay ? attr.delay.toString() : undefined,
        },
    }, attr);
    delete attr.color;
    delete attr.live;
    delete attr.atomic;
    delete attr.autohide;
    delete attr.delay;
    delete attr.animation;
    delete attr.debug;
    return attr;
};
class item extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(item, AttrOrElem, Elem);
exports.Item = Item;

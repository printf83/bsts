"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.button = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const button_js_1 = require("../../../html/button.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [attr.active ? "active" : undefined],
        aria: {
            current: attr.active ? "true" : undefined,
        },
        data: {
            "bs-target": attr.target,
            "bs-slide-to": attr.slide?.toString(),
        },
    }, attr);
    delete attr.active;
    delete attr.slide;
    delete attr.target;
    return attr;
};
class button extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.button = button;
const Button = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(button, AttrOrElem, Elem);
exports.Button = Button;

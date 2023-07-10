"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const div_js_1 = require("../../html/div.js");
const btnclose_js_1 = require("../btnclose.js");
const convert = (attr) => {
    //add default value
    attr.role ??= "alert";
    attr.color ??= "primary";
    attr.animation ??= true;
    //add alert class
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            "alert",
            attr.color ? `alert-${attr.color}` : undefined,
            attr.dismissible ? "alert-dismissible" : undefined,
            attr.dismissible ? (attr.animation ? "fade" : undefined) : undefined,
            attr.dismissible ? "show" : undefined,
        ],
        role: attr.role,
        border: attr.callout ? [false, "start"] : attr.border,
        borderWidth: attr.callout ? 4 : attr.borderWidth,
        borderColor: attr.callout ? attr.color : attr.borderColor,
        rounded: attr.callout ? false : attr.rounded,
    }, attr);
    if (attr.dismissible) {
        attr.elem ??= [];
        if (!Array.isArray(attr.elem))
            attr.elem = [attr.elem];
        attr.elem.push(new btnclose_js_1.btnclose({ data: { "bs-dismiss": "alert" } }));
    }
    delete attr.animation;
    delete attr.callout;
    delete attr.color;
    delete attr.dismissible;
    return attr;
};
class container extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;

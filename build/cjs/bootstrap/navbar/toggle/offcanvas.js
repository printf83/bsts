"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offcanvas = exports.offcanvas = void 0;
const tag_js_1 = require("../../../core/tag.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const span_js_1 = require("../../../html/span.js");
const button_js_1 = require("../../offcanvas/button.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        defColor: false,
        class: "navbar-toggler",
        padding: 2,
        border: false,
        elem: attr.elem ? attr.elem : new span_js_1.span({ class: "navbar-toggler-icon" }),
        aria: { expanded: "false", label: "Toggle navigation" },
    }, attr);
    return attr;
};
class offcanvas extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.offcanvas = offcanvas;
const Offcanvas = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(offcanvas, AttrOrElem, Elem);
exports.Offcanvas = Offcanvas;

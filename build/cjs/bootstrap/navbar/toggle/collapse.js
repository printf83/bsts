"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = exports.collapse = void 0;
const tag_js_1 = require("../../../core/tag.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const span_js_1 = require("../../../html/span.js");
const button_js_1 = require("../../collapse/button.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        defColor: false,
        padding: 2,
        border: false,
        class: "navbar-toggler",
        elem: attr.elem ? attr.elem : new span_js_1.span({ class: "navbar-toggler-icon" }),
        aria: { expanded: "false", label: "Toggle navigation" },
    }, attr);
    return attr;
};
class collapse extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.collapse = collapse;
const Collapse = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(collapse, AttrOrElem, Elem);
exports.Collapse = Collapse;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const figure_js_1 = require("../../html/figure.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "figure");
    return attr;
};
class container extends figure_js_1.figure {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;

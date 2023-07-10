"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = exports.brand = void 0;
const bootstrap_js_1 = require("../../core/bootstrap.js");
const tag_js_1 = require("../../core/tag.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["navbar-brand"]);
    return attr;
};
class brand extends tag_js_1.tag {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConstArgTag)("elem", "span", "a", (i) => (i.href ? true : false), arg), convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.brand = brand;
const Brand = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(brand, AttrOrElem, Elem);
exports.Brand = Brand;

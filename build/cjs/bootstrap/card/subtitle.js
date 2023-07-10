"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtitle = exports.subtitle = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const h_js_1 = require("../../html/h.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "card-subtitle");
    return attr;
};
class subtitle extends h_js_1.h {
    constructor(...arg) {
        super(6, convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.subtitle = subtitle;
const Subtitle = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(subtitle, AttrOrElem, Elem);
exports.Subtitle = Subtitle;

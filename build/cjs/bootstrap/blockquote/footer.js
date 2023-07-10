"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.footer = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const footer_js_1 = require("../../html/footer.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "blockquote-footer");
    return attr;
};
class footer extends footer_js_1.footer {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.footer = footer;
const Footer = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(footer, AttrOrElem, Elem);
exports.Footer = Footer;

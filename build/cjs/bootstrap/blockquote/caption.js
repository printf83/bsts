"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = exports.caption = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const figcaption_js_1 = require("../../html/figcaption.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "blockquote-footer");
    return attr;
};
class caption extends figcaption_js_1.figcaption {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.caption = caption;
const Caption = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(caption, AttrOrElem, Elem);
exports.Caption = Caption;

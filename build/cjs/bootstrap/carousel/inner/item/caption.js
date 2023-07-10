"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = exports.caption = void 0;
const tag_js_1 = require("../../../../core/tag.js");
const bootstrap_js_1 = require("../../../../core/bootstrap.js");
const div_js_1 = require("../../../../html/div.js");
const mergeClass_js_1 = require("../../../../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["carousel-caption"]);
    attr.display ??= ["none", "md-block"];
    return attr;
};
class caption extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.caption = caption;
const Caption = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(caption, AttrOrElem, Elem);
exports.Caption = Caption;

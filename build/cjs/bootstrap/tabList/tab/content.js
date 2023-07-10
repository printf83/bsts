"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.content = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeClass_js_1 = require("../../../core/mergeClass.js");
const div_js_1 = require("../../../html/div.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "tab-content");
    return attr;
};
class content extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.content = content;
const Content = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(content, AttrOrElem, Elem);
exports.Content = Content;

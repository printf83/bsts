"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.text = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const span_js_1 = require("../../html/span.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "input-group-text");
    return attr;
};
class text extends span_js_1.span {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.text = text;
const Text = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(text, AttrOrElem, Elem);
exports.Text = Text;

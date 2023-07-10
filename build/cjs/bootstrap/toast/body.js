"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = exports.body = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "toast-body");
    return attr;
};
class body extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.body = body;
const Body = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(body, AttrOrElem, Elem);
exports.Body = Body;

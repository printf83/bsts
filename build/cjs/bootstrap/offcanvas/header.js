"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.header = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "offcanvas-header");
    return attr;
};
class header extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.header = header;
const Header = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(header, AttrOrElem, Elem);
exports.Header = Header;

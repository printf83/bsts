"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Li = exports.li = void 0;
const tag_js_1 = require("../core/tag.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [attr.inline ? "list-inline-item" : undefined]);
    delete attr.inline;
    return attr;
};
class li extends tag_js_1.tag {
    constructor(...arg) {
        super("li", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.li = li;
const Li = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(li, AttrOrElem, Elem);
exports.Li = Li;

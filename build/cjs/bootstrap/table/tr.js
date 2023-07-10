"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = exports.tr = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const tr_js_1 = require("../../html/tr.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        attr.color ? `table-${attr.color}` : undefined,
        attr.active ? "table-active" : undefined,
    ]);
    delete attr.color;
    delete attr.active;
    return attr;
};
class tr extends tr_js_1.tr {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.tr = tr;
const Tr = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(tr, AttrOrElem, Elem);
exports.Tr = Tr;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tbody = exports.tbody = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const tbody_js_1 = require("../../html/tbody.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [attr.divider ? "table-group-divider" : undefined]);
    delete attr.divider;
    return attr;
};
class tbody extends tbody_js_1.tbody {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.tbody = tbody;
const Tbody = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(tbody, AttrOrElem, Elem);
exports.Tbody = Tbody;

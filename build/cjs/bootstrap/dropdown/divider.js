"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = exports.divider = void 0;
const tag_js_1 = require("../../core/tag.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const hr_js_1 = require("../../html/hr.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "dropdown-divider");
    return attr;
};
class divider extends hr_js_1.hr {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConsNoElemArg)(convert, arg));
    }
}
exports.divider = divider;
const Divider = (Attr) => (0, tag_js_1.genTagClass)(divider, Attr);
exports.Divider = Divider;

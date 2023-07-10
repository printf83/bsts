"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thead = exports.thead = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const thead_js_1 = require("../../html/thead.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [attr.color ? `table-${attr.color}` : undefined]);
    delete attr.color;
    return attr;
};
class thead extends thead_js_1.thead {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.thead = thead;
const Thead = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(thead, AttrOrElem, Elem);
exports.Thead = Thead;

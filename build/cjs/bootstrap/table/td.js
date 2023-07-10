"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Td = exports.td = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const td_js_1 = require("../../html/td.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        attr.color ? `table-${attr.color}` : undefined,
        attr.active ? "table-active" : undefined,
    ]);
    if (attr.responsiveAttr && attr.responsiveTitle) {
        attr = (0, mergeObject_js_1.mergeObject)({
            data: {
                [attr.responsiveAttr]: attr.responsiveTitle,
            },
        }, attr);
    }
    delete attr.color;
    delete attr.active;
    delete attr.responsiveAttr;
    delete attr.responsiveTitle;
    return attr;
};
class td extends td_js_1.td {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.td = td;
const Td = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(td, AttrOrElem, Elem);
exports.Td = Td;

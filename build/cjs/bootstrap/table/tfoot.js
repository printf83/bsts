"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tfoot = exports.tfoot = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const tfoot_js_1 = require("../../html/tfoot.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [attr.color ? `table-${attr.color}` : undefined]);
    delete attr.color;
    return attr;
};
class tfoot extends tfoot_js_1.tfoot {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.tfoot = tfoot;
const Tfoot = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(tfoot, AttrOrElem, Elem);
exports.Tfoot = Tfoot;

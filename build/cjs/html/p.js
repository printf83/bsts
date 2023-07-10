"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P = exports.p = void 0;
const tag_js_1 = require("../core/tag.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, attr.lead ? "lead" : undefined);
    delete attr.lead;
    return attr;
};
class p extends tag_js_1.tag {
    constructor(...arg) {
        super("p", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.p = p;
const P = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(p, AttrOrElem, Elem);
exports.P = P;

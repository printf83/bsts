"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Btngroup = exports.btngroup = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const div_js_1 = require("../html/div.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const convert = (attr) => {
    attr.role ??= "group";
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            attr.vertical ? `btn-${attr.role}-vertical` : `btn-${attr.role}`,
            attr.weight ? `btn-${attr.role}-${attr.weight}` : undefined,
        ],
        role: attr.role,
    }, attr);
    delete attr.weight;
    delete attr.vertical;
    return attr;
};
class btngroup extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.btngroup = btngroup;
const Btngroup = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(btngroup, AttrOrElem, Elem);
exports.Btngroup = Btngroup;

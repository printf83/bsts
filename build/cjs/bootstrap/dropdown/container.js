"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const btngroup_js_1 = require("../btngroup.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [attr.drop ? `drop${attr.drop}` : undefined]);
    delete attr.drop;
    return attr;
};
class container extends btngroup_js_1.btngroup {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;

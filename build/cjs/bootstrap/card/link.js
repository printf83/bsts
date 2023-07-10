"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.link = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const a_js_1 = require("../../html/a.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "card-link");
    return attr;
};
class link extends a_js_1.a {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.link = link;
const Link = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(link, AttrOrElem, Elem);
exports.Link = Link;

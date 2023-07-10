"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = exports.nav = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const container_js_1 = require("../nav/header/container.js");
const convert = (attr) => {
    attr.type ??= "tab";
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, `card-header-${attr.type}s`);
    return attr;
};
class nav extends container_js_1.container {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.nav = nav;
const Nav = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(nav, AttrOrElem, Elem);
exports.Nav = Nav;

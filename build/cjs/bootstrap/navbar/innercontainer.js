"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnercontainerNav = exports.innercontainerNav = exports.Innercontainer = exports.innercontainer = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const div_js_1 = require("../../html/div.js");
const nav_js_1 = require("../../html/nav.js");
const convert = (attr) => {
    return attr;
};
class innercontainer extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.innercontainer = innercontainer;
const Innercontainer = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(innercontainer, AttrOrElem, Elem);
exports.Innercontainer = Innercontainer;
class innercontainerNav extends nav_js_1.nav {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.innercontainerNav = innercontainerNav;
const InnercontainerNav = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(innercontainerNav, AttrOrElem, Elem);
exports.InnercontainerNav = InnercontainerNav;

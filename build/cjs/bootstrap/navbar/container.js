"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerHeader = exports.containerHeader = exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const nav_js_1 = require("../../html/nav.js");
const header_js_1 = require("../../html/header.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["navbar", attr.expand ? `navbar-expand-${attr.expand}` : undefined]);
    delete attr.expand;
    return attr;
};
class container extends nav_js_1.nav {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;
class containerHeader extends header_js_1.header {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.containerHeader = containerHeader;
const ContainerHeader = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(containerHeader, AttrOrElem, Elem);
exports.ContainerHeader = ContainerHeader;

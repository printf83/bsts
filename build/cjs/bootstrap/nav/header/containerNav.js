"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerNav = exports.containerNav = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const nav_js_1 = require("../../../html/nav.js");
const div_js_1 = require("../../../html/div.js");
const button_js_1 = require("./button.js");
const link_js_1 = require("./link.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            "nav",
            attr.type ? `nav-${attr.type}s` : undefined,
            attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
            attr.vertical ? "flex-column" : undefined,
        ],
        aria: {
            orientation: attr.vertical ? "vertical" : undefined,
        },
    }, attr);
    if (attr.item && !attr.link && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new button_js_1.button(i);
        });
    }
    else if (!attr.item && attr.link && !attr.elem) {
        if (!Array.isArray(attr.link)) {
            attr.link = [attr.link];
        }
        attr.elem = attr.link.map((i) => {
            return new link_js_1.link(i);
        });
    }
    delete attr.item;
    delete attr.link;
    delete attr.type;
    delete attr.itemWidth;
    delete attr.vertical;
    return { elem: new div_js_1.div(attr) };
};
class containerNav extends nav_js_1.nav {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.containerNav = containerNav;
const ContainerNav = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(containerNav, AttrOrElem, Elem);
exports.ContainerNav = ContainerNav;

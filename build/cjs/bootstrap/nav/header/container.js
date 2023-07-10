"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeObject_js_1 = require("../../../core/mergeObject.js");
const ul_js_1 = require("../../../html/ul.js");
const item_js_1 = require("./item.js");
const link_js_1 = require("./link.js");
const button_js_1 = require("./button.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            "nav",
            attr.type ? `nav-${attr.type}${attr.type !== "underline" ? "s" : ""}` : undefined,
            attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
            attr.vertical ? "flex-column" : undefined,
        ],
        aria: {
            orientation: attr.vertical ? "vertical" : undefined,
        },
    }, attr);
    if (attr.item && !attr.link && !attr.button && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new item_js_1.item(i);
        });
    }
    else if (!attr.item && attr.link && !attr.button && !attr.elem) {
        if (!Array.isArray(attr.link)) {
            attr.link = [attr.link];
        }
        attr.elem = attr.link.map((i) => {
            return new item_js_1.item(new link_js_1.link(i));
        });
    }
    else if (!attr.item && !attr.link && attr.button && !attr.elem) {
        if (!Array.isArray(attr.button)) {
            attr.button = [attr.button];
        }
        attr.elem = attr.button.map((i) => {
            return new item_js_1.item(new button_js_1.button(i));
        });
    }
    delete attr.item;
    delete attr.link;
    delete attr.button;
    delete attr.type;
    delete attr.itemWidth;
    delete attr.vertical;
    return attr;
};
class container extends ul_js_1.ul {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;

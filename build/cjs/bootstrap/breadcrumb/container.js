"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const nav_js_1 = require("../../html/nav.js");
const ol_js_1 = require("../../html/ol.js");
const item_js_1 = require("./item.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "breadcrumb");
    if (!attr.elem) {
        if (attr.item) {
            let tItem = Array.isArray(attr.item) ? attr.item : [attr.item];
            attr.elem = tItem.map((i, ix) => {
                if (ix === tItem.length - 1) {
                    i.active ??= true;
                }
                return new item_js_1.item(i);
            });
        }
    }
    let label = attr.label;
    let divider = attr.divider;
    delete attr.label;
    delete attr.divider;
    delete attr.item;
    return {
        label: label,
        elem: new ol_js_1.ol(attr),
        style: {
            "--bs-breadcrumb-divider": divider ? divider : undefined,
        },
    };
};
class container extends nav_js_1.nav {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;

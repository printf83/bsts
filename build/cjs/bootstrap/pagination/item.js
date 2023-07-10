"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const li_js_1 = require("../../html/li.js");
const button_js_1 = require("../../html/button.js");
const a_js_1 = require("../../html/a.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const convert = (attr) => {
    let liAttr = {
        class: ["page-item", attr.active ? "active" : undefined, attr.disabled ? "disabled" : undefined],
        aria: { current: attr.active ? "page" : undefined },
    };
    if (attr.disabled) {
        attr.href = undefined;
    }
    delete attr.active;
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "page-link");
    if (attr.href) {
        liAttr.elem = new a_js_1.a(attr);
    }
    else {
        liAttr.elem = new button_js_1.button(attr);
    }
    return liAttr;
};
class item extends li_js_1.li {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(item, AttrOrElem, Elem);
exports.Item = Item;

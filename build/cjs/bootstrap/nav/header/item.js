"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeClass_js_1 = require("../../../core/mergeClass.js");
const li_js_1 = require("../../../html/li.js");
const button_js_1 = require("./button.js");
const link_js_1 = require("./link.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["nav-item", attr.dropdown ? "dropdown" : undefined]);
    if (attr.link && !attr.button && !attr.elem) {
        attr.elem = new link_js_1.link(attr.link);
    }
    else if (!attr.link && attr.button && !attr.elem) {
        attr.elem = new button_js_1.button(attr.button);
    }
    delete attr.dropdown;
    delete attr.link;
    delete attr.button;
    return attr;
};
class item extends li_js_1.li {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(item, AttrOrElem, Elem);
exports.Item = Item;

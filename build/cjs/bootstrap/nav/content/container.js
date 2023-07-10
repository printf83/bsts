"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeClass_js_1 = require("../../../core/mergeClass.js");
const div_js_1 = require("../../../html/div.js");
const item_js_1 = require("./item.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "tab-content");
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new item_js_1.item(i);
        });
    }
    delete attr.item;
    return attr;
};
class container extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;

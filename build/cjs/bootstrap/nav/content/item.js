"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeClass_js_1 = require("../../../core/mergeClass.js");
const div_js_1 = require("../../../html/div.js");
const convert = (attr) => {
    attr.role ??= "tabpanel";
    attr.tabindex ??= "0";
    attr.animation ??= true;
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        "tab-pane",
        attr.active ? "active" : undefined,
        attr.active ? "show" : undefined,
        attr.animation ? "fade" : undefined,
    ]);
    delete attr.active;
    return attr;
};
class item extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(item, AttrOrElem, Elem);
exports.Item = Item;

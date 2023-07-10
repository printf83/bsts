"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const a_js_1 = require("../../html/a.js");
const li_js_1 = require("../../html/li.js");
const convert = (attr) => {
    let active = attr.active;
    if (active) {
        delete attr.href;
    }
    delete attr.color;
    delete attr.active;
    return {
        class: ["breadcrumb-item", active ? "active" : undefined],
        aria: { current: active ? "page" : undefined },
        elem: new a_js_1.a(attr),
    };
};
class item extends li_js_1.li {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(item, AttrOrElem, Elem);
exports.Item = Item;

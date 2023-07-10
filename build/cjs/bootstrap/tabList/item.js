"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const a_js_1 = require("../../html/a.js");
const convert = (attr) => {
    if (attr.disabled && attr.href) {
        delete attr.href;
    }
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            "list-group-item",
            attr.action ? "list-group-item-action" : undefined,
            attr.color ? `list-group-item-${attr.color}` : undefined,
            attr.active ? "active" : undefined,
        ],
        data: {
            "bs-toggle": attr.autoInit ? "list" : undefined,
        },
    }, attr);
    if (attr.autoInit) {
        attr.role ??= "tab";
    }
    delete attr.active;
    delete attr.action;
    delete attr.color;
    delete attr.autoInit;
    return attr;
};
class item extends a_js_1.a {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(item, AttrOrElem, Elem);
exports.Item = Item;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ul = exports.ul = void 0;
const tag_js_1 = require("../core/tag.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const li_js_1 = require("./li.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        attr.unstyle ? "list-unstyled" : undefined,
        attr.inline ? "list-inline" : undefined,
    ]);
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new li_js_1.li(i);
        });
    }
    delete attr.unstyle;
    delete attr.inline;
    delete attr.item;
    return attr;
};
class ul extends tag_js_1.tag {
    constructor(...arg) {
        super("ul", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.ul = ul;
const Ul = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(ul, AttrOrElem, Elem);
exports.Ul = Ul;

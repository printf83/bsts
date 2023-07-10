"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ol = exports.ol = void 0;
const tag_js_1 = require("../core/tag.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const li_js_1 = require("./li.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        attr.unstyle ? "list-unstyle" : undefined,
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
class ol extends tag_js_1.tag {
    constructor(...arg) {
        super("ol", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.ol = ol;
const Ol = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(ol, AttrOrElem, Elem);
exports.Ol = Ol;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optgroup = exports.optgroup = void 0;
const tag_js_1 = require("../core/tag.js");
const option_js_1 = require("./option.js");
const convert = (attr) => {
    if (attr.label) {
        attr.attrLabel = attr.label;
        delete attr.label;
    }
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new option_js_1.option(i);
        });
    }
    delete attr.item;
    return attr;
};
class optgroup extends tag_js_1.tag {
    constructor(...arg) {
        super("optgroup", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.optgroup = optgroup;
const Optgroup = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(optgroup, AttrOrElem, Elem);
exports.Optgroup = Optgroup;

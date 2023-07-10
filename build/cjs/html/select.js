"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = exports.select = void 0;
const tag_js_1 = require("../core/tag.js");
const optgroup_js_1 = require("./optgroup.js");
const option_js_1 = require("./option.js");
const convert = (attr) => {
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            i = Object.assign({}, i);
            if (i.label && i.item && !i.elem) {
                if (!Array.isArray(i.item)) {
                    i.item = [i.item];
                }
                delete i.value;
                delete i.selected;
                return new optgroup_js_1.optgroup(i);
            }
            else {
                delete i.label;
                delete i.item;
                return new option_js_1.option(i);
            }
        });
    }
    delete attr.item;
    return attr;
};
class select extends tag_js_1.tag {
    constructor(...arg) {
        super("select", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.select = select;
const Select = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(select, AttrOrElem, Elem);
exports.Select = Select;

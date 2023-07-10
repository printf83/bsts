"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datalist = exports.datalist = void 0;
const tag_js_1 = require("../core/tag.js");
const option_js_1 = require("./option.js");
const convert = (attr) => {
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new option_js_1.option({ value: i });
        });
    }
    delete attr.item;
    return attr;
};
class datalist extends tag_js_1.tag {
    constructor(...arg) {
        super("datalist", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.datalist = datalist;
const Datalist = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(datalist, AttrOrElem, Elem);
exports.Datalist = Datalist;

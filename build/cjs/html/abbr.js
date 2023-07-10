"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abbr = exports.abbr = void 0;
const tag_js_1 = require("../core/tag.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, attr.small ? "initialism" : undefined);
    delete attr.small;
    return attr;
};
class abbr extends tag_js_1.tag {
    constructor(...arg) {
        super("abbr", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.abbr = abbr;
const Abbr = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(abbr, AttrOrElem, Elem);
exports.Abbr = Abbr;

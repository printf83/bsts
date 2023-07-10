"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colgroup = exports.colgroup = void 0;
const tag_js_1 = require("../core/tag.js");
class colgroup extends tag_js_1.tag {
    constructor(...arg) {
        super("colgroup", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.colgroup = colgroup;
const Colgroup = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(colgroup, AttrOrElem, Elem);
exports.Colgroup = Colgroup;

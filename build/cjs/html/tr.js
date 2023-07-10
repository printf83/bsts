"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = exports.tr = void 0;
const tag_js_1 = require("../core/tag.js");
class tr extends tag_js_1.tag {
    constructor(...arg) {
        super("tr", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.tr = tr;
const Tr = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(tr, AttrOrElem, Elem);
exports.Tr = Tr;

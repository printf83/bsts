"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I = exports.i = void 0;
const tag_js_1 = require("../core/tag.js");
class i extends tag_js_1.tag {
    constructor(...arg) {
        super("i", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.i = i;
const I = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(i, AttrOrElem, Elem);
exports.I = I;

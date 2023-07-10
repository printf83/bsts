"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.b = void 0;
const tag_js_1 = require("../core/tag.js");
class b extends tag_js_1.tag {
    constructor(...arg) {
        super("b", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.b = b;
const B = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(b, AttrOrElem, Elem);
exports.B = B;

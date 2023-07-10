"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S = exports.s = void 0;
const tag_js_1 = require("../core/tag.js");
class s extends tag_js_1.tag {
    constructor(...arg) {
        super("s", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.s = s;
const S = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(s, AttrOrElem, Elem);
exports.S = S;

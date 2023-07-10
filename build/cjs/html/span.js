"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Span = exports.span = void 0;
const tag_js_1 = require("../core/tag.js");
class span extends tag_js_1.tag {
    constructor(...arg) {
        super("span", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.span = span;
const Span = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(span, AttrOrElem, Elem);
exports.Span = Span;

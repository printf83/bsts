"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Noscript = exports.noscript = void 0;
const tag_js_1 = require("../core/tag.js");
class noscript extends tag_js_1.tag {
    constructor(...arg) {
        super("noscript", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.noscript = noscript;
const Noscript = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(noscript, AttrOrElem, Elem);
exports.Noscript = Noscript;

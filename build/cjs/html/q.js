"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Q = exports.q = void 0;
const tag_js_1 = require("../core/tag.js");
class q extends tag_js_1.tag {
    constructor(...arg) {
        super("q", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.q = q;
const Q = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(q, AttrOrElem, Elem);
exports.Q = Q;

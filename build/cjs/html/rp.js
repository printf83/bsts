"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rp = exports.rp = void 0;
const tag_js_1 = require("../core/tag.js");
class rp extends tag_js_1.tag {
    constructor(...arg) {
        super("rp", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.rp = rp;
const Rp = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(rp, AttrOrElem, Elem);
exports.Rp = Rp;

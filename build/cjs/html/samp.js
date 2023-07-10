"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Samp = exports.samp = void 0;
const tag_js_1 = require("../core/tag.js");
class samp extends tag_js_1.tag {
    constructor(...arg) {
        super("samp", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.samp = samp;
const Samp = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(samp, AttrOrElem, Elem);
exports.Samp = Samp;

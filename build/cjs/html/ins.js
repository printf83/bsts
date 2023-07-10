"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ins = exports.ins = void 0;
const tag_js_1 = require("../core/tag.js");
class ins extends tag_js_1.tag {
    constructor(...arg) {
        super("ins", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.ins = ins;
const Ins = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(ins, AttrOrElem, Elem);
exports.Ins = Ins;

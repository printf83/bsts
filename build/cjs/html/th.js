"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Th = exports.th = void 0;
const tag_js_1 = require("../core/tag.js");
class th extends tag_js_1.tag {
    constructor(...arg) {
        super("th", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.th = th;
const Th = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(th, AttrOrElem, Elem);
exports.Th = Th;

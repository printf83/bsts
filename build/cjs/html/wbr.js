"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wbr = exports.wbr = void 0;
const tag_js_1 = require("../core/tag.js");
class wbr extends tag_js_1.tag {
    constructor(...arg) {
        super("wbr", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.wbr = wbr;
const Wbr = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(wbr, AttrOrElem, Elem);
exports.Wbr = Wbr;

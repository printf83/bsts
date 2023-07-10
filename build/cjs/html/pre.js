"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pre = exports.pre = void 0;
const tag_js_1 = require("../core/tag.js");
class pre extends tag_js_1.tag {
    constructor(...arg) {
        super("pre", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.pre = pre;
const Pre = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(pre, AttrOrElem, Elem);
exports.Pre = Pre;

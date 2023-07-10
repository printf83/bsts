"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockquote = exports.blockquote = void 0;
const tag_js_1 = require("../core/tag.js");
class blockquote extends tag_js_1.tag {
    constructor(...arg) {
        super("blockquote", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.blockquote = blockquote;
const Blockquote = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(blockquote, AttrOrElem, Elem);
exports.Blockquote = Blockquote;

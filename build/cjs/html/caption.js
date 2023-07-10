"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = exports.caption = void 0;
const tag_js_1 = require("../core/tag.js");
class caption extends tag_js_1.tag {
    constructor(...arg) {
        super("caption", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.caption = caption;
const Caption = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(caption, AttrOrElem, Elem);
exports.Caption = Caption;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = exports.head = void 0;
const tag_js_1 = require("../core/tag.js");
class head extends tag_js_1.tag {
    constructor(...arg) {
        super("head", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.head = head;
const Head = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(head, AttrOrElem, Elem);
exports.Head = Head;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.title = void 0;
const tag_js_1 = require("../core/tag.js");
class title extends tag_js_1.tag {
    constructor(...arg) {
        super("title", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.title = title;
const Title = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(title, AttrOrElem, Elem);
exports.Title = Title;

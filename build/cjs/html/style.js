"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = exports.style = void 0;
const tag_js_1 = require("../core/tag.js");
class style extends tag_js_1.tag {
    constructor(...arg) {
        super("style", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.style = style;
const Style = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(style, AttrOrElem, Elem);
exports.Style = Style;

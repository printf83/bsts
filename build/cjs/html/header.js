"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.header = void 0;
const tag_js_1 = require("../core/tag.js");
class header extends tag_js_1.tag {
    constructor(...arg) {
        super("header", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.header = header;
const Header = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(header, AttrOrElem, Elem);
exports.Header = Header;

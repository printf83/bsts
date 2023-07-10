"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.footer = void 0;
const tag_js_1 = require("../core/tag.js");
class footer extends tag_js_1.tag {
    constructor(...arg) {
        super("footer", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.footer = footer;
const Footer = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(footer, AttrOrElem, Elem);
exports.Footer = Footer;

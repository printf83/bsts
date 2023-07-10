"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figcaption = exports.figcaption = void 0;
const tag_js_1 = require("../core/tag.js");
class figcaption extends tag_js_1.tag {
    constructor(...arg) {
        super("figcaption", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.figcaption = figcaption;
const Figcaption = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(figcaption, AttrOrElem, Elem);
exports.Figcaption = Figcaption;

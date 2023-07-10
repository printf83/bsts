"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Em = exports.em = void 0;
const tag_js_1 = require("../core/tag.js");
class em extends tag_js_1.tag {
    constructor(...arg) {
        super("em", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.em = em;
const Em = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(em, AttrOrElem, Elem);
exports.Em = Em;

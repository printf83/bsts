"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = exports.details = void 0;
const tag_js_1 = require("../core/tag.js");
class details extends tag_js_1.tag {
    constructor(...arg) {
        super("details", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.details = details;
const Details = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(details, AttrOrElem, Elem);
exports.Details = Details;

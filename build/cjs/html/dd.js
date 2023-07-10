"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dd = exports.dd = void 0;
const tag_js_1 = require("../core/tag.js");
class dd extends tag_js_1.tag {
    constructor(...arg) {
        super("dd", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.dd = dd;
const Dd = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(dd, AttrOrElem, Elem);
exports.Dd = Dd;

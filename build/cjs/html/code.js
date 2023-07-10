"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = exports.code = void 0;
const tag_js_1 = require("../core/tag.js");
class code extends tag_js_1.tag {
    constructor(...arg) {
        super("code", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.code = code;
const Code = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(code, AttrOrElem, Elem);
exports.Code = Code;

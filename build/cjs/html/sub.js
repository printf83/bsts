"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sub = exports.sub = void 0;
const tag_js_1 = require("../core/tag.js");
class sub extends tag_js_1.tag {
    constructor(...arg) {
        super("sub", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.sub = sub;
const Sub = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(sub, AttrOrElem, Elem);
exports.Sub = Sub;

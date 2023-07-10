"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strong = exports.strong = void 0;
const tag_js_1 = require("../core/tag.js");
class strong extends tag_js_1.tag {
    constructor(...arg) {
        super("strong", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.strong = strong;
const Strong = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(strong, AttrOrElem, Elem);
exports.Strong = Strong;

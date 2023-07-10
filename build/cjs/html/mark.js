"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mark = exports.mark = void 0;
const tag_js_1 = require("../core/tag.js");
class mark extends tag_js_1.tag {
    constructor(...arg) {
        super("mark", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.mark = mark;
const Mark = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(mark, AttrOrElem, Elem);
exports.Mark = Mark;

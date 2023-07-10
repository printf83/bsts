"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruby = exports.ruby = void 0;
const tag_js_1 = require("../core/tag.js");
class ruby extends tag_js_1.tag {
    constructor(...arg) {
        super("ruby", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.ruby = ruby;
const Ruby = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(ruby, AttrOrElem, Elem);
exports.Ruby = Ruby;

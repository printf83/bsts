"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.button = void 0;
const tag_js_1 = require("../core/tag.js");
class button extends tag_js_1.tag {
    constructor(...arg) {
        super("button", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.button = button;
const Button = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(button, AttrOrElem, Elem);
exports.Button = Button;

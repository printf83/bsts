"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kbd = exports.kbd = void 0;
const tag_js_1 = require("../core/tag.js");
class kbd extends tag_js_1.tag {
    constructor(...arg) {
        super("kbd", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.kbd = kbd;
const Kbd = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(kbd, AttrOrElem, Elem);
exports.Kbd = Kbd;

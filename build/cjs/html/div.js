"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Div = exports.div = void 0;
const tag_js_1 = require("../core/tag.js");
class div extends tag_js_1.tag {
    constructor(...arg) {
        super("div", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.div = div;
const Div = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(div, AttrOrElem, Elem);
exports.Div = Div;

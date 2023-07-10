"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Td = exports.td = void 0;
const tag_js_1 = require("../core/tag.js");
class td extends tag_js_1.tag {
    constructor(...arg) {
        super("td", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.td = td;
const Td = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(td, AttrOrElem, Elem);
exports.Td = Td;

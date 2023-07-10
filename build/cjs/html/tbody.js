"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tbody = exports.tbody = void 0;
const tag_js_1 = require("../core/tag.js");
class tbody extends tag_js_1.tag {
    constructor(...arg) {
        super("tbody", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.tbody = tbody;
const Tbody = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(tbody, AttrOrElem, Elem);
exports.Tbody = Tbody;

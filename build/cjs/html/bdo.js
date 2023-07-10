"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bdo = exports.bdo = void 0;
const tag_js_1 = require("../core/tag.js");
class bdo extends tag_js_1.tag {
    constructor(...arg) {
        super("bdo", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.bdo = bdo;
const Bdo = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(bdo, AttrOrElem, Elem);
exports.Bdo = Bdo;

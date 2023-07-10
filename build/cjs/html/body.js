"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = exports.body = void 0;
const tag_js_1 = require("../core/tag.js");
class body extends tag_js_1.tag {
    constructor(...arg) {
        super("body", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.body = body;
const Body = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(body, AttrOrElem, Elem);
exports.Body = Body;

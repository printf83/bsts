"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.U = exports.u = void 0;
const tag_js_1 = require("../core/tag.js");
class u extends tag_js_1.tag {
    constructor(...arg) {
        super("u", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.u = u;
const U = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(u, AttrOrElem, Elem);
exports.U = U;

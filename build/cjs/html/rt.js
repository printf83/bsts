"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rt = exports.rt = void 0;
const tag_js_1 = require("../core/tag.js");
class rt extends tag_js_1.tag {
    constructor(...arg) {
        super("rt", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.rt = rt;
const Rt = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(rt, AttrOrElem, Elem);
exports.Rt = Rt;

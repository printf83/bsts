"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = exports.output = void 0;
const tag_js_1 = require("../core/tag.js");
class output extends tag_js_1.tag {
    constructor(...arg) {
        super("output", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.output = output;
const Output = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(output, AttrOrElem, Elem);
exports.Output = Output;

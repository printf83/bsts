"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.input = void 0;
const tag_js_1 = require("../core/tag.js");
class input extends tag_js_1.tag {
    constructor(...arg) {
        super("input", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.input = input;
const Input = (Attr) => (0, tag_js_1.genTagClass)(input, Attr);
exports.Input = Input;

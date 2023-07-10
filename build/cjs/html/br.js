"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Br = exports.br = void 0;
const tag_js_1 = require("../core/tag.js");
class br extends tag_js_1.tag {
    constructor(...arg) {
        super("br", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.br = br;
const Br = (Attr) => (0, tag_js_1.genTagClass)(br, Attr);
exports.Br = Br;

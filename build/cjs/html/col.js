"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Col = exports.col = void 0;
const tag_js_1 = require("../core/tag.js");
class col extends tag_js_1.tag {
    constructor(...arg) {
        super("col", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.col = col;
const Col = (Attr) => (0, tag_js_1.genTagClass)(col, Attr);
exports.Col = Col;

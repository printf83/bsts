"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iframe = exports.iframe = void 0;
const tag_js_1 = require("../core/tag.js");
class iframe extends tag_js_1.tag {
    constructor(...arg) {
        super("iframe", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.iframe = iframe;
const Iframe = (Attr) => (0, tag_js_1.genTagClass)(iframe, Attr);
exports.Iframe = Iframe;

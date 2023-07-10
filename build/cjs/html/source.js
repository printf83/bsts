"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = exports.source = void 0;
const tag_js_1 = require("../core/tag.js");
class source extends tag_js_1.tag {
    constructor(...arg) {
        super("source", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.source = source;
const Source = (Attr) => (0, tag_js_1.genTagClass)(source, Attr);
exports.Source = Source;

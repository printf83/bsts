"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meta = exports.meta = void 0;
const tag_js_1 = require("../core/tag.js");
class meta extends tag_js_1.tag {
    constructor(...arg) {
        super("meta", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.meta = meta;
const Meta = (Attr) => (0, tag_js_1.genTagClass)(meta, Attr);
exports.Meta = Meta;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.link = void 0;
const tag_js_1 = require("../core/tag.js");
class link extends tag_js_1.tag {
    constructor(...arg) {
        super("link", (0, tag_js_1.tagConsNoElemArg)(arg));
    }
}
exports.link = link;
const Link = (Attr) => (0, tag_js_1.genTagClass)(link, Attr);
exports.Link = Link;

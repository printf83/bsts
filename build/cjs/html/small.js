"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.small = void 0;
const tag_js_1 = require("../core/tag.js");
class small extends tag_js_1.tag {
    constructor(...arg) {
        super("small", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.small = small;
const Small = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(small, AttrOrElem, Elem);
exports.Small = Small;

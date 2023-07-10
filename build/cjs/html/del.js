"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Del = exports.del = void 0;
const tag_js_1 = require("../core/tag.js");
class del extends tag_js_1.tag {
    constructor(...arg) {
        super("del", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.del = del;
const Del = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(del, AttrOrElem, Elem);
exports.Del = Del;

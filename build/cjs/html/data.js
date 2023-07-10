"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = exports.data = void 0;
const tag_js_1 = require("../core/tag.js");
class data extends tag_js_1.tag {
    constructor(...arg) {
        super("data", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.data = data;
const Data = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(data, AttrOrElem, Elem);
exports.Data = Data;

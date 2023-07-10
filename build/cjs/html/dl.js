"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dl = exports.dl = void 0;
const tag_js_1 = require("../core/tag.js");
class dl extends tag_js_1.tag {
    constructor(...arg) {
        super("dl", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.dl = dl;
const Dl = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(dl, AttrOrElem, Elem);
exports.Dl = Dl;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cite = exports.cite = void 0;
const tag_js_1 = require("../core/tag.js");
class cite extends tag_js_1.tag {
    constructor(...arg) {
        super("cite", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.cite = cite;
const Cite = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(cite, AttrOrElem, Elem);
exports.Cite = Cite;

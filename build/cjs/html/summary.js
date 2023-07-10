"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = exports.summary = void 0;
const tag_js_1 = require("../core/tag.js");
class summary extends tag_js_1.tag {
    constructor(...arg) {
        super("summary", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.summary = summary;
const Summary = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(summary, AttrOrElem, Elem);
exports.Summary = Summary;

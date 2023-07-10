"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.label = void 0;
const tag_js_1 = require("../core/tag.js");
class label extends tag_js_1.tag {
    constructor(...arg) {
        super("label", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.label = label;
const Label = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(label, AttrOrElem, Elem);
exports.Label = Label;

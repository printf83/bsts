"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fieldset = exports.fieldset = void 0;
const tag_js_1 = require("../core/tag.js");
class fieldset extends tag_js_1.tag {
    constructor(...arg) {
        super("fieldset", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.fieldset = fieldset;
const Fieldset = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(fieldset, AttrOrElem, Elem);
exports.Fieldset = Fieldset;

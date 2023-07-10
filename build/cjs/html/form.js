"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.form = void 0;
const tag_js_1 = require("../core/tag.js");
class form extends tag_js_1.tag {
    constructor(...arg) {
        super("form", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.form = form;
const Form = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(form, AttrOrElem, Elem);
exports.Form = Form;

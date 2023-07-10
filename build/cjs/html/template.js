"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.template = void 0;
const tag_js_1 = require("../core/tag.js");
class template extends tag_js_1.tag {
    constructor(...arg) {
        super("template", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.template = template;
const Template = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(template, AttrOrElem, Elem);
exports.Template = Template;

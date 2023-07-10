"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = exports.textarea = void 0;
const tag_js_1 = require("../core/tag.js");
const convert = (attr) => {
    //move value to elem
    if (attr.value) {
        if (attr.elem) {
            if (Array.isArray(attr.elem)) {
                attr.elem = [...attr.elem, attr.value];
            }
            else {
                attr.elem = [attr.elem, attr.value];
            }
        }
        else {
            attr.elem = attr.value;
        }
        delete attr.value;
    }
    return attr;
};
class textarea extends tag_js_1.tag {
    constructor(...arg) {
        super("textarea", convert((0, tag_js_1.tagConsNoElemArg)(arg)));
    }
}
exports.textarea = textarea;
const Textarea = (Attr) => (0, tag_js_1.genTagClass)(textarea, Attr);
exports.Textarea = Textarea;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = exports.a = void 0;
const tag_js_1 = require("../core/tag.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        attr.color ? `link-${attr.color}` : undefined,
        attr.stretched ? "stretched-link" : undefined,
        attr.disabled ? "disabled" : undefined,
    ]);
    if (attr.disabled) {
        delete attr.href;
        attr = (0, mergeObject_js_1.mergeObject)({
            aria: { disabled: "true" },
            tabindex: -1,
        }, attr);
    }
    delete attr.color;
    delete attr.stretched;
    delete attr.disabled;
    return attr;
};
class a extends tag_js_1.tag {
    constructor(...arg) {
        super("a", convert((0, tag_js_1.tagConsArg)("elem", arg)));
    }
}
exports.a = a;
const A = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(a, AttrOrElem, Elem);
exports.A = A;

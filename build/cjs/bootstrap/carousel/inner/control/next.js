"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Next = exports.next = void 0;
const tag_js_1 = require("../../../../core/tag.js");
const bootstrap_js_1 = require("../../../../core/bootstrap.js");
const button_js_1 = require("../../../../html/button.js");
const mergeObject_js_1 = require("../../../../core/mergeObject.js");
const span_js_1 = require("../../../../html/span.js");
const visuallyhidden_js_1 = require("../../../visuallyhidden.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: "carousel-control-next",
        data: {
            "bs-target": attr.target,
            "bs-slide": "next",
        },
    }, attr);
    if (!attr.elem) {
        attr.elem = [
            new span_js_1.span({ class: "carousel-control-next-icon", aria: { hidden: "true" } }),
            new visuallyhidden_js_1.visuallyhidden("Next"),
        ];
    }
    delete attr.target;
    return attr;
};
class next extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.next = next;
const Next = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(next, AttrOrElem, Elem);
exports.Next = Next;

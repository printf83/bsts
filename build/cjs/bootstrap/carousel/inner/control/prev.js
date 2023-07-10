"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prev = exports.prev = void 0;
const tag_js_1 = require("../../../../core/tag.js");
const bootstrap_js_1 = require("../../../../core/bootstrap.js");
const button_js_1 = require("../../../../html/button.js");
const mergeObject_js_1 = require("../../../../core/mergeObject.js");
const span_js_1 = require("../../../../html/span.js");
const visuallyhidden_js_1 = require("../../../visuallyhidden.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: "carousel-control-prev",
        data: {
            "bs-target": attr.target,
            "bs-slide": "prev",
        },
    }, attr);
    if (!attr.elem) {
        attr.elem = [
            new span_js_1.span({ class: "carousel-control-prev-icon", aria: { hidden: "true" } }),
            new visuallyhidden_js_1.visuallyhidden("Previous"),
        ];
    }
    delete attr.target;
    return attr;
};
class prev extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.prev = prev;
const Prev = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(prev, AttrOrElem, Elem);
exports.Prev = Prev;

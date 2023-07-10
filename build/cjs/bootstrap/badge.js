"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = exports.badge = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const span_js_1 = require("../html/span.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "badge");
    return attr;
};
class badge extends span_js_1.span {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.badge = badge;
const Badge = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(badge, AttrOrElem, Elem);
exports.Badge = Badge;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = exports.button = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const button_js_1 = require("../button.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [attr.expanded ? undefined : "collapsed", attr.icon ? "btn-toggle" : undefined],
        data: {
            "bs-toggle": "collapse",
            "bs-target": attr.link ? undefined : attr.target,
        },
        aria: { expanded: attr.expanded ? "true" : "false" },
        role: attr.link ? "button" : undefined,
        href: attr.link ? attr.target : undefined,
    }, attr);
    delete attr.link;
    delete attr.target;
    delete attr.expanded;
    return attr;
};
class button extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.button = button;
const Toggle = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(button, AttrOrElem, Elem);
exports.Toggle = Toggle;

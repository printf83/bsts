"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = exports.spinner = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const visuallyhidden_js_1 = require("./visuallyhidden.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const convert = (attr) => {
    attr.role ??= "status";
    attr.type ??= "border";
    attr.textColor ??= attr.color || attr.textColor;
    attr.elem ??= "Loading...";
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        `spinner-${attr.type}`,
        attr.small && attr.type ? `spinner-${attr.type}-sm` : undefined,
    ]);
    if (attr.elem === "") {
        attr = (0, mergeObject_js_1.mergeObject)({ aria: { hidden: "true" } }, attr);
    }
    else {
        if (attr.elem) {
            attr.elem = new visuallyhidden_js_1.visuallyhidden(attr.elem);
        }
    }
    delete attr.small;
    delete attr.type;
    delete attr.color;
    return attr;
};
class spinner extends tag_js_1.tag {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConstArgTag)("elem", "span", "div", (i) => (i.elem === "" ? false : i.elem ? false : true), arg), convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.spinner = spinner;
const Spinner = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(spinner, AttrOrElem, Elem);
exports.Spinner = Spinner;

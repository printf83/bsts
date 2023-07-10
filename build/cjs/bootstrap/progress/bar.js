"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = exports.bar = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            "progress-bar",
            attr.striped ? "progress-bar-striped" : undefined,
            attr.striped && attr.animated ? "progress-bar-animated" : undefined,
        ],
        bgColor: attr.color,
    }, attr);
    delete attr.color;
    delete attr.striped;
    delete attr.animated;
    return attr;
};
class bar extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.bar = bar;
const Bar = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(bar, AttrOrElem, Elem);
exports.Bar = Bar;

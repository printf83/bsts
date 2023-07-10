"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.title = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const strong_js_1 = require("../../html/strong.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({ marginEnd: "auto" }, attr);
    return attr;
};
class title extends strong_js_1.strong {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.title = title;
const Title = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(title, AttrOrElem, Elem);
exports.Title = Title;

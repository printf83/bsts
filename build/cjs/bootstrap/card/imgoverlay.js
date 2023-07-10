"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imgoverlay = exports.imgoverlay = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "card-img-overlay");
    return attr;
};
class imgoverlay extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.imgoverlay = imgoverlay;
const Imgoverlay = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(imgoverlay, AttrOrElem, Elem);
exports.Imgoverlay = Imgoverlay;

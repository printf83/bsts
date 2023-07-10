"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stacked = exports.stacked = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({ class: "progress-stacked" }, attr);
    return attr;
};
class stacked extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.stacked = stacked;
const Stacked = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(stacked, AttrOrElem, Elem);
exports.Stacked = Stacked;

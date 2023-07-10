"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Col = exports.col = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const tag_js_1 = require("../core/tag.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const div_js_1 = require("../html/div.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        col: true,
    }, attr);
    return attr;
};
class col extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.col = col;
const Col = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(col, AttrOrElem, Elem);
exports.Col = Col;

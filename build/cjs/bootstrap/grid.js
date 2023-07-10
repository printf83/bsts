"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = exports.grid = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const div_js_1 = require("../html/div.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        display: "grid",
        gap: 3,
    }, attr);
    return attr;
};
class grid extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.grid = grid;
const Grid = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(grid, AttrOrElem, Elem);
exports.Grid = Grid;

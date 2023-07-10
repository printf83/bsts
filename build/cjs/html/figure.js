"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figure = exports.figure = void 0;
const tag_js_1 = require("../core/tag.js");
class figure extends tag_js_1.tag {
    constructor(...arg) {
        super("figure", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.figure = figure;
const Figure = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(figure, AttrOrElem, Elem);
exports.Figure = Figure;

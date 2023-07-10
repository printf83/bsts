"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = exports.canvas = void 0;
const tag_js_1 = require("../core/tag.js");
class canvas extends tag_js_1.tag {
    constructor(...arg) {
        super("canvas", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.canvas = canvas;
const Canvas = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(canvas, AttrOrElem, Elem);
exports.Canvas = Canvas;

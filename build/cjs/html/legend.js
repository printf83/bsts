"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Legend = exports.legend = void 0;
const tag_js_1 = require("../core/tag.js");
class legend extends tag_js_1.tag {
    constructor(...arg) {
        super("legend", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.legend = legend;
const Legend = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(legend, AttrOrElem, Elem);
exports.Legend = Legend;

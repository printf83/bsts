"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = exports.area = void 0;
const tag_js_1 = require("../core/tag.js");
class area extends tag_js_1.tag {
    constructor(...arg) {
        super("area", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.area = area;
const Area = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(area, AttrOrElem, Elem);
exports.Area = Area;

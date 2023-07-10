"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = exports.map = void 0;
const tag_js_1 = require("../core/tag.js");
class map extends tag_js_1.tag {
    constructor(...arg) {
        super("map", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.map = map;
const Map = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(map, AttrOrElem, Elem);
exports.Map = Map;

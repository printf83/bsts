"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meter = exports.meter = void 0;
const tag_js_1 = require("../core/tag.js");
class meter extends tag_js_1.tag {
    constructor(...arg) {
        super("meter", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.meter = meter;
const Meter = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(meter, AttrOrElem, Elem);
exports.Meter = Meter;

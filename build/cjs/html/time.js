"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = exports.time = void 0;
const tag_js_1 = require("../core/tag.js");
class time extends tag_js_1.tag {
    constructor(...arg) {
        super("time", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.time = time;
const Time = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(time, AttrOrElem, Elem);
exports.Time = Time;

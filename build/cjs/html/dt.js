"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dt = exports.dt = void 0;
const tag_js_1 = require("../core/tag.js");
class dt extends tag_js_1.tag {
    constructor(...arg) {
        super("dt", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.dt = dt;
const Dt = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(dt, AttrOrElem, Elem);
exports.Dt = Dt;

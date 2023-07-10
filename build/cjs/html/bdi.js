"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bdi = exports.bdi = void 0;
const tag_js_1 = require("../core/tag.js");
class bdi extends tag_js_1.tag {
    constructor(...arg) {
        super("bdi", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.bdi = bdi;
const Bdi = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(bdi, AttrOrElem, Elem);
exports.Bdi = Bdi;

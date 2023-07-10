"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sup = exports.sup = void 0;
const tag_js_1 = require("../core/tag.js");
class sup extends tag_js_1.tag {
    constructor(...arg) {
        super("sup", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.sup = sup;
const Sup = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(sup, AttrOrElem, Elem);
exports.Sup = Sup;

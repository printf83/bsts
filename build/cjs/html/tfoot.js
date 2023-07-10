"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tfoot = exports.tfoot = void 0;
const tag_js_1 = require("../core/tag.js");
class tfoot extends tag_js_1.tag {
    constructor(...arg) {
        super("tfoot", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.tfoot = tfoot;
const Tfoot = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(tfoot, AttrOrElem, Elem);
exports.Tfoot = Tfoot;

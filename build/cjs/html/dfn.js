"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dfn = exports.dfn = void 0;
const tag_js_1 = require("../core/tag.js");
class dfn extends tag_js_1.tag {
    constructor(...arg) {
        super("dfn", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.dfn = dfn;
const Dfn = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(dfn, AttrOrElem, Elem);
exports.Dfn = Dfn;

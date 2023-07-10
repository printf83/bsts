"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Obj = exports.obj = void 0;
const tag_js_1 = require("../core/tag.js");
class obj extends tag_js_1.tag {
    constructor(...arg) {
        super("object", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.obj = obj;
const Obj = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(obj, AttrOrElem, Elem);
exports.Obj = Obj;

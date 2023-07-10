"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aside = exports.aside = void 0;
const tag_js_1 = require("../core/tag.js");
class aside extends tag_js_1.tag {
    constructor(...arg) {
        super("aside", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.aside = aside;
const Aside = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(aside, AttrOrElem, Elem);
exports.Aside = Aside;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = exports.section = void 0;
const tag_js_1 = require("../core/tag.js");
class section extends tag_js_1.tag {
    constructor(...arg) {
        super("section", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.section = section;
const Section = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(section, AttrOrElem, Elem);
exports.Section = Section;

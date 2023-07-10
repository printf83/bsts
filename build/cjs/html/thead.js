"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thead = exports.thead = void 0;
const tag_js_1 = require("../core/tag.js");
class thead extends tag_js_1.tag {
    constructor(...arg) {
        super("thead", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.thead = thead;
const Thead = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(thead, AttrOrElem, Elem);
exports.Thead = Thead;

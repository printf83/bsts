"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = exports.nav = void 0;
const tag_js_1 = require("../core/tag.js");
class nav extends tag_js_1.tag {
    constructor(...arg) {
        super("nav", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.nav = nav;
const Nav = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(nav, AttrOrElem, Elem);
exports.Nav = Nav;

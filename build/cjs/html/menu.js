"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.menu = void 0;
const tag_js_1 = require("../core/tag.js");
class menu extends tag_js_1.tag {
    constructor(...arg) {
        super("menu", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.menu = menu;
const Menu = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(menu, AttrOrElem, Elem);
exports.Menu = Menu;

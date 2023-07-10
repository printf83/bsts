"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = exports.main = void 0;
const tag_js_1 = require("../core/tag.js");
class main extends tag_js_1.tag {
    constructor(...arg) {
        super("main", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.main = main;
const Main = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(main, AttrOrElem, Elem);
exports.Main = Main;

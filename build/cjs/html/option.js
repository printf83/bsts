"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.option = void 0;
const tag_js_1 = require("../core/tag.js");
class option extends tag_js_1.tag {
    constructor(...arg) {
        super("option", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.option = option;
const Option = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(option, AttrOrElem, Elem);
exports.Option = Option;

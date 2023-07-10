"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = exports.variable = void 0;
const tag_js_1 = require("../core/tag.js");
class variable extends tag_js_1.tag {
    constructor(...arg) {
        super("var", (0, tag_js_1.tagConsArg)("elem", arg));
    }
}
exports.variable = variable;
const Variable = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(variable, AttrOrElem, Elem);
exports.Variable = Variable;

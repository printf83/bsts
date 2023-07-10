"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itemcontainer = exports.itemcontainer = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const ul_js_1 = require("../../html/ul.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : undefined],
        style: { "--bs-scroll-height": attr.scrollHeight },
    }, attr);
    return attr;
};
class itemcontainer extends ul_js_1.ul {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.itemcontainer = itemcontainer;
const Itemcontainer = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(itemcontainer, AttrOrElem, Elem);
exports.Itemcontainer = Itemcontainer;

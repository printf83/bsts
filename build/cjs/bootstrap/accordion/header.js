"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.header = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const h_js_1 = require("../../html/h.js");
const uuid_js_1 = require("../../core/uuid.js");
const button_js_1 = require("../collapse/button.js");
const convert = (attr) => {
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "accordion-header");
    attr.elem = new button_js_1.button({
        class: "accordion-button",
        defColor: false,
        link: attr.link,
        target: attr.target,
        controlfor: attr.controlfor,
        expanded: attr.expanded,
    }, attr.elem ? attr.elem : "");
    delete attr.link;
    delete attr.target;
    delete attr.controlfor;
    delete attr.expanded;
    return attr;
};
class header extends h_js_1.h {
    constructor(...arg) {
        super(2, convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.header = header;
const Header = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(header, AttrOrElem, Elem);
exports.Header = Header;

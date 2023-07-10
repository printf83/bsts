"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.title = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const uuid_js_1 = require("../../core/uuid.js");
const h_js_1 = require("../../html/h.js");
const convert = (attr) => {
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "offcanvas-title");
    return attr;
};
class title extends h_js_1.h {
    constructor(...arg) {
        super(5, convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.title = title;
const Title = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(title, AttrOrElem, Elem);
exports.Title = Title;

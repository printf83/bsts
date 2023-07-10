"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.title = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const uuid_js_1 = require("../../core/uuid.js");
const h_js_1 = require("../../html/h.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        id: attr.id || (0, uuid_js_1.UUID)(),
        h: 5,
        class: "modal-title",
    }, attr);
    return attr;
};
class title extends h_js_1.h {
    constructor(...arg) {
        super(1, convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.title = title;
const Title = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(title, AttrOrElem, Elem);
exports.Title = Title;

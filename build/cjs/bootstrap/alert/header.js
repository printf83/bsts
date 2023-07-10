"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.header = void 0;
const tag_js_1 = require("../../core/tag.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const h_js_1 = require("../../html/h.js");
const convert = (attr) => {
    //add alert-header
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "alert-heading");
    return attr;
};
class header extends h_js_1.h {
    constructor(...arg) {
        if (arg.length === 0) {
            super(4, convert({}), "Header");
        }
        else if (arg.length === 1) {
            super(arg[0], convert({}));
        }
        else if (arg.length === 2) {
            if ((0, tag_js_1.isAttr)(arg[1])) {
                super(arg[0], convert(arg[1]));
            }
            else {
                super(arg[0], convert({ elem: arg[1] }));
            }
        }
        else if (arg.length === 3) {
            super(arg[0], convert((0, mergeObject_js_1.mergeObject)({ elem: arg[1] }, arg[0])));
        }
    }
}
exports.header = header;
const Header = (Level, AttrOrElem, Elem) => {
    if (AttrOrElem) {
        if ((0, tag_js_1.isAttr)(AttrOrElem)) {
            if (Elem) {
                return new header(Level, AttrOrElem, Elem);
            }
            else {
                return new header(Level, AttrOrElem);
            }
        }
        else {
            return new header(Level, AttrOrElem);
        }
    }
    else {
        return new header(Level);
    }
};
exports.Header = Header;

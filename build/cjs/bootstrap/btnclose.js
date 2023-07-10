"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Btnclose = exports.btnclose = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const tag_js_1 = require("../core/tag.js");
const button_js_1 = require("../html/button.js");
const convert = (attr) => {
    //default value
    attr.label ??= "Close";
    attr.type ??= "button";
    //add btn-close class
    //white
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);
    delete attr.white;
    return attr;
};
class btnclose extends button_js_1.button {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConsNoElemArg)(convert, arg));
    }
}
exports.btnclose = btnclose;
const Btnclose = (Attr) => (0, tag_js_1.genTagClass)(btnclose, Attr);
exports.Btnclose = Btnclose;

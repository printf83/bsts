"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Btnclose = exports.btnclose = void 0;
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const tag_js_1 = require("../../core/tag.js");
const btnclose_js_1 = require("../btnclose.js");
const convert = (attr) => {
    attr.dismiss ??= "modal";
    attr = (0, mergeObject_js_1.mergeObject)({
        data: { "bs-dismiss": attr.dismiss, "bs-target": attr.target },
    }, attr);
    delete attr.dismiss;
    delete attr.target;
    return attr;
};
class btnclose extends btnclose_js_1.btnclose {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConsNoElemArg)(convert, arg));
    }
}
exports.btnclose = btnclose;
const Btnclose = (Attr) => (0, tag_js_1.genTagClass)(btnclose, Attr);
exports.Btnclose = Btnclose;

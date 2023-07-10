"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verticalrule = exports.verticalrule = void 0;
const tag_js_1 = require("../core/tag.js");
const bootstrap_js_1 = require("../core/bootstrap.js");
const div_js_1 = require("../html/div.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["vr"]);
    attr.elem = ` `; //" ";
    return attr;
};
class verticalrule extends div_js_1.div {
    constructor(...arg) {
        super((0, bootstrap_js_1.bsConsNoElemArg)(convert, arg));
    }
}
exports.verticalrule = verticalrule;
const Verticalrule = (Attr) => (0, tag_js_1.genTagClass)(verticalrule, Attr);
exports.Verticalrule = Verticalrule;

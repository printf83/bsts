"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pane = exports.pane = void 0;
const tag_js_1 = require("../../../core/tag.js");
const bootstrap_js_1 = require("../../../core/bootstrap.js");
const mergeClass_js_1 = require("../../../core/mergeClass.js");
const div_js_1 = require("../../../html/div.js");
const convert = (attr) => {
    attr.animation ??= true;
    attr.role ??= "tabpanel";
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        "tab-pane",
        attr.animation ? "fade" : undefined,
        attr.active ? "show" : undefined,
        attr.active ? "active" : undefined,
    ]);
    delete attr.animation;
    delete attr.active;
    return attr;
};
class pane extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.pane = pane;
const Pane = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(pane, AttrOrElem, Elem);
exports.Pane = Pane;

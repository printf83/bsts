"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerDiv = exports.containerDiv = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const div_js_1 = require("../../html/div.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const convert = (attr) => {
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, [
        "list-group",
        attr.flush ? "list-group-flush" : undefined,
        attr.numbered ? "list-group-numbered" : undefined,
        attr.horizontal
            ? attr.horizontal === true
                ? "list-group-horizontal"
                : `list-group-horizontal-${attr.horizontal}`
            : undefined,
    ]);
    delete attr.flush;
    delete attr.numbered;
    delete attr.horizontal;
    return attr;
};
class containerDiv extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.containerDiv = containerDiv;
const ContainerDiv = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(containerDiv, AttrOrElem, Elem);
exports.ContainerDiv = ContainerDiv;

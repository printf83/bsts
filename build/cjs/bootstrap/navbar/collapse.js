"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = exports.collapse = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeClass_js_1 = require("../../core/mergeClass.js");
const uuid_js_1 = require("../../core/uuid.js");
const container_js_1 = require("../collapse/container.js");
const convert = (attr) => {
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "navbar-collapse");
    delete attr.horizontal;
    return attr;
};
class collapse extends container_js_1.container {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.collapse = collapse;
const Collapse = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(collapse, AttrOrElem, Elem);
exports.Collapse = Collapse;

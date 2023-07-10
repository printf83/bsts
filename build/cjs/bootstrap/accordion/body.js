"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = exports.body = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const uuid_js_1 = require("../../core/uuid.js");
const container_js_1 = require("../collapse/container.js");
const div_js_1 = require("../../html/div.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        id: attr.id || (0, uuid_js_1.UUID)(),
        class: ["accordion-collapse", attr.show ? "show" : undefined],
        data: { "bs-parent": attr.parent },
        aria: { labelledby: attr.labelledby },
    }, attr);
    attr.elem = new div_js_1.div({ class: "accordion-body" }, attr.elem ? attr.elem : "");
    delete attr.labelledby;
    delete attr.parent;
    delete attr.show;
    return attr;
};
class body extends container_js_1.container {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.body = body;
const Body = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(body, AttrOrElem, Elem);
exports.Body = Body;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const uuid_js_1 = require("../../core/uuid.js");
const div_js_1 = require("../../html/div.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const convert = (attr) => {
    attr.id ??= (0, uuid_js_1.UUID)();
    attr.autoInit ??= true;
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            attr.autoInit ? "collapse" : undefined,
            attr.horizontal ? "collapse-horizontal" : undefined,
            attr.show ? "show" : undefined,
        ],
        data: {
            "bs-parent": attr.parent,
        },
    }, attr);
    delete attr.autoInit;
    delete attr.horizontal;
    delete attr.parent;
    delete attr.show;
    return attr;
};
class container extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.container = container;
const Container = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(container, AttrOrElem, Elem);
exports.Container = Container;

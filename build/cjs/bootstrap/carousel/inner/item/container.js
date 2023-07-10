"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../../../core/tag.js");
const bootstrap_js_1 = require("../../../../core/bootstrap.js");
const div_js_1 = require("../../../../html/div.js");
const mergeObject_js_1 = require("../../../../core/mergeObject.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: ["carousel-item", attr.active ? "active" : undefined],
        data: { "bs-interval": attr.interval },
    }, attr);
    delete attr.active;
    delete attr.interval;
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

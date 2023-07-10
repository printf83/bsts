"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const uuid_js_1 = require("../../core/uuid.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr.placement ??= "start";
    attr = (0, mergeObject_js_1.mergeObject)({
        id: attr.id || (0, uuid_js_1.UUID)(),
        class: [
            attr.show === true ? "show" : undefined,
            attr.show ? (attr.show === true ? "offcanvas" : `offcanvas-${attr.show}`) : "offcanvas",
            attr.placement ? `offcanvas-${attr.placement}` : undefined,
            attr.debug ? "debug" : undefined,
        ],
        tabindex: "-1",
        textBgColor: attr.textBgColor || attr.dark ? "dark" : undefined,
        data: {
            "bs-scroll": attr.scroll ? "true" : undefined,
            "bs-backdrop": attr.backdrop
                ? attr.backdrop === true
                    ? "true"
                    : attr.backdrop
                : attr.backdrop === false
                    ? "false"
                    : undefined,
        },
        aria: {
            labelledby: attr.labelledby,
        },
    }, attr);
    delete attr.placement;
    delete attr.dark;
    delete attr.show;
    delete attr.backdrop;
    delete attr.scroll;
    delete attr.labelledby;
    delete attr.debug;
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

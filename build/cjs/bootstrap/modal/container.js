"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const uuid_js_1 = require("../../core/uuid.js");
const div_js_1 = require("../../html/div.js");
const convert = (attr) => {
    attr.animation ??= true;
    attr.keyboard ??= attr.backdrop === "static" ? false : undefined;
    attr = (0, mergeObject_js_1.mergeObject)({
        id: attr.id || (0, uuid_js_1.UUID)(),
        class: ["modal", attr.animation && !attr.debug ? "fade" : undefined, attr.debug ? "debug" : undefined],
        tabindex: "-1",
        data: {
            "bs-backdrop": attr.backdrop,
            "bs-keyboard": attr.keyboard,
            "bs-focus": attr.focus,
        },
        aria: {
            hidden: attr.debug ? undefined : "true",
        },
    }, attr);
    const dialogProp = (0, mergeObject_js_1.mergeObject)({
        class: [
            "modal-dialog",
            attr.weight ? `modal-${attr.weight}` : undefined,
            attr.fullscreen
                ? attr.fullscreen === true
                    ? "modal-fullscreen"
                    : `modal-fullscreen-${attr.fullscreen}-down`
                : undefined,
            attr.scrollable ? "modal-dialog-scrollable" : undefined,
            attr.view ? "modal-dialog-centered" : undefined,
        ],
        display: attr.view === "end" ? "flex" : undefined,
        flex: attr.view === "end" ? "column" : undefined,
        justifyContent: attr.view === "end" ? "end" : undefined,
        role: "document",
    }, attr.dialogAttr);
    const contentProp = (0, mergeObject_js_1.mergeObject)({
        class: "modal-content",
    }, attr.contentAttr);
    attr.elem = new div_js_1.div(dialogProp, attr.elem ? new div_js_1.div(contentProp, attr.elem) : new div_js_1.div(contentProp));
    delete attr.backdrop;
    delete attr.focus;
    delete attr.keyboard;
    delete attr.weight;
    delete attr.fullscreen;
    delete attr.view;
    delete attr.scrollable;
    delete attr.animation;
    delete attr.dialogAttr;
    delete attr.contentAttr;
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

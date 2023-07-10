"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = exports.button = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const button_js_1 = require("../button.js");
const visuallyhidden_js_1 = require("../visuallyhidden.js");
const convert = (attr) => {
    if (attr.autoClose) {
        if (attr.autoClose === "auto")
            attr.autoClose = "true";
        if (attr.autoClose === "manual")
            attr.autoClose = "false";
    }
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            "dropdown-toggle",
            attr.split ? "dropdown-toggle-split" : undefined,
            attr.navItem ? "nav-link" : undefined,
        ],
        data: {
            "bs-toggle": "dropdown",
            "bs-offset": attr.viewOffset
                ? Array.isArray(attr.viewOffset)
                    ? attr.viewOffset.join(",")
                    : attr.viewOffset
                : undefined,
            "bs-reference": attr.reference,
            "bs-auto-close": attr.autoClose,
            "bs-boundary": attr.boundary,
            "bs-positioning": attr.positioning,
            "bs-popper-config": attr.popperConfig ? JSON.stringify(attr.popperConfig) : undefined,
        },
        aria: { expanded: "false" },
        defColor: !attr.navItem,
    }, attr);
    if (attr.split) {
        attr.elem = new visuallyhidden_js_1.visuallyhidden(attr.elem || "Toggle dropdown");
    }
    else {
        attr.elem ??= "Dropdown";
    }
    delete attr.viewOffset;
    delete attr.reference;
    delete attr.autoClose;
    delete attr.boundary;
    delete attr.positioning;
    delete attr.popperConfig;
    delete attr.split;
    delete attr.navItem;
    return attr;
};
class button extends button_js_1.button {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.button = button;
const Toggle = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(button, AttrOrElem, Elem);
exports.Toggle = Toggle;

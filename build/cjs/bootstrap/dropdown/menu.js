"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.menu = void 0;
const tag_js_1 = require("../../core/tag.js");
const div_js_1 = require("../../html/div.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const convert = (attr) => {
    attr = (0, mergeObject_js_1.mergeObject)({
        class: [
            "dropdown-menu",
            attr.customStyle ? `custom-style-${attr.customStyle}` : undefined,
            attr.debug ? "debug" : undefined,
        ],
        data: {
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
    }, attr);
    attr.dropdownMenuPositionView = attr.dropdownMenuPositionView || attr.positionView;
    delete attr.viewOffset;
    delete attr.reference;
    delete attr.autoClose;
    delete attr.boundary;
    delete attr.positioning;
    delete attr.popperConfig;
    delete attr.positioning;
    delete attr.positionView;
    delete attr.debug;
    delete attr.customStyle;
    return attr;
};
class menu extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.menu = menu;
const Menu = (AttrOrElem, Elem) => (0, tag_js_1.genTagClass)(menu, AttrOrElem, Elem);
exports.Menu = Menu;

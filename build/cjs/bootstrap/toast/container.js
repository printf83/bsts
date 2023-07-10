"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = exports.ContainerPlacementA = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const div_js_1 = require("../../html/div.js");
exports.ContainerPlacementA = [
    "top-start",
    "top-center",
    "top-end",
    "middle-start",
    "middle-center",
    "middle-end",
    "bottom-start",
    "bottom-center",
    "bottom-end",
];
const convert = (attr) => {
    let placementAttr = {};
    attr.placement ??= "top-end";
    switch (attr.placement) {
        case "top-start":
            placementAttr = { top: 0, start: 0 };
            break;
        case "top-center":
            placementAttr = { top: 0, start: 50, tMiddle: "x" };
            break;
        case "top-end":
            placementAttr = { top: 0, end: 0 };
            break;
        case "middle-start":
            placementAttr = { top: 50, start: 0, tMiddle: "y" };
            break;
        case "middle-center":
            placementAttr = { top: 50, start: 50, tMiddle: true };
            break;
        case "middle-end":
            placementAttr = { top: 50, end: 0, tMiddle: "y" };
            break;
        case "bottom-start":
            placementAttr = { bottom: 0, start: 0 };
            break;
        case "bottom-center":
            placementAttr = { bottom: 0, start: 50, tMiddle: "x" };
            break;
        case "bottom-end":
            placementAttr = { bottom: 0, end: 0 };
            break;
    }
    attr = (0, mergeObject_js_1.mergeObject)({ class: ["toast-container", attr.debug ? "debug" : undefined], padding: 3, position: "fixed" }, attr);
    attr = (0, mergeObject_js_1.mergeObject)(placementAttr, attr);
    delete attr.debug;
    delete attr.placement;
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

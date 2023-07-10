"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.container = void 0;
const tag_js_1 = require("../../core/tag.js");
const bootstrap_js_1 = require("../../core/bootstrap.js");
const mergeObject_js_1 = require("../../core/mergeObject.js");
const div_js_1 = require("../../html/div.js");
const bar_js_1 = require("./bar.js");
const convert = (attr) => {
    attr.max ??= 100;
    attr.min ??= 0;
    if (attr.min > attr.max) {
        attr.min = attr.max;
    }
    if (attr.max < attr.min) {
        attr.max = attr.min;
    }
    attr.value ??= attr.min;
    attr = (0, mergeObject_js_1.mergeObject)({
        class: "progress",
        role: attr.role || "progressbar",
        aria: {
            valuenow: attr.value,
            valuemin: attr.min,
            valuemax: attr.max,
        },
    }, attr);
    if (!attr.elem) {
        let showValue = "";
        let percent = `${((attr.value - attr.min) / (attr.max - attr.min)) * 100}%`;
        switch (attr.text) {
            case "none":
                showValue = "";
                break;
            case "percent":
                showValue = percent;
                break;
            case "progress":
                showValue = `${attr.value}/${attr.max}`;
                break;
            default:
                showValue = attr.text ? attr.text : "";
        }
        attr.elem = new bar_js_1.bar({
            textBgColor: attr.color,
            striped: attr.striped,
            animated: attr.animated,
            overflow: attr.text === showValue ? "visible" : undefined,
            style: { width: attr.stacked ? "100%" : percent },
        }, showValue);
        if (attr.stacked) {
            attr.style = { width: percent };
        }
    }
    delete attr.stacked;
    delete attr.color;
    delete attr.striped;
    delete attr.animated;
    delete attr.text;
    delete attr.value;
    delete attr.min;
    delete attr.max;
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

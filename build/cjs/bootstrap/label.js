"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.label = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const tag_js_1 = require("../core/tag.js");
const mergeClass_js_1 = require("../core/mergeClass.js");
const div_js_1 = require("../html/div.js");
const label_js_1 = require("../html/label.js");
const span_js_1 = require("../html/span.js");
const icon_js_1 = require("./icon.js");
const fnRow = (display, elem) => {
    return new div_js_1.div({ row: true, display: display }, new div_js_1.div({ col: true, textAlign: "center" }, elem));
};
const fnIcon = (display, attr) => {
    if (typeof attr === "string") {
        attr = { id: attr };
    }
    if ((0, tag_js_1.isAttr)(attr)) {
        return new span_js_1.span({ display: display }, new icon_js_1.icon(attr));
    }
    else {
        return new span_js_1.span({ display: display }, attr);
    }
};
const fnElem = (display, elem) => {
    return new span_js_1.span({ display: display }, elem);
};
const convert = (attr) => {
    let tElem;
    let tAttr = attr;
    if (attr && typeof attr.icon !== "undefined") {
        if (attr.elem) {
            //default position
            attr.iconPosition ??= "start";
            //append icon base on position
            switch (attr.iconPosition) {
                case "start":
                    tElem = new div_js_1.div({ display: "flex", gap: 2, alignItem: "center" }, [
                        fnIcon(attr.iconDisplay, attr.icon),
                        fnElem(attr.labelDisplay, attr.elem),
                    ]);
                    break;
                case "end":
                    tElem = new div_js_1.div({ display: "flex", gap: 2, alignItem: "center" }, [
                        fnElem(attr.labelDisplay, attr.elem),
                        fnIcon(attr.iconDisplay, attr.icon),
                    ]);
                    break;
                case "top":
                    tElem = new div_js_1.div({ display: "inline-block" }, [
                        fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
                        fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)),
                    ]);
                    break;
                case "bottom":
                    tElem = new div_js_1.div({ display: "inline-block" }, [
                        fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)),
                        fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
                    ]);
                    break;
                default:
                    throw new Error("Unknow iconPosition");
            }
        }
        else {
            if (attr.icon) {
                if (typeof attr.icon === "string") {
                    attr.icon = { id: attr.icon };
                }
                if ((0, tag_js_1.isAttr)(attr.icon)) {
                    tElem = new icon_js_1.icon(attr.icon);
                }
                else {
                    tElem = attr.icon;
                }
            }
            else {
                tElem = "";
            }
        }
    }
    else {
        if (attr.elem) {
            tElem = attr.elem;
        }
        else {
            tElem = "Label";
        }
    }
    if (attr.stretched) {
        attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, "stretched-link");
    }
    if (attr.color) {
        if (attr.outline === true) {
            attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["btn", `btn-outline-${attr.color}`]);
        }
        else {
            attr.class = (0, mergeClass_js_1.mergeClass)(attr.class, ["btn", `btn-${attr.color}`]);
        }
    }
    delete tAttr.icon;
    delete tAttr.iconPosition;
    delete tAttr.iconDisplay;
    delete tAttr.labelDisplay;
    delete tAttr.stretched;
    delete attr.elem;
    attr.elem = tElem;
    return attr;
};
class label extends label_js_1.label {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.label = label;
const Label = (AttrOrText, Text) => (0, tag_js_1.genTagClass)(label, AttrOrText, Text);
exports.Label = Label;

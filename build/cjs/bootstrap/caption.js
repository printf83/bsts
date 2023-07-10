"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = exports.caption = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const tag_js_1 = require("../core/tag.js");
const div_js_1 = require("../html/div.js");
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
    if (attr && typeof attr.icon !== "undefined") {
        if (attr.elem) {
            //default position
            attr.iconPosition ??= "start";
            //append icon base on position
            switch (attr.iconPosition) {
                case "start":
                    attr = (0, mergeObject_js_1.mergeObject)({ display: "flex", gap: 2, alignItem: "center" }, attr);
                    attr.elem = [fnIcon(attr.iconDisplay, attr.icon), fnElem(attr.labelDisplay, attr.elem)];
                    break;
                case "end":
                    attr = (0, mergeObject_js_1.mergeObject)({ display: "flex", gap: 2, alignItem: "center" }, attr);
                    attr.elem = [fnElem(attr.labelDisplay, attr.elem), fnIcon(attr.iconDisplay, attr.icon)];
                    break;
                case "top":
                    attr = (0, mergeObject_js_1.mergeObject)({ display: "inline-block" }, attr);
                    attr.elem = [
                        fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
                        fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)),
                    ];
                    break;
                case "bottom":
                    attr = (0, mergeObject_js_1.mergeObject)({ display: "inline-block" }, attr);
                    attr.elem = [
                        fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)),
                        fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
                    ];
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
                    attr.elem = new icon_js_1.icon(attr.icon);
                }
                else {
                    attr.elem = attr.icon;
                }
            }
            else {
                attr.elem = "Caption";
            }
        }
    }
    else {
        if (!attr.elem) {
            attr.elem = "Caption";
        }
    }
    delete attr.icon;
    delete attr.iconPosition;
    delete attr.iconDisplay;
    delete attr.labelDisplay;
    return attr;
};
class caption extends div_js_1.div {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.caption = caption;
const Caption = (AttrOrText, Text) => (0, tag_js_1.genTagClass)(caption, AttrOrText, Text);
exports.Caption = Caption;

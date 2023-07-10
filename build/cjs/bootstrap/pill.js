"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pill = exports.pill = void 0;
const bootstrap_js_1 = require("../core/bootstrap.js");
const tag_js_1 = require("../core/tag.js");
const mergeObject_js_1 = require("../core/mergeObject.js");
const div_js_1 = require("../html/div.js");
const small_js_1 = require("../html/small.js");
const span_js_1 = require("../html/span.js");
const icon_js_1 = require("./icon.js");
const fnRow = (elem) => {
    return new div_js_1.div({ row: true }, new div_js_1.div({ col: true, textAlign: "center" }, elem));
};
const fnIcon = (color, iconPosition, rounded, type, attr) => {
    if (typeof attr === "string") {
        attr = { id: attr };
    }
    let a = {};
    if ((0, tag_js_1.isAttr)(attr)) {
        a = attr;
    }
    else {
        a = attr.attr;
    }
    let r;
    let n = typeof rounded === "number" ? rounded : 1;
    switch (iconPosition) {
        case "end":
            r = `end-${n}`;
            // a.weight ??= "sm";
            break;
        case "start":
            r = `start-${n}`;
            // a.weight ??= "sm";
            break;
        case "top":
            r = `top-${n}`;
            // a.weight ??= "2xl";
            a.fontSize = 2;
            break;
        case "bottom":
            r = `bottom-${n}`;
            // a.weight ??= "2xl";
            a.fontSize = 2;
            break;
        default:
            r = `start-${n}`;
    }
    if (rounded === false) {
        r = false;
    }
    if (type === 2) {
        a.textColor ??= color;
    }
    return new span_js_1.span({
        bgOpacity: type === 2 ? 25 : 75,
        bgColor: color,
        textBgColor: type === 2 ? undefined : color,
        rounded: r,
        paddingX: 2,
        paddingY: iconPosition === "top" || iconPosition === "bottom" ? 3 : 1,
        display: iconPosition === "top" || iconPosition === "bottom" ? "block" : undefined,
    }, new icon_js_1.icon(a));
};
const fnElem = (color, iconPosition, rounded, elem) => {
    let r;
    let n = typeof rounded === "number" ? rounded : 1;
    switch (iconPosition) {
        case "end":
            r = `start-${n}`;
            break;
        case "start":
            r = `end-${n}`;
            break;
        case "top":
            r = `bottom-${n}`;
            break;
        case "bottom":
            r = `top-${n}`;
            break;
        default:
            r = `end-${n}`;
    }
    if (rounded === false) {
        r = false;
    }
    return new span_js_1.span({
        bgColor: color,
        textBgColor: color,
        rounded: r,
        paddingX: 2,
        paddingY: 1,
        display: iconPosition === "top" || iconPosition === "bottom" ? "block" : undefined,
    }, elem);
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
                    tElem = new small_js_1.small({ display: "flex", alignItem: "center" }, [
                        fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.type, attr.icon),
                        fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem),
                    ]);
                    break;
                case "end":
                    tElem = new small_js_1.small({ display: "flex", alignItem: "center" }, [
                        fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem),
                        fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.type, attr.icon),
                    ]);
                    break;
                case "top":
                    tElem = new div_js_1.div({ display: "inline-block" }, [
                        fnRow(fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.type, attr.icon)),
                        fnRow(fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem)),
                    ]);
                    break;
                case "bottom":
                    tElem = new div_js_1.div({ display: "inline-block" }, [
                        fnRow(fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem)),
                        fnRow(fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.type, attr.icon)),
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
    delete tAttr.icon;
    delete tAttr.iconPosition;
    delete tAttr.color;
    delete tAttr.rounded;
    delete attr.elem;
    attr.elem = tElem;
    attr = (0, mergeObject_js_1.mergeObject)({
        display: "inline-block",
        fontSize: attr.weight ? (attr.weight === "md" ? 5 : 4) : 6,
    }, attr);
    delete attr.weight;
    return attr;
};
class pill extends small_js_1.small {
    constructor(...arg) {
        super(convert((0, bootstrap_js_1.bsConstArg)("elem", arg)));
    }
}
exports.pill = pill;
const Pill = (AttrOrText, Text) => (0, tag_js_1.genTagClass)(pill, AttrOrText, Text);
exports.Pill = Pill;

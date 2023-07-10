import { bsConstArg } from "../core/bootstrap.js";
import { genTagClass, isAttr } from "../core/tag.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";
import { small } from "../html/small.js";
import { span } from "../html/span.js";
import { icon } from "./icon.js";
const fnRow = (elem) => {
    return new div({ row: true }, new div({ col: true, textAlign: "center" }, elem));
};
const fnIcon = (color, iconPosition, rounded, type, attr) => {
    if (typeof attr === "string") {
        attr = { id: attr };
    }
    let a = {};
    if (isAttr(attr)) {
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
    return new span({
        bgOpacity: type === 2 ? 25 : 75,
        bgColor: color,
        textBgColor: type === 2 ? undefined : color,
        rounded: r,
        paddingX: 2,
        paddingY: iconPosition === "top" || iconPosition === "bottom" ? 3 : 1,
        display: iconPosition === "top" || iconPosition === "bottom" ? "block" : undefined,
    }, new icon(a));
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
    return new span({
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
                    tElem = new small({ display: "flex", alignItem: "center" }, [
                        fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.type, attr.icon),
                        fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem),
                    ]);
                    break;
                case "end":
                    tElem = new small({ display: "flex", alignItem: "center" }, [
                        fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem),
                        fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.type, attr.icon),
                    ]);
                    break;
                case "top":
                    tElem = new div({ display: "inline-block" }, [
                        fnRow(fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.type, attr.icon)),
                        fnRow(fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem)),
                    ]);
                    break;
                case "bottom":
                    tElem = new div({ display: "inline-block" }, [
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
                if (isAttr(attr.icon)) {
                    tElem = new icon(attr.icon);
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
    attr = mergeObject({
        display: "inline-block",
        fontSize: attr.weight ? (attr.weight === "md" ? 5 : 4) : 6,
    }, attr);
    delete attr.weight;
    return attr;
};
export class pill extends small {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Pill = (AttrOrText, Text) => genTagClass(pill, AttrOrText, Text);

import { bsConstArg } from "../core/bootstrap.js";
import { genTagClass, isAttr } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { div } from "../html/div.js";
import { label as TLabel } from "../html/label.js";
import { span } from "../html/span.js";
import { icon } from "./icon.js";
const fnRow = (display, elem) => {
    return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};
const fnIcon = (display, attr) => {
    if (typeof attr === "string") {
        attr = { id: attr };
    }
    if (isAttr(attr)) {
        return new span({ display: display }, new icon(attr));
    }
    else {
        return new span({ display: display }, attr);
    }
};
const fnElem = (display, elem) => {
    return new span({ display: display }, elem);
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
                    tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [
                        fnIcon(attr.iconDisplay, attr.icon),
                        fnElem(attr.labelDisplay, attr.elem),
                    ]);
                    break;
                case "end":
                    tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [
                        fnElem(attr.labelDisplay, attr.elem),
                        fnIcon(attr.iconDisplay, attr.icon),
                    ]);
                    break;
                case "top":
                    tElem = new div({ display: "inline-block" }, [
                        fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
                        fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)),
                    ]);
                    break;
                case "bottom":
                    tElem = new div({ display: "inline-block" }, [
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
    if (attr.stretched) {
        attr.class = mergeClass(attr.class, "stretched-link");
    }
    if (attr.color) {
        if (attr.outline === true) {
            attr.class = mergeClass(attr.class, ["btn", `btn-outline-${attr.color}`]);
        }
        else {
            attr.class = mergeClass(attr.class, ["btn", `btn-${attr.color}`]);
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
export class label extends TLabel {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Label = (AttrOrText, Text) => genTagClass(label, AttrOrText, Text);

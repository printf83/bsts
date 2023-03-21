import { isAttr } from "../core/base/tag.js";
import { div } from "../html/div.js";
import { label as TLabel } from "../html/label.js";
import { icon } from "./icon.js";
const fnRow = (elem) => {
    return new div({ row: true }, new div({ col: true, textAlign: "center" }, elem));
};
const fnIcon = (containerAttr, attr) => {
    return new div(containerAttr || { fontSize: 6 }, new icon(attr));
};
const fnElem = (elem) => {
    return new div({ display: "flex", alignItem: "center" }, elem);
};
const convert = (attr) => {
    let tElem;
    let tAttr = attr;
    if (attr && typeof attr.icon !== "undefined") {
        if (attr.elem) {
            //default position
            attr.iconPosition = attr.iconPosition || "start";
            //append icon base on position
            switch (attr.iconPosition) {
                case "start":
                    tElem = new div({ display: "flex", gap: 3 }, [
                        fnIcon(attr.iconContainer, attr.icon),
                        fnElem(attr.elem),
                    ]);
                    break;
                case "end":
                    tElem = new div({ display: "flex", gap: 3 }, [
                        fnElem(attr.elem),
                        fnIcon(attr.iconContainer, attr.icon),
                    ]);
                    break;
                case "top":
                    tElem = new div({ display: "inline-block", gap: 3 }, [
                        fnRow(fnIcon(attr.iconContainer, attr.icon)),
                        fnRow(fnElem(attr.elem)),
                    ]);
                    break;
                case "bottom":
                    tElem = new div({ display: "inline-block", gap: 3 }, [
                        fnRow(fnElem(attr.elem)),
                        fnRow(fnIcon(attr.iconContainer, attr.icon)),
                    ]);
                    break;
                default:
                    throw new Error("Unknow iconPosition");
            }
        }
        else {
            tElem = new icon(attr.icon);
        }
    }
    else {
        if (attr.elem) {
            tElem = attr.elem;
        }
        else {
            tElem = "Message";
        }
    }
    delete tAttr.icon;
    delete tAttr.iconPosition;
    delete attr.elem;
    attr.elem = tElem;
    return attr;
};
export class msg extends TLabel {
    constructor(...arg) {
        if (arg.length === 0) {
            //#1
            super(convert({}));
        }
        else if (arg.length === 1) {
            if (isAttr(arg[0])) {
                //#2
                super(convert(arg[0]));
            }
            else {
                //#3
                super(convert({ elem: arg[0] }));
            }
        }
        else if (arg.length === 2) {
            if (typeof arg[0] === "string") {
                //#4
                super(convert({ icon: { icon: arg[0] }, elem: arg[1] }));
            }
            else {
                //#5
                super(convert({ icon: arg[0], elem: arg[1] }));
            }
        }
    }
}

import { genTagClass, tag } from "../core/tag.js";
import { bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { visuallyhidden } from "./visuallyhidden.js";
import { mergeObject } from "../core/mergeObject.js";
const convert = (attr) => {
    attr.role ??= "status";
    attr.type ??= "border";
    attr.textColor ??= attr.color || attr.textColor;
    attr.elem ??= "Loading...";
    attr.class = mergeClass(attr.class, [
        `spinner-${attr.type}`,
        attr.small && attr.type ? `spinner-${attr.type}-sm` : undefined,
    ]);
    if (attr.elem === "") {
        attr = mergeObject({ aria: { hidden: "true" } }, attr);
    }
    else {
        if (attr.elem) {
            attr.elem = new visuallyhidden(attr.elem);
        }
    }
    delete attr.small;
    delete attr.type;
    delete attr.color;
    return attr;
};
export class spinner extends tag {
    constructor(...arg) {
        super(bsConstArgTag("elem", "span", "div", (i) => (i.elem === "" ? false : i.elem ? false : true), arg), convert(bsConstArg("elem", arg)));
    }
}
export const Spinner = (AttrOrElem, Elem) => genTagClass(spinner, AttrOrElem, Elem);

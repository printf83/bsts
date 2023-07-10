import { genTagClass } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { button as TToggle } from "../../offcanvas/button.js";
import { bsConstArg } from "../../../core/bootstrap.js";
const convert = (attr) => {
    attr = mergeObject({
        defColor: false,
        class: "navbar-toggler",
        padding: 2,
        border: false,
        elem: attr.elem ? attr.elem : new span({ class: "navbar-toggler-icon" }),
        aria: { expanded: "false", label: "Toggle navigation" },
    }, attr);
    return attr;
};
export class offcanvas extends TToggle {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Offcanvas = (AttrOrElem, Elem) => genTagClass(offcanvas, AttrOrElem, Elem);

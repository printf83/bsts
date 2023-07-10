import { genTagClass } from "../../../core/tag.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { span } from "../../../html/span.js";
import { button } from "../../collapse/button.js";
import { bsConstArg } from "../../../core/bootstrap.js";
const convert = (attr) => {
    attr = mergeObject({
        defColor: false,
        padding: 2,
        border: false,
        class: "navbar-toggler",
        elem: attr.elem ? attr.elem : new span({ class: "navbar-toggler-icon" }),
        aria: { expanded: "false", label: "Toggle navigation" },
    }, attr);
    return attr;
};
export class collapse extends button {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Collapse = (AttrOrElem, Elem) => genTagClass(collapse, AttrOrElem, Elem);

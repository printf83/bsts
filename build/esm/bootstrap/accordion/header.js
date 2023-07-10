import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";
import { UUID } from "../../core/uuid.js";
import { button } from "../collapse/button.js";
const convert = (attr) => {
    attr.id ??= UUID();
    attr.class = mergeClass(attr.class, "accordion-header");
    attr.elem = new button({
        class: "accordion-button",
        defColor: false,
        link: attr.link,
        target: attr.target,
        controlfor: attr.controlfor,
        expanded: attr.expanded,
    }, attr.elem ? attr.elem : "");
    delete attr.link;
    delete attr.target;
    delete attr.controlfor;
    delete attr.expanded;
    return attr;
};
export class header extends h {
    constructor(...arg) {
        super(2, convert(bsConstArg("elem", arg)));
    }
}
export const Header = (AttrOrElem, Elem) => genTagClass(header, AttrOrElem, Elem);

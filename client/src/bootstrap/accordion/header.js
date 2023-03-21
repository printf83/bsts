import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { h } from "../../html/h.js";
import { UUID } from "../../core/fn/uuid.js";
import { toggle } from "../collapse/toggle.js";
const convert = (attr) => {
    attr.id = attr.id || UUID();
    attr.class = mergeClass(attr.class, "accordion-header");
    attr.elem = new toggle({
        class: "accordion-button",
        defColor: false,
        link: attr.link,
        target: attr.target,
        control: attr.control,
        expanded: attr.expanded,
    }, attr.elem ? attr.elem : "");
    delete attr.link;
    delete attr.target;
    delete attr.control;
    delete attr.expanded;
    return attr;
};
export class header extends h {
    constructor(...arg) {
        super(2, bsConstArg("elem", convert, arg));
    }
}

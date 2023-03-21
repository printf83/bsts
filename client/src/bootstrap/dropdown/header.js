import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "dropdown-header");
    return attr;
};
export class header extends h {
    constructor(...arg) {
        super(6, bsConstArg("elem", convert, arg));
    }
}

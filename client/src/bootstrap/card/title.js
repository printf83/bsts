import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-title");
    return attr;
};
export class title extends h {
    constructor(...arg) {
        super(5, bsConstArg("elem", convert, arg));
    }
}

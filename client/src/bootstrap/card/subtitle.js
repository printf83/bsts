import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-subtitle");
    return attr;
};
export class subtitle extends h {
    constructor(...arg) {
        super(6, bsConstArg("elem", convert, arg));
    }
}

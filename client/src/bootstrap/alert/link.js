import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { a } from "../../html/a.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "alert-link");
    return attr;
};
export class link extends a {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

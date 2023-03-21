import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { div } from "../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "form-floating");
    return attr;
};
export class formfloating extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

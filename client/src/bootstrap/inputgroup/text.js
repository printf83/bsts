import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { span } from "../../html/span.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "input-group-text");
    return attr;
};
export class text extends span {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

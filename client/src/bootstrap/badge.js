import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { span } from "../html/span.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "badge");
    return attr;
};
export class badge extends span {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

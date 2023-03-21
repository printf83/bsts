import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { tbody as TTbody } from "../../html/tbody.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.divider ? "table-group-divider" : undefined]);
    delete attr.divider;
    return attr;
};
export class tbody extends TTbody {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

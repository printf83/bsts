import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { p } from "../../html/p.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-text");
    return attr;
};
export class text extends p {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

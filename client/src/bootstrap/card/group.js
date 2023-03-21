import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-group");
    return attr;
};
export class group extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

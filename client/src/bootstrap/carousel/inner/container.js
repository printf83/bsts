import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { div } from "../../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "carousel-inner");
    return attr;
};
export class container extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

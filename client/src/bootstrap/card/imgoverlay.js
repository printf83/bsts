import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-img-overlay");
    return attr;
};
export class imgoverlay extends div {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

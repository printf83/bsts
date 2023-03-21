import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { li } from "../../../html/li.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["nav-item", attr.dropdown ? "dropdown" : undefined]);
    delete attr.dropdown;
    return attr;
};
export class item extends li {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

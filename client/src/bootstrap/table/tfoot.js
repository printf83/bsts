import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { tfoot as TTfoot } from "../../html/tfoot.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);
    delete attr.color;
    return attr;
};
export class tfoot extends TTfoot {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

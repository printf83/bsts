import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { thead as TThead } from "../../html/thead.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);
    delete attr.color;
    return attr;
};
export class thead extends TThead {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

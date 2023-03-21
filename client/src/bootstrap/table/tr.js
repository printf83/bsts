import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { tr as TTr } from "../../html/tr.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.color ? `table-${attr.color}` : undefined,
        attr.active ? "table-active" : undefined,
    ]);
    delete attr.color;
    delete attr.active;
    return attr;
};
export class tr extends TTr {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

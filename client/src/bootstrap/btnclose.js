import { bsConsNoElemArg } from "../core/base/bootstrap.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { button } from "../html/button.js";
const convert = (attr) => {
    //default value
    attr.label = attr.label || "Close";
    attr.type = attr.type || "button";
    //add btn-close class
    //white
    attr.class = mergeClass(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);
    delete attr.white;
    return attr;
};
export class btnclose extends button {
    constructor(...arg) {
        super(bsConsNoElemArg(convert, arg));
    }
}

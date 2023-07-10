import { bsConsNoElemArg } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { genTagClass } from "../core/tag.js";
import { button } from "../html/button.js";
const convert = (attr) => {
    //default value
    attr.label ??= "Close";
    attr.type ??= "button";
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
export const Btnclose = (Attr) => genTagClass(btnclose, Attr);

import { genTagClass } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { hr } from "../../html/hr.js";
import { bsConsNoElemArg } from "../../core/bootstrap.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "dropdown-divider");
    return attr;
};
export class divider extends hr {
    constructor(...arg) {
        super(bsConsNoElemArg(convert, arg));
    }
}
export const Divider = (Attr) => genTagClass(divider, Attr);

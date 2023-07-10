import { genTagClass } from "../core/tag.js";
import { bsConsNoElemArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeClass } from "../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["vr"]);
    attr.elem = ` `; //" ";
    return attr;
};
export class verticalrule extends div {
    constructor(...arg) {
        super(bsConsNoElemArg(convert, arg));
    }
}
export const Verticalrule = (Attr) => genTagClass(verticalrule, Attr);

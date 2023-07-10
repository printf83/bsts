import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tbody as TTbody } from "../../html/tbody.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.divider ? "table-group-divider" : undefined]);
    delete attr.divider;
    return attr;
};
export class tbody extends TTbody {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Tbody = (AttrOrElem, Elem) => genTagClass(tbody, AttrOrElem, Elem);

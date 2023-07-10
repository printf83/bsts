import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
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
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Tr = (AttrOrElem, Elem) => genTagClass(tr, AttrOrElem, Elem);

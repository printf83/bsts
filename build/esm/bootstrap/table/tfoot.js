import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tfoot as TTfoot } from "../../html/tfoot.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);
    delete attr.color;
    return attr;
};
export class tfoot extends TTfoot {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Tfoot = (AttrOrElem, Elem) => genTagClass(tfoot, AttrOrElem, Elem);

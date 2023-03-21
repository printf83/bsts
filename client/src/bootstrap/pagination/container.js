import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { ul } from "../../html/ul.js";
import { nav } from "../../html/nav.js";
const convert = (attr) => {
    //nav only prop is label
    let navAttr = {
        label: attr.label,
    };
    //remove label for ul
    delete attr.label;
    //convert attr for ul
    attr.class = mergeClass(attr.class, ["pagination", attr.weight ? `pagination-${attr.weight}` : undefined]);
    delete attr.weight;
    //add ul to nav
    navAttr.elem = new ul(attr);
    return navAttr;
};
export class container extends nav {
    constructor(...arg) {
        super(bsConstArg("elem", convert, arg));
    }
}

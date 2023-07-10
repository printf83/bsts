import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "dropdown-header");
    return attr;
};
export class header extends h {
    constructor(...arg) {
        super(6, convert(bsConstArg("elem", arg)));
    }
}
export const Header = (AttrOrElem, Elem) => genTagClass(header, AttrOrElem, Elem);

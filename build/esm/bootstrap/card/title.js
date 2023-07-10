import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-title");
    return attr;
};
export class title extends h {
    constructor(...arg) {
        super(5, convert(bsConstArg("elem", arg)));
    }
}
export const Title = (AttrOrElem, Elem) => genTagClass(title, AttrOrElem, Elem);

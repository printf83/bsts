import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-subtitle");
    return attr;
};
export class subtitle extends h {
    constructor(...arg) {
        super(6, convert(bsConstArg("elem", arg)));
    }
}
export const Subtitle = (AttrOrElem, Elem) => genTagClass(subtitle, AttrOrElem, Elem);

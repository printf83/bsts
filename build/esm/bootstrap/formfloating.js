import { genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { div } from "../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "form-floating");
    return attr;
};
export class formfloating extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Formfloating = (AttrOrElem, Elem) => genTagClass(formfloating, AttrOrElem, Elem);

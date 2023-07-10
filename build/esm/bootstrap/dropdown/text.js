import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { span } from "../../html/span.js";
import { mergeClass } from "../../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "dropdown-item-text");
    return attr;
};
export class text extends span {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Text = (AttrOrElem, Elem) => genTagClass(text, AttrOrElem, Elem);

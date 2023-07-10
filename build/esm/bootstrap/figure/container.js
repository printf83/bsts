import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { figure } from "../../html/figure.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "figure");
    return attr;
};
export class container extends figure {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Container = (AttrOrElem, Elem) => genTagClass(container, AttrOrElem, Elem);

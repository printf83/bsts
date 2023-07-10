import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [attr.responsive ? `table-responsive-${attr.responsive}` : "table-responsive"]);
    delete attr.responsive;
    return attr;
};
export class responsive extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Responsive = (AttrOrElem, Elem) => genTagClass(responsive, AttrOrElem, Elem);

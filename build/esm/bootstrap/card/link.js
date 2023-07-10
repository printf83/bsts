import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { a } from "../../html/a.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "card-link");
    return attr;
};
export class link extends a {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Link = (AttrOrElem, Elem) => genTagClass(link, AttrOrElem, Elem);

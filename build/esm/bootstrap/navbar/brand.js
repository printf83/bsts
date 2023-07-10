import { bsConstArg, bsConstArgTag } from "../../core/bootstrap.js";
import { genTagClass, tag } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["navbar-brand"]);
    return attr;
};
export class brand extends tag {
    constructor(...arg) {
        super(bsConstArgTag("elem", "span", "a", (i) => (i.href ? true : false), arg), convert(bsConstArg("elem", arg)));
    }
}
export const Brand = (AttrOrElem, Elem) => genTagClass(brand, AttrOrElem, Elem);

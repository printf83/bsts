import { bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { genTagClass, tag } from "../core/tag.js";
const convert = (attr) => {
    if (attr.href) {
        attr.focusable ??= true;
    }
    attr.visually = attr.focusable ? "hidden-focusable" : "hidden";
    delete attr.focusable;
    return attr;
};
export class visuallyhidden extends tag {
    constructor(...arg) {
        super(bsConstArgTag("elem", "span", "a", (i) => (i.href ? true : false), arg), convert(bsConstArg("elem", arg)));
    }
}
export const Visuallyhidden = (AttrOrElem, Elem) => genTagClass(visuallyhidden, AttrOrElem, Elem);

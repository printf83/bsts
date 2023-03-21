import { bsConstArg, bsConstArgTag } from "../core/base/bootstrap.js";
import { tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
const convert = (attr) => {
    if (attr.href) {
        attr.focusable = attr.focusable || true;
    }
    attr.class = mergeClass(attr.class, [attr.focusable ? "visually-hidden-focusable" : "visually-hidden"]);
    delete attr.focusable;
    return attr;
};
export class visuallyhidden extends tag {
    constructor(...arg) {
        super(bsConstArgTag("span", "a", (i) => (i.href ? true : false), arg), bsConstArg("elem", convert, arg));
    }
}

import { bsConstArg, bsConstArgTag } from "../../core/base/bootstrap.js";
import { tag } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["navbar-brand"]);
    return attr;
};
export class brand extends tag {
    constructor(...arg) {
        super(bsConstArgTag("span", "a", (i) => (i.href ? true : false), arg), bsConstArg("elem", convert, arg));
    }
}

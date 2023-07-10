import { genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { span } from "../html/span.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "badge");
    return attr;
};
export class badge extends span {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Badge = (AttrOrElem, Elem) => genTagClass(badge, AttrOrElem, Elem);

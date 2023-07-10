import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    attr.id ??= UUID();
    attr.class = mergeClass(attr.class, "offcanvas-title");
    return attr;
};
export class title extends h {
    constructor(...arg) {
        super(5, convert(bsConstArg("elem", arg)));
    }
}
export const Title = (AttrOrElem, Elem) => genTagClass(title, AttrOrElem, Elem);

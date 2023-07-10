import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { li } from "../../html/li.js";
import { button } from "../../html/button.js";
import { a } from "../../html/a.js";
import { mergeClass } from "../../core/mergeClass.js";
const convert = (attr) => {
    let liAttr = {
        class: ["page-item", attr.active ? "active" : undefined, attr.disabled ? "disabled" : undefined],
        aria: { current: attr.active ? "page" : undefined },
    };
    if (attr.disabled) {
        attr.href = undefined;
    }
    delete attr.active;
    attr.class = mergeClass(attr.class, "page-link");
    if (attr.href) {
        liAttr.elem = new a(attr);
    }
    else {
        liAttr.elem = new button(attr);
    }
    return liAttr;
};
export class item extends li {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Item = (AttrOrElem, Elem) => genTagClass(item, AttrOrElem, Elem);

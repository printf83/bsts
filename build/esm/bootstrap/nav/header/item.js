import { genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { li } from "../../../html/li.js";
import { button } from "./button.js";
import { link } from "./link.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, ["nav-item", attr.dropdown ? "dropdown" : undefined]);
    if (attr.link && !attr.button && !attr.elem) {
        attr.elem = new link(attr.link);
    }
    else if (!attr.link && attr.button && !attr.elem) {
        attr.elem = new button(attr.button);
    }
    delete attr.dropdown;
    delete attr.link;
    delete attr.button;
    return attr;
};
export class item extends li {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Item = (AttrOrElem, Elem) => genTagClass(item, AttrOrElem, Elem);

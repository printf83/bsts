import { genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";
import { btnclose } from "./btnclose.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, "modal-header");
    if (attr.close) {
        if (attr.elem) {
            if (Array.isArray(attr.elem)) {
                attr.elem.push(new btnclose());
            }
            else {
                attr.elem = [attr.elem, new btnclose()];
            }
        }
        else {
            attr.elem = [new btnclose()];
        }
    }
    delete attr.close;
    return attr;
};
export class header extends div {
    constructor(...arg) {
        super(convert(bsConstArg("elem", arg)));
    }
}
export const Header = (AttrOrElem, Elem) => genTagClass(header, AttrOrElem, Elem);

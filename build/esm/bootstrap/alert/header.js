import { isAttr } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { mergeObject } from "../../core/mergeObject.js";
import { h } from "../../html/h.js";
const convert = (attr) => {
    //add alert-header
    attr.class = mergeClass(attr.class, "alert-heading");
    return attr;
};
export class header extends h {
    constructor(...arg) {
        if (arg.length === 0) {
            super(4, convert({}), "Header");
        }
        else if (arg.length === 1) {
            super(arg[0], convert({}));
        }
        else if (arg.length === 2) {
            if (isAttr(arg[1])) {
                super(arg[0], convert(arg[1]));
            }
            else {
                super(arg[0], convert({ elem: arg[1] }));
            }
        }
        else if (arg.length === 3) {
            super(arg[0], convert(mergeObject({ elem: arg[1] }, arg[0])));
        }
    }
}
export const Header = (Level, AttrOrElem, Elem) => {
    if (AttrOrElem) {
        if (isAttr(AttrOrElem)) {
            if (Elem) {
                return new header(Level, AttrOrElem, Elem);
            }
            else {
                return new header(Level, AttrOrElem);
            }
        }
        else {
            return new header(Level, AttrOrElem);
        }
    }
    else {
        return new header(Level);
    }
};

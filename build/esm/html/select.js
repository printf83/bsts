import { tagConsArg, tag, genTagClass } from "../core/tag.js";
import { optgroup } from "./optgroup.js";
import { option } from "./option.js";
const convert = (attr) => {
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            i = Object.assign({}, i);
            if (i.label && i.item && !i.elem) {
                if (!Array.isArray(i.item)) {
                    i.item = [i.item];
                }
                delete i.value;
                delete i.selected;
                return new optgroup(i);
            }
            else {
                delete i.label;
                delete i.item;
                return new option(i);
            }
        });
    }
    delete attr.item;
    return attr;
};
export class select extends tag {
    constructor(...arg) {
        super("select", convert(tagConsArg("elem", arg)));
    }
}
export const Select = (AttrOrElem, Elem) => genTagClass(select, AttrOrElem, Elem);

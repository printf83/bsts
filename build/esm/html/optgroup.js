import { tagConsArg, tag, genTagClass } from "../core/tag.js";
import { option } from "./option.js";
const convert = (attr) => {
    if (attr.label) {
        attr.attrLabel = attr.label;
        delete attr.label;
    }
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new option(i);
        });
    }
    delete attr.item;
    return attr;
};
export class optgroup extends tag {
    constructor(...arg) {
        super("optgroup", convert(tagConsArg("elem", arg)));
    }
}
export const Optgroup = (AttrOrElem, Elem) => genTagClass(optgroup, AttrOrElem, Elem);

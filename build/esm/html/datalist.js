import { tagConsArg, tag, genTagClass } from "../core/tag.js";
import { option } from "./option.js";
const convert = (attr) => {
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new option({ value: i });
        });
    }
    delete attr.item;
    return attr;
};
export class datalist extends tag {
    constructor(...arg) {
        super("datalist", convert(tagConsArg("elem", arg)));
    }
}
export const Datalist = (AttrOrElem, Elem) => genTagClass(datalist, AttrOrElem, Elem);

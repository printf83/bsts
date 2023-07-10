import { tagConsArg, tag, genTagClass } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { li } from "./li.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, [
        attr.unstyle ? "list-unstyled" : undefined,
        attr.inline ? "list-inline" : undefined,
    ]);
    if (attr.item && !attr.elem) {
        if (!Array.isArray(attr.item)) {
            attr.item = [attr.item];
        }
        attr.elem = attr.item.map((i) => {
            return new li(i);
        });
    }
    delete attr.unstyle;
    delete attr.inline;
    delete attr.item;
    return attr;
};
export class ul extends tag {
    constructor(...arg) {
        super("ul", convert(tagConsArg("elem", arg)));
    }
}
export const Ul = (AttrOrElem, Elem) => genTagClass(ul, AttrOrElem, Elem);

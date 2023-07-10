import { tagConsArg, tag, genTagClass } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, attr.small ? "initialism" : undefined);
    delete attr.small;
    return attr;
};
export class abbr extends tag {
    constructor(...arg) {
        super("abbr", convert(tagConsArg("elem", arg)));
    }
}
export const Abbr = (AttrOrElem, Elem) => genTagClass(abbr, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
const convert = (attr) => {
    attr.class = mergeClass(attr.class, attr.lead ? "lead" : undefined);
    delete attr.lead;
    return attr;
};
export class p extends tag {
    constructor(...arg) {
        super("p", convert(tagConsArg("elem", arg)));
    }
}
export const P = (AttrOrElem, Elem) => genTagClass(p, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class colgroup extends tag {
    constructor(...arg) {
        super("colgroup", tagConsArg("elem", arg));
    }
}
export const Colgroup = (AttrOrElem, Elem) => genTagClass(colgroup, AttrOrElem, Elem);

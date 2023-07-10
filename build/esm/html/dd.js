import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class dd extends tag {
    constructor(...arg) {
        super("dd", tagConsArg("elem", arg));
    }
}
export const Dd = (AttrOrElem, Elem) => genTagClass(dd, AttrOrElem, Elem);

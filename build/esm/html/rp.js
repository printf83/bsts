import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class rp extends tag {
    constructor(...arg) {
        super("rp", tagConsArg("elem", arg));
    }
}
export const Rp = (AttrOrElem, Elem) => genTagClass(rp, AttrOrElem, Elem);

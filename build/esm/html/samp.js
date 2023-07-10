import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class samp extends tag {
    constructor(...arg) {
        super("samp", tagConsArg("elem", arg));
    }
}
export const Samp = (AttrOrElem, Elem) => genTagClass(samp, AttrOrElem, Elem);

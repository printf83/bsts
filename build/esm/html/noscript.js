import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class noscript extends tag {
    constructor(...arg) {
        super("noscript", tagConsArg("elem", arg));
    }
}
export const Noscript = (AttrOrElem, Elem) => genTagClass(noscript, AttrOrElem, Elem);

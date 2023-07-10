import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class wbr extends tag {
    constructor(...arg) {
        super("wbr", tagConsArg("elem", arg));
    }
}
export const Wbr = (AttrOrElem, Elem) => genTagClass(wbr, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class bdo extends tag {
    constructor(...arg) {
        super("bdo", tagConsArg("elem", arg));
    }
}
export const Bdo = (AttrOrElem, Elem) => genTagClass(bdo, AttrOrElem, Elem);

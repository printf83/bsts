import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class q extends tag {
    constructor(...arg) {
        super("q", tagConsArg("elem", arg));
    }
}
export const Q = (AttrOrElem, Elem) => genTagClass(q, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class figcaption extends tag {
    constructor(...arg) {
        super("figcaption", tagConsArg("elem", arg));
    }
}
export const Figcaption = (AttrOrElem, Elem) => genTagClass(figcaption, AttrOrElem, Elem);

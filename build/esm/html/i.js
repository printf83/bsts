import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class i extends tag {
    constructor(...arg) {
        super("i", tagConsArg("elem", arg));
    }
}
export const I = (AttrOrElem, Elem) => genTagClass(i, AttrOrElem, Elem);

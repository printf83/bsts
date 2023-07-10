import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class th extends tag {
    constructor(...arg) {
        super("th", tagConsArg("elem", arg));
    }
}
export const Th = (AttrOrElem, Elem) => genTagClass(th, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class sup extends tag {
    constructor(...arg) {
        super("sup", tagConsArg("elem", arg));
    }
}
export const Sup = (AttrOrElem, Elem) => genTagClass(sup, AttrOrElem, Elem);

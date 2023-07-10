import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class b extends tag {
    constructor(...arg) {
        super("b", tagConsArg("elem", arg));
    }
}
export const B = (AttrOrElem, Elem) => genTagClass(b, AttrOrElem, Elem);

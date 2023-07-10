import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class small extends tag {
    constructor(...arg) {
        super("small", tagConsArg("elem", arg));
    }
}
export const Small = (AttrOrElem, Elem) => genTagClass(small, AttrOrElem, Elem);

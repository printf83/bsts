import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class s extends tag {
    constructor(...arg) {
        super("s", tagConsArg("elem", arg));
    }
}
export const S = (AttrOrElem, Elem) => genTagClass(s, AttrOrElem, Elem);

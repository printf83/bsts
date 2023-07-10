import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class tr extends tag {
    constructor(...arg) {
        super("tr", tagConsArg("elem", arg));
    }
}
export const Tr = (AttrOrElem, Elem) => genTagClass(tr, AttrOrElem, Elem);

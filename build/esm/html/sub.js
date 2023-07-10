import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class sub extends tag {
    constructor(...arg) {
        super("sub", tagConsArg("elem", arg));
    }
}
export const Sub = (AttrOrElem, Elem) => genTagClass(sub, AttrOrElem, Elem);

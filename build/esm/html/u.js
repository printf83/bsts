import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class u extends tag {
    constructor(...arg) {
        super("u", tagConsArg("elem", arg));
    }
}
export const U = (AttrOrElem, Elem) => genTagClass(u, AttrOrElem, Elem);

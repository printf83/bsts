import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class aside extends tag {
    constructor(...arg) {
        super("aside", tagConsArg("elem", arg));
    }
}
export const Aside = (AttrOrElem, Elem) => genTagClass(aside, AttrOrElem, Elem);

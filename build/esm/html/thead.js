import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class thead extends tag {
    constructor(...arg) {
        super("thead", tagConsArg("elem", arg));
    }
}
export const Thead = (AttrOrElem, Elem) => genTagClass(thead, AttrOrElem, Elem);

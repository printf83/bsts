import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class head extends tag {
    constructor(...arg) {
        super("head", tagConsArg("elem", arg));
    }
}
export const Head = (AttrOrElem, Elem) => genTagClass(head, AttrOrElem, Elem);

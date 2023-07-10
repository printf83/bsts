import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class caption extends tag {
    constructor(...arg) {
        super("caption", tagConsArg("elem", arg));
    }
}
export const Caption = (AttrOrElem, Elem) => genTagClass(caption, AttrOrElem, Elem);

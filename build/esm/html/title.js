import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class title extends tag {
    constructor(...arg) {
        super("title", tagConsArg("elem", arg));
    }
}
export const Title = (AttrOrElem, Elem) => genTagClass(title, AttrOrElem, Elem);

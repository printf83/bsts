import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class span extends tag {
    constructor(...arg) {
        super("span", tagConsArg("elem", arg));
    }
}
export const Span = (AttrOrElem, Elem) => genTagClass(span, AttrOrElem, Elem);

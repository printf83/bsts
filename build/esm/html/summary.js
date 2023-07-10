import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class summary extends tag {
    constructor(...arg) {
        super("summary", tagConsArg("elem", arg));
    }
}
export const Summary = (AttrOrElem, Elem) => genTagClass(summary, AttrOrElem, Elem);

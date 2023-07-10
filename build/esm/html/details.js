import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class details extends tag {
    constructor(...arg) {
        super("details", tagConsArg("elem", arg));
    }
}
export const Details = (AttrOrElem, Elem) => genTagClass(details, AttrOrElem, Elem);

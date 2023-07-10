import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class em extends tag {
    constructor(...arg) {
        super("em", tagConsArg("elem", arg));
    }
}
export const Em = (AttrOrElem, Elem) => genTagClass(em, AttrOrElem, Elem);

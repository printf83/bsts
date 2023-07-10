import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class section extends tag {
    constructor(...arg) {
        super("section", tagConsArg("elem", arg));
    }
}
export const Section = (AttrOrElem, Elem) => genTagClass(section, AttrOrElem, Elem);

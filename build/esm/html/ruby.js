import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class ruby extends tag {
    constructor(...arg) {
        super("ruby", tagConsArg("elem", arg));
    }
}
export const Ruby = (AttrOrElem, Elem) => genTagClass(ruby, AttrOrElem, Elem);

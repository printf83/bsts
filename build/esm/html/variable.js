import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class variable extends tag {
    constructor(...arg) {
        super("var", tagConsArg("elem", arg));
    }
}
export const Variable = (AttrOrElem, Elem) => genTagClass(variable, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class fieldset extends tag {
    constructor(...arg) {
        super("fieldset", tagConsArg("elem", arg));
    }
}
export const Fieldset = (AttrOrElem, Elem) => genTagClass(fieldset, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class form extends tag {
    constructor(...arg) {
        super("form", tagConsArg("elem", arg));
    }
}
export const Form = (AttrOrElem, Elem) => genTagClass(form, AttrOrElem, Elem);

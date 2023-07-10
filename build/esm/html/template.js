import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class template extends tag {
    constructor(...arg) {
        super("template", tagConsArg("elem", arg));
    }
}
export const Template = (AttrOrElem, Elem) => genTagClass(template, AttrOrElem, Elem);

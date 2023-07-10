import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class label extends tag {
    constructor(...arg) {
        super("label", tagConsArg("elem", arg));
    }
}
export const Label = (AttrOrElem, Elem) => genTagClass(label, AttrOrElem, Elem);

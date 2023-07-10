import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class output extends tag {
    constructor(...arg) {
        super("output", tagConsArg("elem", arg));
    }
}
export const Output = (AttrOrElem, Elem) => genTagClass(output, AttrOrElem, Elem);

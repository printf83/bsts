import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class ins extends tag {
    constructor(...arg) {
        super("ins", tagConsArg("elem", arg));
    }
}
export const Ins = (AttrOrElem, Elem) => genTagClass(ins, AttrOrElem, Elem);

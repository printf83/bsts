import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class rt extends tag {
    constructor(...arg) {
        super("rt", tagConsArg("elem", arg));
    }
}
export const Rt = (AttrOrElem, Elem) => genTagClass(rt, AttrOrElem, Elem);

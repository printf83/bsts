import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class dt extends tag {
    constructor(...arg) {
        super("dt", tagConsArg("elem", arg));
    }
}
export const Dt = (AttrOrElem, Elem) => genTagClass(dt, AttrOrElem, Elem);

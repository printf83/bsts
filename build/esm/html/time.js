import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class time extends tag {
    constructor(...arg) {
        super("time", tagConsArg("elem", arg));
    }
}
export const Time = (AttrOrElem, Elem) => genTagClass(time, AttrOrElem, Elem);

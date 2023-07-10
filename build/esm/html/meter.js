import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class meter extends tag {
    constructor(...arg) {
        super("meter", tagConsArg("elem", arg));
    }
}
export const Meter = (AttrOrElem, Elem) => genTagClass(meter, AttrOrElem, Elem);

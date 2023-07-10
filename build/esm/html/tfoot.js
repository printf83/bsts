import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class tfoot extends tag {
    constructor(...arg) {
        super("tfoot", tagConsArg("elem", arg));
    }
}
export const Tfoot = (AttrOrElem, Elem) => genTagClass(tfoot, AttrOrElem, Elem);

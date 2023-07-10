import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class dfn extends tag {
    constructor(...arg) {
        super("dfn", tagConsArg("elem", arg));
    }
}
export const Dfn = (AttrOrElem, Elem) => genTagClass(dfn, AttrOrElem, Elem);

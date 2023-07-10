import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class del extends tag {
    constructor(...arg) {
        super("del", tagConsArg("elem", arg));
    }
}
export const Del = (AttrOrElem, Elem) => genTagClass(del, AttrOrElem, Elem);

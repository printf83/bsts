import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class obj extends tag {
    constructor(...arg) {
        super("object", tagConsArg("elem", arg));
    }
}
export const Obj = (AttrOrElem, Elem) => genTagClass(obj, AttrOrElem, Elem);

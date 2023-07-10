import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class pre extends tag {
    constructor(...arg) {
        super("pre", tagConsArg("elem", arg));
    }
}
export const Pre = (AttrOrElem, Elem) => genTagClass(pre, AttrOrElem, Elem);

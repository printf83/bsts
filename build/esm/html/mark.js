import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class mark extends tag {
    constructor(...arg) {
        super("mark", tagConsArg("elem", arg));
    }
}
export const Mark = (AttrOrElem, Elem) => genTagClass(mark, AttrOrElem, Elem);

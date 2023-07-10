import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class code extends tag {
    constructor(...arg) {
        super("code", tagConsArg("elem", arg));
    }
}
export const Code = (AttrOrElem, Elem) => genTagClass(code, AttrOrElem, Elem);

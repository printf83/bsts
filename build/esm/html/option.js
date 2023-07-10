import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class option extends tag {
    constructor(...arg) {
        super("option", tagConsArg("elem", arg));
    }
}
export const Option = (AttrOrElem, Elem) => genTagClass(option, AttrOrElem, Elem);

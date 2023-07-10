import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class tbody extends tag {
    constructor(...arg) {
        super("tbody", tagConsArg("elem", arg));
    }
}
export const Tbody = (AttrOrElem, Elem) => genTagClass(tbody, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class td extends tag {
    constructor(...arg) {
        super("td", tagConsArg("elem", arg));
    }
}
export const Td = (AttrOrElem, Elem) => genTagClass(td, AttrOrElem, Elem);

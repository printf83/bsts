import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class header extends tag {
    constructor(...arg) {
        super("header", tagConsArg("elem", arg));
    }
}
export const Header = (AttrOrElem, Elem) => genTagClass(header, AttrOrElem, Elem);

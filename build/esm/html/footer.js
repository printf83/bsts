import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class footer extends tag {
    constructor(...arg) {
        super("footer", tagConsArg("elem", arg));
    }
}
export const Footer = (AttrOrElem, Elem) => genTagClass(footer, AttrOrElem, Elem);

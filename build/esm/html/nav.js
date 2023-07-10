import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class nav extends tag {
    constructor(...arg) {
        super("nav", tagConsArg("elem", arg));
    }
}
export const Nav = (AttrOrElem, Elem) => genTagClass(nav, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class menu extends tag {
    constructor(...arg) {
        super("menu", tagConsArg("elem", arg));
    }
}
export const Menu = (AttrOrElem, Elem) => genTagClass(menu, AttrOrElem, Elem);

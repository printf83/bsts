import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class kbd extends tag {
    constructor(...arg) {
        super("kbd", tagConsArg("elem", arg));
    }
}
export const Kbd = (AttrOrElem, Elem) => genTagClass(kbd, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class div extends tag {
    constructor(...arg) {
        super("div", tagConsArg("elem", arg));
    }
}
export const Div = (AttrOrElem, Elem) => genTagClass(div, AttrOrElem, Elem);

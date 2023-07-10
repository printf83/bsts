import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class button extends tag {
    constructor(...arg) {
        super("button", tagConsArg("elem", arg));
    }
}
export const Button = (AttrOrElem, Elem) => genTagClass(button, AttrOrElem, Elem);

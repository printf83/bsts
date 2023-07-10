import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class dialog extends tag {
    constructor(...arg) {
        super("dialog", tagConsArg("elem", arg));
    }
}
export const Dialog = (AttrOrElem, Elem) => genTagClass(dialog, AttrOrElem, Elem);

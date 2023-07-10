import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class style extends tag {
    constructor(...arg) {
        super("style", tagConsArg("elem", arg));
    }
}
export const Style = (AttrOrElem, Elem) => genTagClass(style, AttrOrElem, Elem);

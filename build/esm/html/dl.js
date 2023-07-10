import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class dl extends tag {
    constructor(...arg) {
        super("dl", tagConsArg("elem", arg));
    }
}
export const Dl = (AttrOrElem, Elem) => genTagClass(dl, AttrOrElem, Elem);

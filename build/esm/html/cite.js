import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class cite extends tag {
    constructor(...arg) {
        super("cite", tagConsArg("elem", arg));
    }
}
export const Cite = (AttrOrElem, Elem) => genTagClass(cite, AttrOrElem, Elem);

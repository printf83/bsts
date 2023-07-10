import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class strong extends tag {
    constructor(...arg) {
        super("strong", tagConsArg("elem", arg));
    }
}
export const Strong = (AttrOrElem, Elem) => genTagClass(strong, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class body extends tag {
    constructor(...arg) {
        super("body", tagConsArg("elem", arg));
    }
}
export const Body = (AttrOrElem, Elem) => genTagClass(body, AttrOrElem, Elem);

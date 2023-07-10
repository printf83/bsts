import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class data extends tag {
    constructor(...arg) {
        super("data", tagConsArg("elem", arg));
    }
}
export const Data = (AttrOrElem, Elem) => genTagClass(data, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class area extends tag {
    constructor(...arg) {
        super("area", tagConsArg("elem", arg));
    }
}
export const Area = (AttrOrElem, Elem) => genTagClass(area, AttrOrElem, Elem);

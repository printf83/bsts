import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class picture extends tag {
    constructor(...arg) {
        super("picture", tagConsArg("elem", arg));
    }
}
export const Picture = (AttrOrElem, Elem) => genTagClass(picture, AttrOrElem, Elem);

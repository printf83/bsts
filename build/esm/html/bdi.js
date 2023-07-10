import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class bdi extends tag {
    constructor(...arg) {
        super("bdi", tagConsArg("elem", arg));
    }
}
export const Bdi = (AttrOrElem, Elem) => genTagClass(bdi, AttrOrElem, Elem);

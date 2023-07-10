import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class figure extends tag {
    constructor(...arg) {
        super("figure", tagConsArg("elem", arg));
    }
}
export const Figure = (AttrOrElem, Elem) => genTagClass(figure, AttrOrElem, Elem);

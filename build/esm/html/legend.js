import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class legend extends tag {
    constructor(...arg) {
        super("legend", tagConsArg("elem", arg));
    }
}
export const Legend = (AttrOrElem, Elem) => genTagClass(legend, AttrOrElem, Elem);

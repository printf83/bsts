import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class address extends tag {
    constructor(...arg) {
        super("address", tagConsArg("elem", arg));
    }
}
export const Address = (AttrOrElem, Elem) => genTagClass(address, AttrOrElem, Elem);

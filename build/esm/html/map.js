import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class map extends tag {
    constructor(...arg) {
        super("map", tagConsArg("elem", arg));
    }
}
export const Map = (AttrOrElem, Elem) => genTagClass(map, AttrOrElem, Elem);

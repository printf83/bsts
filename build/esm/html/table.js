import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class table extends tag {
    constructor(...arg) {
        super("table", tagConsArg("elem", arg));
    }
}
export const Table = (AttrOrElem, Elem) => genTagClass(table, AttrOrElem, Elem);

import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class main extends tag {
    constructor(...arg) {
        super("main", tagConsArg("elem", arg));
    }
}
export const Main = (AttrOrElem, Elem) => genTagClass(main, AttrOrElem, Elem);

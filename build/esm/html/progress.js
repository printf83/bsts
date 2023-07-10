import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class progress extends tag {
    constructor(...arg) {
        super("progress", tagConsArg("elem", arg));
    }
}
export const Progress = (AttrOrElem, Elem) => genTagClass(progress, AttrOrElem, Elem);

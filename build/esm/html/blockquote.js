import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class blockquote extends tag {
    constructor(...arg) {
        super("blockquote", tagConsArg("elem", arg));
    }
}
export const Blockquote = (AttrOrElem, Elem) => genTagClass(blockquote, AttrOrElem, Elem);

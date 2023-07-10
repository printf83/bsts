import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class audio extends tag {
    constructor(...arg) {
        super("audio", tagConsArg("elem", arg));
    }
}
export const Audio = (AttrOrElem, Elem) => genTagClass(audio, AttrOrElem, Elem);

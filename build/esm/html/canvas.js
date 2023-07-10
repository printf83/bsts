import { tagConsArg, tag, genTagClass } from "../core/tag.js";
export class canvas extends tag {
    constructor(...arg) {
        super("canvas", tagConsArg("elem", arg));
    }
}
export const Canvas = (AttrOrElem, Elem) => genTagClass(canvas, AttrOrElem, Elem);

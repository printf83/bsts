import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class col extends tag {
    constructor(...arg) {
        super("col", tagConsNoElemArg(arg));
    }
}
export const Col = (Attr) => genTagClass(col, Attr);

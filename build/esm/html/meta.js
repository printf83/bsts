import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class meta extends tag {
    constructor(...arg) {
        super("meta", tagConsNoElemArg(arg));
    }
}
export const Meta = (Attr) => genTagClass(meta, Attr);

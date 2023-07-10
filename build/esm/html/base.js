import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class base extends tag {
    constructor(...arg) {
        super("base", tagConsNoElemArg(arg));
    }
}
export const Base = (Attr) => genTagClass(base, Attr);

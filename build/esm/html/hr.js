import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class hr extends tag {
    constructor(...arg) {
        super("hr", tagConsNoElemArg(arg));
    }
}
export const Hr = (Attr) => genTagClass(hr, Attr);

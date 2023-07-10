import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class br extends tag {
    constructor(...arg) {
        super("br", tagConsNoElemArg(arg));
    }
}
export const Br = (Attr) => genTagClass(br, Attr);

import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class iframe extends tag {
    constructor(...arg) {
        super("iframe", tagConsNoElemArg(arg));
    }
}
export const Iframe = (Attr) => genTagClass(iframe, Attr);

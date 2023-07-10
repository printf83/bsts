import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class link extends tag {
    constructor(...arg) {
        super("link", tagConsNoElemArg(arg));
    }
}
export const Link = (Attr) => genTagClass(link, Attr);

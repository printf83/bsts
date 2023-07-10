import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class img extends tag {
    constructor(...arg) {
        super("img", tagConsNoElemArg(arg));
    }
}
export const Img = (Attr) => genTagClass(img, Attr);

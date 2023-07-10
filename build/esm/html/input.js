import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class input extends tag {
    constructor(...arg) {
        super("input", tagConsNoElemArg(arg));
    }
}
export const Input = (Attr) => genTagClass(input, Attr);

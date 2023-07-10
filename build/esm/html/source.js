import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class source extends tag {
    constructor(...arg) {
        super("source", tagConsNoElemArg(arg));
    }
}
export const Source = (Attr) => genTagClass(source, Attr);

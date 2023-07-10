import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class param extends tag {
    constructor(...arg) {
        super("param", tagConsNoElemArg(arg));
    }
}
export const Param = (Attr) => genTagClass(param, Attr);

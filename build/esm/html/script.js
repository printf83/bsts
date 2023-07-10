import { tagConsNoElemArg, tag, genTagClass } from "../core/tag.js";
export class script extends tag {
    constructor(...arg) {
        super("script", tagConsNoElemArg(arg));
    }
}
export const Script = (Attr) => genTagClass(script, Attr);

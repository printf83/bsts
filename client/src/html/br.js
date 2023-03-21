import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class br extends tag {
    constructor(...arg) {
        super("br", tagConsNoElemArg(arg));
    }
}

import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class input extends tag {
    constructor(...arg) {
        super("input", tagConsNoElemArg(arg));
    }
}

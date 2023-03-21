import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class iframe extends tag {
    constructor(...arg) {
        super("iframe", tagConsNoElemArg(arg));
    }
}

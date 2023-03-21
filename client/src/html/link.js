import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class link extends tag {
    constructor(...arg) {
        super("link", tagConsNoElemArg(arg));
    }
}

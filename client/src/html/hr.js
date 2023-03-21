import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class hr extends tag {
    constructor(...arg) {
        super("hr", tagConsNoElemArg(arg));
    }
}

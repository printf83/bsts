import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class base extends tag {
    constructor(...arg) {
        super("base", tagConsNoElemArg(arg));
    }
}

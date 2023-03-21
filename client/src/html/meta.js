import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class meta extends tag {
    constructor(...arg) {
        super("meta", tagConsNoElemArg(arg));
    }
}

import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class param extends tag {
    constructor(...arg) {
        super("param", tagConsNoElemArg(arg));
    }
}

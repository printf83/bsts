import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class source extends tag {
    constructor(...arg) {
        super("source", tagConsNoElemArg(arg));
    }
}

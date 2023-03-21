import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class col extends tag {
    constructor(...arg) {
        super("col", tagConsNoElemArg(arg));
    }
}

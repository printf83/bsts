import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class img extends tag {
    constructor(...arg) {
        super("img", tagConsNoElemArg(arg));
    }
}

import { tagConsNoElemArg, tag } from "../core/base/tag.js";
export class script extends tag {
    constructor(...arg) {
        super("script", tagConsNoElemArg(arg));
    }
}

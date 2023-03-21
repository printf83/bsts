import { tagConsArg, tag } from "../core/base/tag.js";
export class head extends tag {
    constructor(...arg) {
        super("head", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class dl extends tag {
    constructor(...arg) {
        super("dl", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class title extends tag {
    constructor(...arg) {
        super("title", tagConsArg("elem", arg));
    }
}

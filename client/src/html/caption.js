import { tagConsArg, tag } from "../core/base/tag.js";
export class caption extends tag {
    constructor(...arg) {
        super("caption", tagConsArg("elem", arg));
    }
}

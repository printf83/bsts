import { tagConsArg, tag } from "../core/base/tag.js";
export class video extends tag {
    constructor(...arg) {
        super("video", tagConsArg("elem", arg));
    }
}

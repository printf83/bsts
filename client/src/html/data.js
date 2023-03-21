import { tagConsArg, tag } from "../core/base/tag.js";
export class data extends tag {
    constructor(...arg) {
        super("data", tagConsArg("elem", arg));
    }
}

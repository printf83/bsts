import { tagConsArg, tag } from "../core/base/tag.js";
export class th extends tag {
    constructor(...arg) {
        super("th", tagConsArg("elem", arg));
    }
}

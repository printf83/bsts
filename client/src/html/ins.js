import { tagConsArg, tag } from "../core/base/tag.js";
export class ins extends tag {
    constructor(...arg) {
        super("ins", tagConsArg("elem", arg));
    }
}

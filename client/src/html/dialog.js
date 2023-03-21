import { tagConsArg, tag } from "../core/base/tag.js";
export class dialog extends tag {
    constructor(...arg) {
        super("dialog", tagConsArg("elem", arg));
    }
}

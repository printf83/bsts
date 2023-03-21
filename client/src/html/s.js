import { tagConsArg, tag } from "../core/base/tag.js";
export class s extends tag {
    constructor(...arg) {
        super("s", tagConsArg("elem", arg));
    }
}

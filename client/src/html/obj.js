import { tagConsArg, tag } from "../core/base/tag.js";
export class obj extends tag {
    constructor(...arg) {
        super("object", tagConsArg("elem", arg));
    }
}

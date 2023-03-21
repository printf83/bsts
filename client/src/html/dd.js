import { tagConsArg, tag } from "../core/base/tag.js";
export class dd extends tag {
    constructor(...arg) {
        super("dd", tagConsArg("elem", arg));
    }
}

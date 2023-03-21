import { tagConsArg, tag } from "../core/base/tag.js";
export class output extends tag {
    constructor(...arg) {
        super("output", tagConsArg("elem", arg));
    }
}

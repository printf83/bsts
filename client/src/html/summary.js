import { tagConsArg, tag } from "../core/base/tag.js";
export class summary extends tag {
    constructor(...arg) {
        super("summary", tagConsArg("elem", arg));
    }
}

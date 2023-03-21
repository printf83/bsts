import { tagConsArg, tag } from "../core/base/tag.js";
export class article extends tag {
    constructor(...arg) {
        super("article", tagConsArg("elem", arg));
    }
}

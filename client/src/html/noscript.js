import { tagConsArg, tag } from "../core/base/tag.js";
export class noscript extends tag {
    constructor(...arg) {
        super("noscript", tagConsArg("elem", arg));
    }
}

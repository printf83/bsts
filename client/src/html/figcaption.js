import { tagConsArg, tag } from "../core/base/tag.js";
export class figcaption extends tag {
    constructor(...arg) {
        super("figcaption", tagConsArg("elem", arg));
    }
}

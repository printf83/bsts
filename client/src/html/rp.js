import { tagConsArg, tag } from "../core/base/tag.js";
export class rp extends tag {
    constructor(...arg) {
        super("rp", tagConsArg("elem", arg));
    }
}

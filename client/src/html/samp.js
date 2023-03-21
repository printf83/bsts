import { tagConsArg, tag } from "../core/base/tag.js";
export class samp extends tag {
    constructor(...arg) {
        super("samp", tagConsArg("elem", arg));
    }
}

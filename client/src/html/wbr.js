import { tagConsArg, tag } from "../core/base/tag.js";
export class wbr extends tag {
    constructor(...arg) {
        super("wbr", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class bdo extends tag {
    constructor(...arg) {
        super("bdo", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class select extends tag {
    constructor(...arg) {
        super("select", tagConsArg("elem", arg));
    }
}

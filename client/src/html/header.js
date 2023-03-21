import { tagConsArg, tag } from "../core/base/tag.js";
export class header extends tag {
    constructor(...arg) {
        super("header", tagConsArg("elem", arg));
    }
}

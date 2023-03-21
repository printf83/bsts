import { tagConsArg, tag } from "../core/base/tag.js";
export class details extends tag {
    constructor(...arg) {
        super("details", tagConsArg("elem", arg));
    }
}

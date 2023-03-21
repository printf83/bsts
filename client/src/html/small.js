import { tagConsArg, tag } from "../core/base/tag.js";
export class small extends tag {
    constructor(...arg) {
        super("small", tagConsArg("elem", arg));
    }
}

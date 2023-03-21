import { tagConsArg, tag } from "../core/base/tag.js";
export class code extends tag {
    constructor(...arg) {
        super("code", tagConsArg("elem", arg));
    }
}

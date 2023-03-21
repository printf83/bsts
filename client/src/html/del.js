import { tagConsArg, tag } from "../core/base/tag.js";
export class del extends tag {
    constructor(...arg) {
        super("del", tagConsArg("elem", arg));
    }
}

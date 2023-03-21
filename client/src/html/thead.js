import { tagConsArg, tag } from "../core/base/tag.js";
export class thead extends tag {
    constructor(...arg) {
        super("thead", tagConsArg("elem", arg));
    }
}

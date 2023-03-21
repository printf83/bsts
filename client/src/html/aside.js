import { tagConsArg, tag } from "../core/base/tag.js";
export class aside extends tag {
    constructor(...arg) {
        super("aside", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class cite extends tag {
    constructor(...arg) {
        super("cite", tagConsArg("elem", arg));
    }
}

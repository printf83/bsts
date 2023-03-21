import { tagConsArg, tag } from "../core/base/tag.js";
export class footer extends tag {
    constructor(...arg) {
        super("footer", tagConsArg("elem", arg));
    }
}

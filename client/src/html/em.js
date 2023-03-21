import { tagConsArg, tag } from "../core/base/tag.js";
export class em extends tag {
    constructor(...arg) {
        super("em", tagConsArg("elem", arg));
    }
}

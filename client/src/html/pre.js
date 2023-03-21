import { tagConsArg, tag } from "../core/base/tag.js";
export class pre extends tag {
    constructor(...arg) {
        super("pre", tagConsArg("elem", arg));
    }
}

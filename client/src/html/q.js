import { tagConsArg, tag } from "../core/base/tag.js";
export class q extends tag {
    constructor(...arg) {
        super("q", tagConsArg("elem", arg));
    }
}

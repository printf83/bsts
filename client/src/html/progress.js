import { tagConsArg, tag } from "../core/base/tag.js";
export class progress extends tag {
    constructor(...arg) {
        super("progress", tagConsArg("elem", arg));
    }
}

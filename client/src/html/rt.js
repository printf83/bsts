import { tagConsArg, tag } from "../core/base/tag.js";
export class rt extends tag {
    constructor(...arg) {
        super("rt", tagConsArg("elem", arg));
    }
}

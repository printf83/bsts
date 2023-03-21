import { tagConsArg, tag } from "../core/base/tag.js";
export class time extends tag {
    constructor(...arg) {
        super("time", tagConsArg("elem", arg));
    }
}

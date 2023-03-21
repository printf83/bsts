import { tagConsArg, tag } from "../core/base/tag.js";
export class table extends tag {
    constructor(...arg) {
        super("table", tagConsArg("elem", arg));
    }
}

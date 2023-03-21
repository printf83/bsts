import { tagConsArg, tag } from "../core/base/tag.js";
export class option extends tag {
    constructor(...arg) {
        super("option", tagConsArg("elem", arg));
    }
}

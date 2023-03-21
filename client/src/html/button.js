import { tagConsArg, tag } from "../core/base/tag.js";
export class button extends tag {
    constructor(...arg) {
        super("button", tagConsArg("elem", arg));
    }
}

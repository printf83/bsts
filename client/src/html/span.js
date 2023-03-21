import { tagConsArg, tag } from "../core/base/tag.js";
export class span extends tag {
    constructor(...arg) {
        super("span", tagConsArg("elem", arg));
    }
}

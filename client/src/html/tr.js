import { tagConsArg, tag } from "../core/base/tag.js";
export class tr extends tag {
    constructor(...arg) {
        super("tr", tagConsArg("elem", arg));
    }
}

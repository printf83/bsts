import { tagConsArg, tag } from "../core/base/tag.js";
export class variable extends tag {
    constructor(...arg) {
        super("var", tagConsArg("elem", arg));
    }
}

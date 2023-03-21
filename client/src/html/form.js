import { tagConsArg, tag } from "../core/base/tag.js";
export class form extends tag {
    constructor(...arg) {
        super("form", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class template extends tag {
    constructor(...arg) {
        super("template", tagConsArg("elem", arg));
    }
}

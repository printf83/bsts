import { tagConsArg, tag } from "../core/base/tag.js";
export class section extends tag {
    constructor(...arg) {
        super("section", tagConsArg("elem", arg));
    }
}

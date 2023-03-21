import { tagConsArg, tag } from "../core/base/tag.js";
export class colgroup extends tag {
    constructor(...arg) {
        super("colgroup", tagConsArg("elem", arg));
    }
}

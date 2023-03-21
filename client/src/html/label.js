import { tagConsArg, tag } from "../core/base/tag.js";
export class label extends tag {
    constructor(...arg) {
        super("label", tagConsArg("elem", arg));
    }
}

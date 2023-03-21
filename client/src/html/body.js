import { tagConsArg, tag } from "../core/base/tag.js";
export class body extends tag {
    constructor(...arg) {
        super("body", tagConsArg("elem", arg));
    }
}

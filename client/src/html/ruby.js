import { tagConsArg, tag } from "../core/base/tag.js";
export class ruby extends tag {
    constructor(...arg) {
        super("ruby", tagConsArg("elem", arg));
    }
}

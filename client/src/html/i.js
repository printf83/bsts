import { tagConsArg, tag } from "../core/base/tag.js";
export class i extends tag {
    constructor(...arg) {
        super("i", tagConsArg("elem", arg));
    }
}

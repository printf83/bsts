import { tagConsArg, tag } from "../core/base/tag.js";
export class u extends tag {
    constructor(...arg) {
        super("u", tagConsArg("elem", arg));
    }
}

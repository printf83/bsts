import { tagConsArg, tag } from "../core/base/tag.js";
export class div extends tag {
    constructor(...arg) {
        super("div", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class dt extends tag {
    constructor(...arg) {
        super("dt", tagConsArg("elem", arg));
    }
}

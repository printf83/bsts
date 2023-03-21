import { tagConsArg, tag } from "../core/base/tag.js";
export class style extends tag {
    constructor(...arg) {
        super("style", tagConsArg("elem", arg));
    }
}

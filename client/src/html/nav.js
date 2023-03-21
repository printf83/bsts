import { tagConsArg, tag } from "../core/base/tag.js";
export class nav extends tag {
    constructor(...arg) {
        super("nav", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class menu extends tag {
    constructor(...arg) {
        super("menu", tagConsArg("elem", arg));
    }
}

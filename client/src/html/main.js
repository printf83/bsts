import { tagConsArg, tag } from "../core/base/tag.js";
export class main extends tag {
    constructor(...arg) {
        super("main", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class tfoot extends tag {
    constructor(...arg) {
        super("tfoot", tagConsArg("elem", arg));
    }
}

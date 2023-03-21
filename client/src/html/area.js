import { tagConsArg, tag } from "../core/base/tag.js";
export class area extends tag {
    constructor(...arg) {
        super("area", tagConsArg("elem", arg));
    }
}

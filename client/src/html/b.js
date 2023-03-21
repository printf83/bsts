import { tagConsArg, tag } from "../core/base/tag.js";
export class b extends tag {
    constructor(...arg) {
        super("b", tagConsArg("elem", arg));
    }
}

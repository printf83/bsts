import { tagConsArg, tag } from "../core/base/tag.js";
export class sub extends tag {
    constructor(...arg) {
        super("sub", tagConsArg("elem", arg));
    }
}

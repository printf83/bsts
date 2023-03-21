import { tagConsArg, tag } from "../core/base/tag.js";
export class dfn extends tag {
    constructor(...arg) {
        super("dfn", tagConsArg("elem", arg));
    }
}

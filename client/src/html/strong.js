import { tagConsArg, tag } from "../core/base/tag.js";
export class strong extends tag {
    constructor(...arg) {
        super("strong", tagConsArg("elem", arg));
    }
}

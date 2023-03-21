import { tagConsArg, tag } from "../core/base/tag.js";
export class mark extends tag {
    constructor(...arg) {
        super("mark", tagConsArg("elem", arg));
    }
}

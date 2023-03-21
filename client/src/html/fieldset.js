import { tagConsArg, tag } from "../core/base/tag.js";
export class fieldset extends tag {
    constructor(...arg) {
        super("fieldset", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class meter extends tag {
    constructor(...arg) {
        super("meter", tagConsArg("elem", arg));
    }
}

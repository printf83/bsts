import { tagConsArg, tag } from "../core/base/tag.js";
export class kbd extends tag {
    constructor(...arg) {
        super("kbd", tagConsArg("elem", arg));
    }
}

import { tagConsArg, tag } from "../core/base/tag.js";
export class sup extends tag {
    constructor(...arg) {
        super("sup", tagConsArg("elem", arg));
    }
}

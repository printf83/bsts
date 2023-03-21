import { tagConsArg, tag } from "../core/base/tag.js";
export class tbody extends tag {
    constructor(...arg) {
        super("tbody", tagConsArg("elem", arg));
    }
}

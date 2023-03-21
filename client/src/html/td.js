import { tagConsArg, tag } from "../core/base/tag.js";
export class td extends tag {
    constructor(...arg) {
        super("td", tagConsArg("elem", arg));
    }
}

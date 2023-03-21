import { tagConsArg, tag } from "../core/base/tag.js";
export class figure extends tag {
    constructor(...arg) {
        super("figure", tagConsArg("elem", arg));
    }
}

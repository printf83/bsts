import { tagConsArg, tag } from "../core/base/tag.js";
export class picture extends tag {
    constructor(...arg) {
        super("picture", tagConsArg("elem", arg));
    }
}

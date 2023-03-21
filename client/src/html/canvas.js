import { tagConsArg, tag } from "../core/base/tag.js";
export class canvas extends tag {
    constructor(...arg) {
        super("canvas", tagConsArg("elem", arg));
    }
}

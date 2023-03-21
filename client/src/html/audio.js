import { tagConsArg, tag } from "../core/base/tag.js";
export class audio extends tag {
    constructor(...arg) {
        super("audio", tagConsArg("elem", arg));
    }
}

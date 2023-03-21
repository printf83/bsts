import { tagConsArg, tag } from "../core/base/tag.js";
export class map extends tag {
    constructor(...arg) {
        super("map", tagConsArg("elem", arg));
    }
}

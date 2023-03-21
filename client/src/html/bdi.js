import { tagConsArg, tag } from "../core/base/tag.js";
export class bdi extends tag {
    constructor(...arg) {
        super("bdi", tagConsArg("elem", arg));
    }
}

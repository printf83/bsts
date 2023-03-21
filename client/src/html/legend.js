import { tagConsArg, tag } from "../core/base/tag.js";
export class legend extends tag {
    constructor(...arg) {
        super("legend", tagConsArg("elem", arg));
    }
}

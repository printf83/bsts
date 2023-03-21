import { tagConsArg, tag } from "../core/base/tag.js";
export class address extends tag {
    constructor(...arg) {
        super("address", tagConsArg("elem", arg));
    }
}
